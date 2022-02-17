import React, { memo } from 'react'

// 样式相关
import Card from './styled'
import { Space, Avatar, Divider } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const UserInfo = memo(() => {
    return (
        <Space>
            <Avatar
                src={''}
                alt='user`s avatar'
                size={32}
                icon={<UserOutlined />}
            />
            <span>huaqi_</span>
        </Space>
    )
})

export default memo(() => {
    // 获取 navigation 方法
    const navigation = useNavigate()

    return (
        <Card title={<UserInfo />} onClick={() => navigation('/user')}>
            <Space
                align='center'
                size='middle'
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                <div>
                    <div className='count-title'>主题帖</div>
                    <div className='count-data'>2</div>
                </div>
                <Divider className='divider' type='vertical' />
                <div>
                    <div className='count-title'>回帖数</div>
                    <div className='count-data'>4</div>
                </div>
                <Divider className='divider' type='vertical' />
                <div>
                    <div className='count-title'>获赞数</div>
                    <div className='count-data'>0</div>
                </div>
            </Space>
        </Card>
    )
})
