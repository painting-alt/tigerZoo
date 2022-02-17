import React, { memo, useEffect } from 'react'

// 样式相关
import CardStyled from './styled'
import { Card, Avatar, message } from 'antd'
import { EditOutlined, SettingOutlined } from '@ant-design/icons'

// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import { lightSignout, resetSignout } from '@/store/user/actionCreators'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

import { useNavigate } from 'react-router-dom'

const { Meta } = Card

const Signout = memo(() => {
    // 获取 dipatch、navigation 方法
    const dispatch = useDispatch()
    const navigation = useNavigate()

    // 获取退出登录相关状态
    const user = useSelector<IAppState, IUserState>(state => state.user)

    // 监听状态
    useEffect(() => {
        // 退出登录成功
        if (user.signout.loaded && user.signout.success) {
            // 跳转至首页
            navigation('/')
        }

        // 退出登录失败 显示失败的提示信息
        if (user.signout.loaded && !user.signout.success) {
            console.log(11)
            message.error(user.signout.message)
        }

        return () => {
            // 离开也面前重置退出登录状态
            dispatch(resetSignout())
        }
    }, [navigation, user.signout, dispatch])

    return (
        <span className='signout' onClick={() => dispatch(lightSignout())}>
            退出登录
        </span>
    )
})

const Userinfo = memo(() => {
    return (
        <CardStyled
            style={{ width: 300 }}
            cover={
                <img
                    alt='example'
                    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                />
            }
            actions={[
                <SettingOutlined key='setting' />,
                <EditOutlined key='edit' />,
                <Signout />,
            ]}
        >
            <Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title='Card title'
                description='This is the description'
            />
        </CardStyled>
    )
})

export default Userinfo
