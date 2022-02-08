// 第三方库
import React, { memo } from 'react'

import { NavLink, useRoutes } from 'react-router-dom'
// 自定义配置文件
import routes from '@/router'

import AppHeader from '@components/app-header'
import AppAside from '@components/app-aside'

function RouteElement() {
    const element = useRoutes(routes)
    return element
}

export default memo(function App() {
    return (
        <div>
            <AppHeader />
            <NavLink to='/ask'>讨论</NavLink>
            <RouteElement />
            <AppAside />
        </div>
    )
})
