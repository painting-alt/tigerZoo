// 第三方
import React, { useState } from 'react'
import InspireCloud from '@byteinspire/js-sdk'

// 样式相关
import StyledForm from './styled'
import { Form, Input, Button } from 'antd'
import { MobileTwoTone, MessageTwoTone } from '@ant-design/icons'

// 轻服务的的 serviceId
const serviceId = 'qcilfy'
const inspirecloud = new InspireCloud({ serviceId })

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState<number>()
    const [authCode, setAuthCode] = useState<string>()
    const [isEnterNumber, setIsEnterNumber] = useState<boolean>(false)
    const [isSendMessage, setIsSendMeesage] = useState<boolean>(true)

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
        return inspirecloud
            .run('sendMessageAPI', {
                phoneNumber,
            })
            .then(res => {
                console.log(res)
                setIsSendMeesage(true)
            })
    }

    // 短信验证码输入事件
    const enterAuthCode = (e: any) => {
        setAuthCode(e.target.value)
    }

    // 登录事件
    const login = () => {
        const code = authCode

        // 调用云函数中名为 loginAPI 的函数
        inspirecloud
            .run('loginByCode', {
                phoneNumber,
                code,
            })
            .then(res => {
                console.log(res)
            })
    }
    // 表单事件结束
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
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
                    value={phoneNumber}
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
                        value={authCode}
                        onChange={e => enterAuthCode(e)}
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
                    type='primary'
                    className='login-form-button'
                    onClick={e => login()}
                >
                    注册 / 登录
                </Button>
            </Form.Item>
        </StyledForm>
    )
}
