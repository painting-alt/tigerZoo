// 第三方库
import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

// redux 相关
import { useSelector } from 'react-redux'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

// 组件引入
import AppHeader from '@/components/app-header'
import SearchInput from '@/components/app-header/components/search-input'
import PostButton from '@/components/app-header/components/post-button'
import AppAside from '@/components/app-aside'
import CommunityCard from '@/components/app-aside/components/community'
import UserCard from '@/components/app-aside/components/user-post'
import AnnouncementCard from '@/components/app-aside/components/announcement'
import Popular from '@/components/app-aside/components/popular'

// 样式相关
import appStyle from '@/assets/css/css_modules/app.module.css'

export default memo(function AppHome() {
    // 获取用户登录态
    const user = useSelector<IAppState, IUserState>(state => state.user)
    const isAuth = user.userStatus.isAuth

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
                    <CommunityCard />
                    {isAuth ? <UserCard /> : ''}
                    <AnnouncementCard />
                    <Popular />
                </AppAside>
            </div>
        </>
    )
})
