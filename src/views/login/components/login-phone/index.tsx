// 第三方
import React, { FC, memo, useState } from 'react'
import inspirecloud from '@/network/light-initial'

// 样式相关
import StyledForm from './styled'
import { Form, Input, Button, message } from 'antd'
import { MobileTwoTone, MessageTwoTone } from '@ant-design/icons'

// LoginPhoneProps 组件参数类型
interface phoneProps {
    jumpToIndex: () => void
}

const LoginPhone: FC<phoneProps> = memo(props => {
    // 父组件传入数据
    const { jumpToIndex } = props

    // 组件内部数据
    const [phoneNumber, setPhoneNumber] = useState<number>()
    const [isEnterNumber, setIsEnterNumber] = useState<boolean>(false)
    const [isSendMessage, setIsSendMeesage] = useState<boolean>(true)
    const [isLogin, setIsLogin] = useState<boolean>(false)

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

    // 手机号输入事件
    const enterPhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value)
    }

    // 发送短信验证码
    const sendMessage = () => {
        // 是否已发送短信验证码标志
        setIsSendMeesage(false)

        // 调用云函数中名为 loginAPI 的函数
        inspirecloud
            .run('sendMessageAPI', {
                phoneNumber,
            })
            .then(res => {
                if (res.sucess) {
                    console.log(res.message)
                } else {
                    message.error(res.message)
                }

                setIsSendMeesage(true)
            })
    }

    // 表单事件结束
    const onFinish = (values: any) => {
        const { phoneNumber, authCode: code } = values

        setIsLogin(true)

        // 调用云函数中名为 loginAPI 的函数
        inspirecloud
            .run('loginByCode', {
                phoneNumber,
                code,
            })
            .then(res => {
                setIsLogin(false)
                if (res.sucess) {
                    jumpToIndex()
                } else {
                    message.error(res.message)
                }
            })
    }

    return (
        <StyledForm
            name='normal_login'
            initialValues={{ remember: true }}
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
                    onChange={e => enterPhoneNumber(e)}
                />
            </Form.Item>
            <Form.Item
                name='authCode'
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
                        loading={!isSendMessage}
                        onClick={e => sendMessage()}
                    >
                        短信验证
                    </Button>
                </div>
            </Form.Item>
            <Form.Item>
                <Button
                    className='login-form-button'
                    type='primary'
                    htmlType='submit'
                    loading={isLogin}
                >
                    注册 / 登录
                </Button>
            </Form.Item>
        </StyledForm>
    )
})

export default LoginPhone
