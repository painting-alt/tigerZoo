import React, { memo } from 'react'

// 自定义组件
import UpdateDataBtn from './components/upadte-data'

// 样式相关
import CardStyled from './styled'
import { Card, Avatar } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const { Meta } = Card

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
            actions={[<SettingOutlined key='setting' />, <UpdateDataBtn />]}
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
