import { serviceId } from '@/network/light-initial'
import { ISSIGNIN, ISSIGNOUT } from './constants'
import { IIsSigninAction, IIsSignoutAction } from './type'

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
