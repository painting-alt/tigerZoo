import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 自定义组件
import SigninPhone from './components/signin-phone'
import SigninPassword from './components/signin-password'
import RegisterModal from './components/signup'

// 样式相关
import StyledSignin from './styled'
import { Card, Button } from 'antd'

const signinList: any = [
    {
        key: 'signinByCode',
        tab: '免密码登录',
    },
    {
        key: 'signinByPassword',
        tab: '密码登录',
    },
]

const signin = memo(() => {
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTabKey, setActiveTabKey] = useState<any>('signinByCode')
    const navigation = useNavigate()

    // 路由跳转
    const jumpToIndex = () => {
        navigation('/')
    }

    // modal 内容列表
    const contentList: any = {
        signinByCode: <SigninPhone jumpToIndex={jumpToIndex} />,
        signinByPassword: <SigninPassword jumpToIndex={jumpToIndex} />,
    }

    // tab 切换
    const tabChange = (key: any) => {
        setActiveTabKey(key)
    }

    return (
        <StyledSignin>
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
                tabList={signinList}
                activeTabKey={activeTabKey}
                onTabChange={key => tabChange(key)}
            >
                {contentList[activeTabKey]}
            </Card>
        </StyledSignin>
    )
})

export default signin
