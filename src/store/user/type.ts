import {
    // 用户登录态相关
    ISSIGNIN,
    ISSIGNOUT,
    // 用户退出登录相关
    SIGNOUT,
    SIGNOUT_FAIL,
    SIGNOUT_SUCCESS,
    RESET_SIGNOUT,
} from './constants'

export interface IUserState {
    userStatus: {
        isAuth: boolean
    }
    userInfo: {
        username: string
        nickname: string
        avatar: string
        intro: string
        email: string
        phoneNumber: string
    }
    signout: {
        loaded: boolean
        success: boolean
        message: string
    }
}

// 注册相关 action 对象接口类型
export interface IIsSigninAction {
    type: typeof ISSIGNIN
}

export interface IIsSignoutAction {
    type: typeof ISSIGNOUT
}

// 注册用户退出登录相关 action 对象接口类型
export interface ISignoutAction {
    type: typeof SIGNOUT
}

export interface ISignoutSuccessAction {
    type: typeof SIGNOUT_SUCCESS
}

export interface ISignoutFailAction {
    type: typeof SIGNOUT_FAIL
    message: string
}

export interface IResetSignoutAction {
    type: typeof RESET_SIGNOUT
}

// user action 联合类型
export type IUserUnionType =
    // 用户登录态相关
    | IIsSigninAction
    | IIsSignoutAction
    // 用户退出登录相关
    | ISignoutAction
    | ISignoutFailAction
    | ISignoutSuccessAction
    | IResetSignoutAction
