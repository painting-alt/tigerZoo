import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 自定义组件
import LoginPhone from './components/login-phone'
import LoginPassword from './components/login-password'
import RegisterModal from './components/register'

// 样式相关
import StyledLogin from './styled'
import { Card, Button } from 'antd'

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

const login = memo(() => {
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTabKey, setActiveTabKey] = useState<any>('loginByCode')
    const navigation = useNavigate()

    // 路由跳转
    const jumpToIndex = () => {
        navigation('/')
    }

    // modal 内容列表
    const contentList: any = {
        loginByCode: <LoginPhone jumpToIndex={jumpToIndex} />,
        loginByPassword: <LoginPassword jumpToIndex={jumpToIndex} />,
    }

    // tab 切换
    const tabChange = (key: any) => {
        setActiveTabKey(key)
    }

    return (
        <StyledLogin>
            <RegisterModal
                visible={visible}
                setVisible={setVisible}
                jumpToIndex={jumpToIndex}
            />
            <Card
                className='card'
                title='登录'
                bodyStyle={{
                    marginTop: '20px',
                }}
                extra={
                    <Button
                        className='registerBtn'
                        ghost
                        onClick={e => setVisible(true)}
                    >
                        注册
                    </Button>
                }
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
