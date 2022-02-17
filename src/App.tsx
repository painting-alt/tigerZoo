// 第三方库
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

// 自定义配置文件
import routes from '@/router'

// redux 相关
import { useDispatch } from 'react-redux'
import { isAuth } from '@/store/user/actionCreators'

function RouteElement() {
    const element = useRoutes(routes)
    return element
}

export default memo(function App() {
    // 获取 dispatch 方法
    const dispatch = useDispatch()

    // 根据 token 判断用户登录态
    dispatch(isAuth())

    return <RouteElement />
})
