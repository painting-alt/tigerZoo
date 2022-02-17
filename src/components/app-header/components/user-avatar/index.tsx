import React, { useEffect } from 'react'

// 样式相关
import { Avatar, Menu, Dropdown, message } from 'antd'
import {
    HomeOutlined,
    EditOutlined,
    UserOutlined,
    LogoutOutlined,
} from '@ant-design/icons'

import { useNavigate } from 'react-router-dom'

//  redux 相关
// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import { lightSignout, resetSignout } from '@/store/user/actionCreators'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

export default function UserAvatar() {
    // 获取 dispatch、navigation 方法
    const dispatch = useDispatch()
    const navigation = useNavigate()

    // 退出登录边界判断
    // 获取退出登录相关状态
    const user = useSelector<IAppState, IUserState>(state => state.user)

    // 监听状态
    useEffect(() => {
        // 退出登录成功
        if (user.signout.loaded && user.signout.success) {
            // 跳转至首页
            navigation('/')
        }

        // 退出登录失败 显示失败的提示信息
        if (user.signout.loaded && !user.signout.success) {
            console.log(11)
            message.error(user.signout.message)
        }

        return () => {
            // 离开也面前重置退出登录状态
            dispatch(resetSignout())
        }
    }, [navigation, user.signout, dispatch])

    const jump = (payload: any) => {
        const { key } = payload
        if (key === '0') {
            navigation('/')
        } else if (key === '1') {
            navigation('/publish')
        } else if (key === '2') {
            navigation('user')
        } else if (key === '3') {
            // 退出登录
            dispatch(lightSignout())
        }
    }
    const menu = (
        <Menu style={{ marginTop: 18 }} onClick={jump}>
            <Menu.Item key='0' icon={<HomeOutlined />}>
                首页
            </Menu.Item>
            <Menu.Item key='1' icon={<EditOutlined />}>
                发帖
            </Menu.Item>
            <Menu.Item key='2' icon={<UserOutlined />}>
                我的主页
            </Menu.Item>
            <Menu.Item
                key='3'
                icon={<LogoutOutlined />}
                style={{ borderTop: '1px solid #cccccc', color: 'red' }}
            >
                退出登录
            </Menu.Item>
        </Menu>
    )
    return (
        <div>
            <Dropdown overlay={menu} placement='bottomCenter'>
                <Avatar
                    className='point avatar'
                    style={{ cursor: 'pointer' }}
                    size={32}
                    icon={<UserOutlined />}
                />
            </Dropdown>
        </div>
    )
}
