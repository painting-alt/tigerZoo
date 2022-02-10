import React, { memo } from 'react'

// 样式相关
import UserCard from './styled'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default memo(() => {
    return (
        <UserCard>
            <div className='card-header'>
                <Avatar
                    src={''}
                    alt='user`s avatar'
                    size={32}
                    icon={<UserOutlined />}
                />
                <span className='user-name'>huaqi_</span>
            </div>
            <div className='card-content'></div>
        </UserCard>
    )
})
