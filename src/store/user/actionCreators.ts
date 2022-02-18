import { serviceId } from '@/network/light-initial'
import inspirecloud from '@/network/light-initial'

import {
    // 登录态相关
    ISSIGNIN,
    ISSIGNOUT,
    // 退出登录相关
    SIGNOUT,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAIL,
    RESET_SIGNOUT,
    // 请求用户信息相关
    GETINFO,
    GETINFO_SUCCESS,
    GETINFO_FAIL,
    RESET_GETINFO,
    UPDATE_LOCALINFO,
} from './constants'
import {
    // 登录态相关
    IIsSigninAction,
    IIsSignoutAction,
    // 退出登录相关
    ISignoutAction,
    ISignoutSuccessAction,
    ISignoutFailAction,
    IResetSignoutAction,
    // 请求用户信息相关
    IGetInfoAction,
    IGetInfoSuccessAction,
    IGetInfoFailAction,
    IResetGetInfoAction,
    IUserInfoState,
    IUpdateLocalInfoAction,
} from './type'

// 登录态判断相关 actions
export const isSignin = (): IIsSigninAction => ({
    type: ISSIGNIN,
})

export const isSignout = (): IIsSignoutAction => ({
    type: ISSIGNOUT,
})

export const isAuth = () => {
    const localSessionKey = `light:${serviceId}:local-session`

    return (dispatch: any): void => {
        const token = localStorage.getItem(localSessionKey)

        if (token) {
            dispatch(isSignin())
        } else {
            dispatch(isSignout())
        }
    }
}

/* =========================================================== */
// 退出相关 actions
export const signout = (): ISignoutAction => ({
    type: SIGNOUT,
})

export const signoutSuccess = (): ISignoutSuccessAction => ({
    type: SIGNOUT_SUCCESS,
})

export const signoutFail = (message: string): ISignoutFailAction => ({
    type: SIGNOUT_FAIL,
    message,
})

export const resetSignout = (): IResetSignoutAction => ({
    type: RESET_SIGNOUT,
})

// 字节轻服务退出登录
export const lightSignout = () => {
    return (dispatch: any): void => {
        inspirecloud.run('signout', {}).then(res => {
            console.log('huaqi')
            if (res.success) {
                // 退出成功事件、置登录态为 false
                dispatch(signoutSuccess())
                dispatch(isSignout())
            } else {
                dispatch(signoutFail(res.message))
            }
        })
    }
}

/* ======================================================================= */

// 请求用户数据相关 actions
export const getInfo = (): IGetInfoAction => ({
    type: GETINFO,
})

export const getInfoSuccess = (): IGetInfoSuccessAction => ({
    type: GETINFO_SUCCESS,
})

export const getInfoFail = (message: string): IGetInfoFailAction => ({
    type: GETINFO_FAIL,
    message,
})

export const resetGetInfo = (): IResetGetInfoAction => ({
    type: RESET_GETINFO,
})

export const lightGetInfo = () => {
    return (dispatch: any) => {
        inspirecloud.run('getUserInfo', {}).then(res => {
            console.log(res)
            if (res.success) {
                dispatch(getInfoSuccess())
                dispatch(updateLocalInfo(res.userinfo))
            } else {
                dispatch(getInfoFail(res.message))
            }
        })
    }
}

/* ============================================================== */
// 本地用户数据相关
export const updateLocalInfo = (
    userInfo: IUserInfoState,
): IUpdateLocalInfoAction => ({
    type: UPDATE_LOCALINFO,
    userInfo,
})
