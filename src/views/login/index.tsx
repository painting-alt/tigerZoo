import React, { memo, useState } from 'react'

// 自定义组件
import LoginPhone from './components/login-phone'
import LoginPassword from './components/login-password'

// 样式相关
import StyledLogin from './styled'
import { Card } from 'antd'

const loginList: any = [
    {
        key: 'loginByCode',
        tab: '免密码登录',
    },
    {
        key: 'loginByPassword',
        tab: '密码登录',
    },
]

const contentList: any = {
    loginByCode: <LoginPhone />,
    loginByPassword: <LoginPassword />,
}

const login = memo(() => {
    const [activeTabKey, setActiveTabKey] = useState('loginByCode')
    const tabChange = (key: any) => {
        setActiveTabKey(key)
    }

    return (
        <StyledLogin>
            <Card
                className='card'
                title='登录'
                bodyStyle={{
                    marginTop: '20px',
                }}
                extra={<a href='#/'>注册</a>}
                tabList={loginList}
                activeTabKey={activeTabKey}
                onTabChange={key => tabChange(key)}
            >
                {contentList[activeTabKey]}
            </Card>
        </StyledLogin>
    )
})

export default login
