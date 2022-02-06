// 第三方库
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

// 自定义配置文件
import routes from '@/router'

// 组件引入
import AppHeader from './components/app-header'
import AppAside from './components/app-aside'

export default memo(function App() {
    return (
        <BrowserRouter>
            <AppHeader />
            {renderRoutes(routes)}
            <AppAside />
        </BrowserRouter>
    )
})
