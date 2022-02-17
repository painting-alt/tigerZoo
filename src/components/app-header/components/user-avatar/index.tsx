import React from 'react'

import { Avatar, Menu, Dropdown } from 'antd'
import { HomeOutlined, EditOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function UserAvatar() {
    // 获取 navigation 方法
    const navigation = useNavigate()

    const jump = (payload: any) => {
        const { key } = payload
        if (key === '0') {
            navigation('/')
        } else if (key === '1') {
            navigation('/publish')
        } else if (key === '2') {
            navigation('user')
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
