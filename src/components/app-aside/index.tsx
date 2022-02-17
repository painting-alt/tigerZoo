// 第三方
import React, { memo } from 'react'

// 样式相关
import { Space } from 'antd'
export default memo(props => {
    return (
        <Space
            direction='vertical'
            size='large'
            style={{ width: '300px', boxSizing: 'border-box' }}
        >
            {/* 插槽 */}
            {props.children}
        </Space>
    )
})
