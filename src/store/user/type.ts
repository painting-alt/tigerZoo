import {
    // 用户登录态相关
    ISSIGNIN,
    ISSIGNOUT,
    // 用户退出登录相关
    SIGNOUT,
    SIGNOUT_FAIL,
    SIGNOUT_SUCCESS,
    RESET_SIGNOUT,
    // 请求用户数据相关
    GETINFO,
    GETINFO_FAIL,
    GETINFO_SUCCESS,
    RESET_GETINFO,
    UPDATE_LOCALINFO,
} from './constants'

// userInfo 类型
export interface IUserInfoState {
    _id: string
    username: string
    nickname: string
    avatar: string
    intro: string
    email: string
    phoneNumber: string
}

export interface IUserState {
    userStatus: {
        isAuth: boolean
    }
    userInfo: IUserInfoState
    signout: {
        loaded: boolean
        success: boolean
        message: string
    }
    getInfo: {
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

/* ================================================================================== */

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

/* ============================================================================== */

// 注册请求用户数据相关 action 对象接口类型
export interface IGetInfoAction {
    type: typeof GETINFO
}

export interface IGetInfoSuccessAction {
    type: typeof GETINFO_SUCCESS
}

export interface IGetInfoFailAction {
    type: typeof GETINFO_FAIL
    message: string
}

export interface IResetGetInfoAction {
    type: typeof RESET_GETINFO
}

// 注册本地用户数据相关 action 对象接口类型
export interface IUpdateLocalInfoAction {
    type: typeof UPDATE_LOCALINFO
    userInfo: IUserInfoState
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
    // 请求用户信息相关
    | IGetInfoAction
    | IGetInfoFailAction
    | IGetInfoSuccessAction
    | IResetGetInfoAction
    // 本地用户数据相关
    | IUpdateLocalInfoAction
