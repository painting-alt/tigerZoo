import React, { memo } from 'react'
import CommunityCard from './components/community'
import UserCard from './components/user'
import AnnouncementCard from './components/announcement'
import Popular from './components/popular'

// 样式相关
import { Space } from 'antd'

export default memo(() => {
    return (
        <Space
            direction='vertical'
            size='large'
            style={{ width: '300px', boxSizing: 'border-box' }}
        >
            <CommunityCard />
            <UserCard />
            <AnnouncementCard />
            <Popular />
        </Space>
    )
})
