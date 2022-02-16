// 第三方库
import React, { memo, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// 样式
import appStyle from '@/assets/css/css_modules/app.module.css'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

// 组件引入
import AppHeader from '@/components/app-header'
import AppAside from '@/components/app-aside'

// redux 相关
import { useDispatch } from 'react-redux'
import { isAuth } from '@/store/user/actionCreators'

export default memo(function AppHome() {
    // 获取 dispatch 方法
    const dispatch = useDispatch()

    // 根据 token 判断用户登录态
    useEffect(() => {
        dispatch(isAuth())
    }, [dispatch])

    let navigation = useNavigate()
    const publish = () => {
        navigation('/publish')
    }

    return (
        <>
            <AppHeader>
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
                <Button
                    className='point'
                    type='primary'
                    onClick={() => publish()}
                    style={{
                        width: 90,
                        borderRadius: 4,
                        backgroundColor: '#4080ff',
                    }}
                >
                    发帖
                </Button>
            </AppHeader>
            <div className={appStyle.layout}>
                <div className={appStyle.main}>
                    <Outlet />
                </div>
                <AppAside />
            </div>
        </>
    )
})
