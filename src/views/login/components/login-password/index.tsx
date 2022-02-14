// 第三方
import React, { memo } from 'react'
// import InspireCloud from '@byteinspire/js-sdk'

// 样式相关
import StyledForm from './styled'
import { Form, Input, Button, Checkbox } from 'antd'
import { MailTwoTone, LockTwoTone } from '@ant-design/icons'

const LoginPassword = memo(() => {
    // const inspirecloud = new InspireCloud()
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }
    return (
        <StyledForm
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name='email'
                rules={[{ required: true, message: '请输入您的邮箱' }]}
            >
                <Input prefix={<MailTwoTone />} placeholder='邮箱' />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: '请输入您的密码' }]}
            >
                <Input.Password
                    prefix={<LockTwoTone />}
                    type='password'
                    placeholder='密码'
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className='login-form-forgot' href='/#'>
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                >
                    登录
                </Button>
            </Form.Item>
        </StyledForm>
    )
})

export default LoginPassword
