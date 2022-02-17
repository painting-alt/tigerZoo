import React, { memo } from 'react'

// 样式相关
import CardStyled from './styled'
import { Card, Avatar } from 'antd'
import { EditOutlined, SettingOutlined } from '@ant-design/icons'

const { Meta } = Card

const Signout = memo(() => {
    return <span className='signout'>退出登录</span>
})

const Userinfo = memo(() => {
    return (
        <CardStyled
            style={{ width: 300 }}
            cover={
                <img
                    alt='example'
                    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
            }
            actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <Signout />,
            ]}
        >
            <Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title='Card title'
                description='This is the description'
            />
        </CardStyled>
    )
})

export default Userinfo
