// 第三方库
import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
// 样式
import appStyle from '@/assets/css/css_modules/app.module.css'
// 组件引入
import AppHeader from '@/components/app-header'
import AppAside from '@/components/app-aside'

export default memo(function AppHome() {
    return (
        <>
            <AppHeader />
            <div className={appStyle.layout}>
                <div className={appStyle.main}>
                    <Outlet />
                </div>
                <AppAside />
            </div>
        </>
    )
})
