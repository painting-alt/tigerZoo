import React, { memo } from 'react'
import CommunityCard from './components/community-card'
import UserCard from './components/user-card'

// 样式相关
import Aside from './styled'

export default memo(() => {
    return (
        <Aside>
            <CommunityCard />
            <UserCard />
        </Aside>
    )
})
