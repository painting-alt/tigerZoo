import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

// 样式相关
import { Button } from 'antd'

// redux 相关
import { useSelector } from 'react-redux'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

const Post = memo(() => {
    // 获取用户登录态
    const user = useSelector<IAppState, IUserState>(state => state.user)

    // 获取 navigation 方法
    const navigation = useNavigate()

    const publish = () => {
        // 用户已登录
        if (user.userStatus.isAuth) {
            navigation('/publish')
        } else {
            navigation('/auth')
        }
    }

    return (
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
    )
})

export default Post
