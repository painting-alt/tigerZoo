// 第三方
import React, { FC, memo, useEffect, useState } from 'react'

// 样式相关
import StyledForm from './styled'
import { Form, Input, Button, message } from 'antd'
import { MobileTwoTone, MessageTwoTone } from '@ant-design/icons'

// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import IAppState from '@/store/type'
import { IAuthState } from '@/store/auth/type'
import { lightSendSms, lightSigninByCode } from '@/store/auth/actionCreators'

// LoginPhoneProps 组件参数类型
interface phoneProps {
    jumpToIndex: () => void
}

const LoginPhone: FC<phoneProps> = memo(props => {
    // 父组件传入数据
    const { jumpToIndex } = props

    // 组件内部数据
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [isEnterNumber, setIsEnterNumber] = useState<boolean>(false)
    const [sendSmsLoading, setSendSmsLoading] = useState<boolean>(false)
    const [loginLoading, setLoginLoading] = useState<boolean>(false)

    // 验证手机号码
    const validateMobile = (obj: any, value: any) => {
        if (!value) {
            return Promise.resolve()
        }

        const phoneReg = /^1[3456789]\d{9}$/
        if (!phoneReg.test(value)) {
            return Promise.reject('手机号码格式不正确')
        }

        setIsEnterNumber(true)

        return Promise.resolve()
    }

    // 验证短信验证码
    const validateCode = (obj: any, value: any) => {
        if (!value) {
            return Promise.resolve()
        }

        const phoneReg = /^[123456789]\d{5}$/
        if (!phoneReg.test(value)) {
            return Promise.reject('验证码格式不正确')
        }

        return Promise.resolve()
    }

    //  获取 dipatch 方法
    const dispatch = useDispatch()

    // 获取短信发送结果、登录结果
    const auth = useSelector<IAppState, IAuthState>(state => state.auth)

    useEffect(() => {
        // 短信验证码发送失败
        if (auth.sendSms.loaded && !auth.sendSms.success) {
            message.error(auth.sendSms.message)
            setSendSmsLoading(false)
        }

        // 短信验证码发送成功
        if (auth.sendSms.loaded && auth.sendSms.success) {
            message.success('请及时查看手机短信~')
            setSendSmsLoading(false)
        }

        /* =========================== */

        // 登录失败
        if (auth.signin.loaded && !auth.signin.success) {
            message.error(auth.signin.message)
            setLoginLoading(false)
        }
        // 登录成功
        if (auth.signin.loaded && auth.signin.success) {
            setLoginLoading(false)
            // 跳转至首页
            jumpToIndex()
        }
    }, [
        auth.sendSms,
        setSendSmsLoading,
        auth.signin,
        setLoginLoading,
        jumpToIndex,
    ])

    // 获取表单实例
    const [form] = Form.useForm()

    // 发送短信验证码
    const sendMessage = () => {
        setSendSmsLoading(true)
        // 获取手机号码
        const value: string = form.getFieldsValue().phoneNumber
        dispatch(lightSendSms(value))
        setLoginLoading(false)
    }

    // 表单事件结束
    const onFinish = (value: any) => {
        setLoginLoading(true)
        dispatch(lightSigninByCode(value))
    }

    return (
        <StyledForm
            name='normal_signin'
            initialValues={{ remember: true }}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name='phoneNumber'
                rules={[
                    { required: true, message: '请输入您的手机号' },
                    { validator: validateMobile },
                ]}
            >
                <Input
                    prefix={<MobileTwoTone />}
                    placeholder='手机号'
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name='code'
                rules={[
                    { required: true, message: '请输入短信验证码' },
                    { validator: validateCode },
                ]}
            >
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Input
                        prefix={<MessageTwoTone />}
                        placeholder='六位短信验证码'
                        style={{ width: '50%' }}
                        type='text'
                    />

                    <Button
                        type='primary'
                        size='middle'
                        style={{ width: '40%' }}
                        disabled={!isEnterNumber}
                        loading={sendSmsLoading}
                        onClick={() => sendMessage()}
                    >
                        短信验证
                    </Button>
                </div>
            </Form.Item>
            <Form.Item>
                <Button
                    className='signin-form-button'
                    type='primary'
                    htmlType='submit'
                    loading={loginLoading}
                >
                    注册 / 登录
                </Button>
            </Form.Item>
        </StyledForm>
    )
})

export default LoginPhone
