// 第三方组件
import React, { memo } from 'react'

import { useNavigate } from 'react-router-dom'
import { Space, Input, Button, Typography } from 'antd'
import { BulbOutlined, SearchOutlined } from '@ant-design/icons'

// import { Space, Typography, Input, Button, Avatar } from 'antd'
// import { BulbOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons'

//样式相关
import Header from './styled'

// assets
import logo from '@/assets/img/logo-01.png'

import UserAvatar from './cpns/userAvatar'

export default memo(function HQAppHeader() {
    const isLogin = false
    const navigation = useNavigate()
    const jumpToLogin = () => {
        navigation('/login')
    }
    return (
        <Header>
            <div className='actionBar'>
                <Typography.Link>
                    <img
                        className='logo'
                        src={logo}
                        alt='tigerZoo`s logo. this app`s logo'
                    />
                </Typography.Link>
                <Space className='operationalZone' size='large'>
                    <Input
                        className='point search'
                        bordered={false}
                        style={{
                            width: 240,
                            height: 32,
                            backgroundColor: '#e5e6eb',
                            borderRadius: 5,
                        }}
                        placeholder='输入帖子标题、正文关键字'
                        suffix={<SearchOutlined />}
                    />
                    <Button
                        className='point'
                        type='primary'
                        style={{
                            width: 90,
                            borderRadius: 4,
                            backgroundColor: '#4080ff',
                        }}
                    >
                        发帖
                    </Button>
                    <BulbOutlined
                        className='point'
                        style={{ fontSize: '20px' }}
                    />
                    {isLogin ? (
                        <UserAvatar />
                    ) : (
                        <Button onClick={() => jumpToLogin()}>登录</Button>
                    )}
                </Space>
            </div>
        </Header>
    )
})
