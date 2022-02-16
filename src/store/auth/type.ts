import {
    // 注册相关 action.type
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    RESET_SIGNUP,
    LIGHT_SIGNUP,
    // 登录相关 action.type
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    RESET_SIGNIN,
    LIGHT_SIGNIN,
    // 短信验证码发送 action.type
    SENDSMS,
    SENDSMS_SUCCESS,
    SENDSMS_FAIL,
} from './constants'

// state 接口类型
export interface IAuthState {
    signup: {
        loaded: boolean
        success: boolean
        message: string
    }
    signin: {
        loaded: boolean
        success: boolean
        message: string
    }
    sendSms: {
        loaded: boolean
        success: boolean
        message: string
    }
}

// 注册相关 action.payload 接口类型
export interface ISignupPayload {
    username: string
    password: string
}

// 注册相关 对象接口类型
export interface ISignupAction {
    type: typeof SIGNUP
    payload: ISignupPayload
}

export interface ISignupSuccessAction {
    type: typeof SIGNUP_SUCCESS
}

export interface ISignupFailAction {
    type: typeof SIGNUP_FAIL
    message: string
}

export interface IResetSignupAction {
    type: typeof RESET_SIGNUP
}

export interface ILightSignupAction {
    type: typeof LIGHT_SIGNUP
    payload: ISignupPayload
}

/* ========================================================================= */

// 登录相关 action.payload 接口类型
// 密码登录
export interface ISigninByPasswordPayload {
    username: string
    password: string
}

// 验证码登录
export interface ISigninByCodePayload {
    phoneNumber: string
    code: string
}

// 登录相关 对象接口类型
export interface ISigninAction {
    type: typeof SIGNIN
    payload: ISigninByPasswordPayload
}

export interface ISigninSuccessAction {
    type: typeof SIGNIN_SUCCESS
}

export interface ISigninFailAction {
    type: typeof SIGNIN_FAIL
    message: string
}

export interface IResetSigninAction {
    type: typeof RESET_SIGNIN
}

export interface ILightSigninAction {
    type: typeof LIGHT_SIGNIN
    payload: ISigninByPasswordPayload
}

/* ================================================================================= */

// 验证码相关 对象接口类型
export interface ISendSmsAction {
    type: typeof SENDSMS
    payload: string
}

export interface ISendSmsSuccessAction {
    type: typeof SENDSMS_SUCCESS
}

export interface ISendSmsFailAction {
    type: typeof SENDSMS_FAIL
    message: string
}

// Auth action 联合类型
export type IAuthUnionType =
    /* 注册相关 */
    | ISignupAction
    | ISignupSuccessAction
    | ISignupFailAction
    | IResetSignupAction
    | ILightSignupAction
    /* 登录相关 */
    | ISigninAction
    | ISigninSuccessAction
    | ISigninFailAction
    | IResetSigninAction
    | ILightSigninAction
    // 短信验证码发送相关
    | ISendSmsAction
    | ISendSmsSuccessAction
    | ISendSmsFailAction
