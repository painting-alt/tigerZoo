import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

// 自定义组件
import AppHeader from '@/components/app-header'
import SearchInput from '@/components/app-header/components/search-input'
import PostButton from '@/components/app-header/components/post-button'
import AppAside from '@/components/app-aside'
import UserPost from '@/components/app-aside/components/user-post'
import Userinfo from '@/components/app-aside/components/userinfo'

// 样式相关
import appStyle from '@/assets/css/css_modules/app.module.css'

const UserView = memo(() => {
    return (
        <>
            <AppHeader>
                <SearchInput />
                <PostButton />
            </AppHeader>
            <div className={appStyle.layout}>
                <div className={appStyle.main}>
                    <Outlet />
                </div>
                <AppAside>
                    <UserPost />
                    <Userinfo />
                </AppAside>
            </div>
        </>
    )
})

export default UserView
