// 第三方
import React, { memo, FC, useState, useEffect } from 'react'

// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import IAppState from '@/store/type'
import { lightSignup, resetSignup } from '@/store/auth/actionCreators'
import { IAuthState, ISignupPayload } from '@/store/auth/type'

// 样式相关
import StyledModal from './styled'
import { Form, Input, message } from 'antd'

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
}

// 验证手机号码
/* const validateMobile = (obj: any, value: any) => {
    if (!value) {
        return Promise.resolve()
    }

    const phoneReg = /^1[3456789]\d{9}$/
    if (!phoneReg.test(value)) {
        return Promise.reject('手机号码格式不正确')
    }

    return Promise.resolve()
} */

// signup 组件参数类型
interface signupProps {
    visible: boolean
    setVisible: (values: boolean) => void
    jumpToIndex: () => void
}

const signup: FC<signupProps> = memo(props => {
    // 解构参数
    const { visible, setVisible, jumpToIndex } = props

    // 定义自身数据
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false)

    // 获取 dispatch 方法
    const dispatch = useDispatch()

    // 获取注册结果
    const auth = useSelector<IAppState, IAuthState>(state => state.auth)

    // 表单实例
    const [form] = Form.useForm()

    const handleOk = () => {
        setConfirmLoading(true)
        form.validateFields()
            .then(values => {
                createUser(values)
            })
            .catch(info => {
                console.log(info)
                message.error(`${info.errorFields[0].errors[0]}`, 3)
                setConfirmLoading(false)
            })
    }

    // 注册表单提交
    const createUser = (value: ISignupPayload) => {
        // 发送注册请求
        dispatch(lightSignup(value))
    }

    // 监听状态
    useEffect(() => {
        // 1. 注册成功, 清空表单、清除按钮 loading 并跳转至 index 页面
        if (auth.signup.loaded && auth.signup.success) {
            form.resetFields()
            setConfirmLoading(false)
            jumpToIndex()
        }

        // 2. 注册失败 显示失败的提示信息
        if (auth.signup.loaded && !auth.signup.success) {
            setConfirmLoading(false)
            message.error(auth.signup.message)
        }
    }, [auth.signup, form, jumpToIndex])

    // 3. 离开页面之前重置页面注册状态
    useEffect(() => {
        return () => {
            dispatch(resetSignup())
        }
    }, [dispatch])

    return (
        <StyledModal
            title='注册信息'
            cancelText='取消'
            okText='确认注册'
            okButtonProps={{ htmlType: 'submit', disabled: isDisabled }}
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={() => setVisible(false)}
            onOk={() => handleOk()}
        >
            <Form
                {...formItemLayout}
                form={form}
                name='signup'
                scrollToFirstError
            >
                <Form.Item
                    name='username'
                    label='用户名'
                    tooltip='你想让他人怎么称呼你?'
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='password'
                    label='密码'
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name='confirm'
                    label='确认密码'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请重复输入密码',
                        },
                        /* 此处存在bug， 删除确认框内容后，触发setIsDisabled() */
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue('password') === value
                                ) {
                                    setIsDisabled(false)
                                    return Promise.resolve()
                                }
                                return Promise.reject(
                                    new Error('两次输入的密码不一致'),
                                )
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item
                    name='email'
                    label='邮箱地址'
                    rules={[
                        {
                            type: 'email',
                            message: '请输入正确格式的邮箱地址',
                        },
                        {
                            required: true,
                            message: '请输入邮箱',
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}

                {/* <Form.Item
                    name='phone'
                    label='手机号码'
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号码',
                        },
                        {
                            validator: validateMobile,
                        },
                    ]}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name='intro'
                    label='个人介绍'
                    rules={[{ required: true, message: '请输入个人介绍' }]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item> */}
            </Form>
        </StyledModal>
    )
})

export default signup
