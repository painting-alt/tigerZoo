// 第三方
import React, { FC, memo, useState } from 'react'
import inspirecloud from '@/network/light-initial'

// 样式相关
import StyledForm from './styled'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { SmileTwoTone, LockTwoTone } from '@ant-design/icons'

// LoginPasswordProps 组件参数类型
interface passwordProps {
    jumpToIndex: () => void
}

const LoginPassword: FC<passwordProps> = memo(props => {
    // 父组件传入数据
    const { jumpToIndex } = props

    // 组件内部数据
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onFinish = (values: any) => {
        const { username, password } = values
        setIsLoading(true)

        inspirecloud
            .run('loginByPassword', {
                username,
                password,
            })
            .then(res => {
                setIsLoading(false)
                if (res.sucess) {
                    console.log(res)
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
                name='username'
                rules={[{ required: true, message: '请输入您的用户名' }]}
            >
                <Input prefix={<SmileTwoTone />} placeholder='用户名' />
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
                    <Checkbox>记住用户信息</Checkbox>
                </Form.Item>

                <a className='login-form-forgot' href='/#'>
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button
                    className='login-form-button'
                    type='primary'
                    htmlType='submit'
                    loading={isLoading}
                >
                    登录
                </Button>
            </Form.Item>
        </StyledForm>
    )
})

export default LoginPassword
