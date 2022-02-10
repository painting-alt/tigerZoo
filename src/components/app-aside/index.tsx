import React, { memo } from 'react'
import CommunityCard from './components/community-card'

// 样式相关
import Aside from './styled'

export default memo(function HQAppAside() {
    return (
        <Aside>
            <CommunityCard />
        </Aside>
    )
})
