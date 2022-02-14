// 第三方
import React from 'react'
import InspireCloud from '@byteinspire/js-sdk'

// 样式相关
import loginStyle from '@/assets/css/css_modules/login.module.css'
import { Space, Card, Input, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

// 轻服务的的 serviceId
const serviceId = 'qcu332'
const inspirecloud = new InspireCloud({ serviceId })

export default function Login() {
    return (
        <div className={loginStyle.login}>
            <div className={loginStyle.space}>
                <Space direction='vertical'>
                    <Card title='登录' style={{ width: 300 }}>
                        <Input
                            size='large'
                            placeholder='large size'
                            prefix={<UserOutlined />}
                        />
                        <Input.Password
                            placeholder='input password'
                            style={{ marginTop: '20px' }}
                        />
                    </Card>
                </Space>
                <div style={{ marginTop: '20px', width: '300px' }}>
                    <Button
                        type='primary'
                        size='large'
                        style={{ width: '100%' }}
                    >
                        登录
                    </Button>
                </div>
            </div>
        </div>
    )
}
