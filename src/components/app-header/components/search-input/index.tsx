import React, { memo } from 'react'

// 样式相关
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Search = memo(() => {
    return (
        <Input
            className='point search'
            bordered={false}
            style={{
                width: 240,
                height: 32,
                backgroundColor: '#e5e6eb',
                borderRadius: 5,
            }}
            placeholder='输入帖子标题、正文关键字'
            suffix={<SearchOutlined />}
        />
    )
})

export default Search
