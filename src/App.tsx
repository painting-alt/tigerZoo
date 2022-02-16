// 第三方库
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

// 自定义配置文件
import routes from '@/router'

function RouteElement() {
    const element = useRoutes(routes)
    return element
}

export default memo(function App() {
    return <RouteElement />
})
