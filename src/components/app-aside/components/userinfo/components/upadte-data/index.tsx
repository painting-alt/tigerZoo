import React, { memo, useEffect } from 'react'

// redux 相关
import { useDispatch, useSelector } from 'react-redux'
import { lightGetInfo } from '@/store/user/actionCreators'
import IAppState from '@/store/type'
import { IUserState } from '@/store/user/type'

// 样式相关
import { message } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const UpdateDataBtn = memo(() => {
    // 获取 dispatch 方法
    const dispatch = useDispatch()

    // 请求用户信息
    const getUserData = () => {
        dispatch(lightGetInfo())
    }

    // 获取请求用户行为状态
    const user = useSelector<IAppState, IUserState>(state => state.user)

    // 请求行为状态判断
    useEffect(() => {
        // 请求成功
        if (user.getInfo.loaded && user.getInfo.success) {
        }

        // 请求失败 弹出报错信息
        if (user.getInfo.loaded && !user.getInfo.success) {
            message.error(user.getInfo.message)
        }
    }, [user.getInfo])
    return (
        <span className='upadteDataBtn' onClick={getUserData}>
            <EditOutlined className='editIcon' />
            修改信息
        </span>
    )
})

export default UpdateDataBtn
