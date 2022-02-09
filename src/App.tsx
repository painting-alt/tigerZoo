// 第三方库
import React, { memo } from 'react'
import {useRoutes } from 'react-router-dom'
// 自定义配置文件
import routes from '@/router'
// 样式
import appStyle from '@/assets/css/css_modules/app.module.css'
// 组件引入
import AppHeader from './components/app-header'
import AppAside from './components/app-aside'


function RouteElement() { 
    const element = useRoutes(routes)
    return element
}

export default memo(function App() {
    return (
        <div id='app'>
            <AppHeader />
            <div className={ appStyle.appcontent}>
            <div className={ appStyle.app}>
            <RouteElement />
            <AppAside />
            </div>
            </div>
        </div>
    )
})
