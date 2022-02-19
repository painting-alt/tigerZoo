// 第三方组件
import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// 自定义组件
import UserAvatar from './components/user-avatar'

// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import { isAuth, lightGetInfo } from '@/store/user/actionCreators'

// 样式相关
import Header from './styled'
import { Space, Button, Typography, Image, message } from 'antd'
import { BulbOutlined } from '@ant-design/icons'

// assets
import logo from '@/assets/img/logo-01.png'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

const { Link } = Typography

export default memo(function HQAppHeader(props) {
    // 获取 dispatch、navigation 方法
    const dispatch = useDispatch()
    const navigation = useNavigate()

    // 根据 token 判断用户登录态
    useEffect(() => {
        // 页面加载时 判断是否是登录态
        dispatch(isAuth())
    }, [dispatch])

    // 获取用户登录态
    const user = useSelector<IAppState, IUserState>(state => state.user)

    const isLogin = user.userStatus.isAuth

    // 登录态为 success 时 请求用户信息
    useEffect(() => {
        if (isLogin && !user.userInfo._id) {
            dispatch(lightGetInfo())
            // 请求用户信息失败，提示报错信息
            if (user.getInfo.loaded && !user.getInfo.success) {
                message.error(user.getInfo.message)
            }
        }
    }, [isLogin, user.getInfo, user.userInfo, dispatch])

    return (
        <Header>
            <div className='actionBar'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='tigerZoo`s logo. this app`s logo'
                        height={32}
                        preview={false}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
                <Space className='operationalZone' size='large'>
                    {/* 插槽 */}
                    {props.children}

                    <Link href='/' target='_blank' style={{ color: '#000' }}>
                        <BulbOutlined style={{ fontSize: '20px' }} />
                    </Link>
                    {isLogin ? (
                        <UserAvatar />
                    ) : (
                        <Button onClick={() => navigation('/auth')}>
                            登录
                        </Button>
                    )}
                </Space>
            </div>
        </Header>
    )
})
