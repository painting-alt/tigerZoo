// 第三方组件
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'


// 自定义组件
import UserAvatar from './cpns/userAvatar'
import Publish from './cpns/publish'


// import { Space, Typography, Input, Button, Avatar } from 'antd'
// import { BulbOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons'

//样式相关
import Header from './styled'
import { Space,  Button, Typography, Image } from 'antd'
import { BulbOutlined,} from '@ant-design/icons'

// assets
import logo from '@/assets/img/logo-01.png'


const { Link } = Typography
// export default memo(function HQAppHeader() {
//     const [visible, setVisible] = React.useState(false)
//     const showModal = () => {
//         setVisible(true)
//     }


export default memo(function HQAppHeader(props) {
    const [visible, setVisible] = React.useState(false)
    const isLogin = false
    const navigation = useNavigate()
    const jumpToLogin = () => {
        navigation('/login')
    }


    return (
        <Header>
            <div className='actionBar'>
                <Link href='/#' target='_blank'>
                    <Image
                        src={logo}
                        alt='tigerZoo`s logo. this app`s logo'
                        height={32}
                        preview={false}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
                <Space className='operationalZone' size='large'>
                    <Publish visible={visible} setVisible={setVisible} />
                    <Link href='/#' target='_blank' style={{ color: '#000' }}>
                        <BulbOutlined style={{ fontSize: '20px' }} />
                    </Link>

                    {props.children}
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
