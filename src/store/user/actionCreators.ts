import { serviceId } from '@/network/light-initial'
import inspirecloud from '@/network/light-initial'

import {
    ISSIGNIN,
    ISSIGNOUT,
    SIGNOUT,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAIL,
    RESET_SIGNOUT,
} from './constants'
import {
    IIsSigninAction,
    IIsSignoutAction,
    ISignoutAction,
    ISignoutSuccessAction,
    ISignoutFailAction,
    IResetSignoutAction,
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

/* =========================================== */
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
