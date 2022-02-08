import React, { memo } from 'react'
import { Input, Button, Avatar } from 'antd'
import { BulbOutlined, UserOutlined } from '@ant-design/icons'

// assets
// .image 使用方式未知
// import logo from '@/assets/img/logo.image'

const { Search } = Input

export default memo(function HQAppHeader() {
    return (
        <header>
            <img className='logo' src='' alt='' />
            <div className='operationalZone'>
                <Search
                    placeholder='input search text'
                    allowClear
                    style={{ width: 200 }}
                />
                <Button type='primary'>发帖</Button>
                <BulbOutlined />
                <Avatar size={64} icon={<UserOutlined />} />
            </div>
        </header>
    )
})
