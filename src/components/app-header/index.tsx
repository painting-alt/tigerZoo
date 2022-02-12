// 第三方组件
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

// 自定义组件
import UserAvatar from './cpns/userAvatar'

// 样式相关
import Header from './styled'
import { Space, Button, Typography, Image } from 'antd'
import { BulbOutlined } from '@ant-design/icons'

// assets
import logo from '@/assets/img/logo-01.png'

const { Link } = Typography

export default memo(function HQAppHeader(props) {
    const isLogin = false
    const navigation = useNavigate()
    const jumpToLogin = () => {
        navigation('/login')
    }

    return (
        <Header>
            <div className='actionBar'>
                <Link href='/#'>
                    <Image
                        src={logo}
                        alt='tigerZoo`s logo. this app`s logo'
                        height={32}
                        preview={false}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
                <Space className='operationalZone' size='large'>
                    {props.children}

                    <Link href='/#' target='_blank' style={{ color: '#000' }}>
                        <BulbOutlined style={{ fontSize: '20px' }} />
                    </Link>
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
