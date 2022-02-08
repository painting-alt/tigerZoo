// 第三方库
import React, { memo } from 'react'
// import { renderRoutes } from 'react-router-config'
import { NavLink,useRoutes } from 'react-router-dom'

// 自定义配置文件
import routes from './router'

// 组件引入
import AppHeader from './components/app-header'
import AppAside from './components/app-aside'

function RouteElement() { 
    const element = useRoutes(routes)
    return element
}

export default memo(function App() {
    return (
    <div>
        <AppHeader />
        <NavLink to="/ask">讨论</NavLink>
        <RouteElement />
        <AppAside />
    </div>
    )
})
