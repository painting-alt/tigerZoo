// 第三方
import React, { memo, FC, useState } from 'react'
import InspireCloud from '@byteinspire/js-sdk'

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

// Register 组件参数类型
interface registerProps {
    visible: boolean
    setVisible: (values: boolean) => void
}

const Register: FC<registerProps> = memo(props => {
    // 解构参数
    const { visible, setVisible } = props

    // 定义自身数据
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false)

    // 表单实例
    const [form] = Form.useForm()

    const handleCancel = () => {
        setVisible(false)
    }

    const handleOk = () => {
        setConfirmLoading(true)
        form.validateFields()
            .then(values => {
                createUser(values)
            })
            .catch(info => {
                console.log('Validate Failed:', info)
            })
    }

    const serviceId = 'qcilfy'
    const inspirecloud = new InspireCloud({ serviceId })

    // 创建用户事件
    const createUser = (values: any) => {
        console.log(values)
        const { username, password } = values
        inspirecloud
            .run('createUser', {
                username,
                password,
            })
            .then(res => {
                if (res.sucess) {
                    console.log(res)
                } else {
                    message.error(res.message)
                }

                setConfirmLoading(false)
            })
    }

    return (
        <StyledModal
            title='注册信息'
            cancelText='取消'
            okText='确认注册'
            okButtonProps={{ htmlType: 'submit' }}
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            onOk={() => handleOk()}
        >
            <Form
                {...formItemLayout}
                form={form}
                name='register'
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
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue('password') === value
                                ) {
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

export default Register
