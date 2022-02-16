// 第三方
import React, { memo } from 'react'

// 自定义组件
import CommunityCard from './components/community'
import UserCard from './components/user'
import AnnouncementCard from './components/announcement'
import Popular from './components/popular'

// redux 相关
import { useSelector } from 'react-redux'

// 样式相关
import { Space } from 'antd'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

export default memo(() => {
    // 获取用户登录态
    const user = useSelector<IAppState, IUserState>(state => state.user)
    const isAuth = user.userStatus.isAuth

    return (
        <Space
            direction='vertical'
            size='large'
            style={{ width: '300px', boxSizing: 'border-box' }}
        >
            <CommunityCard />
            {isAuth ? <UserCard /> : ''}
            <AnnouncementCard />
            <Popular />
        </Space>
    )
})
