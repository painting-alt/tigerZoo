import {
    // 注册相关
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    RESET_SIGNUP,
    // 登录相关
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    RESET_SIGNIN,
    // 发送短信验证码相关
    SENDSMS,
    SENDSMS_SUCCESS,
    SENDSMS_FAIL,
} from './constants'

import {
    // 注册相关
    ISignupPayload,
    ISignupAction,
    ISignupSuccessAction,
    ISignupFailAction,
    IResetSignupAction,
    // 登录相关
    ISigninByPasswordPayload,
    ISigninByCodePayload,
    ISigninAction,
    ISigninSuccessAction,
    ISigninFailAction,
    IResetSigninAction,
    // 发送短信验证码相关
    ISendSmsAction,
    ISendSmsSuccessAction,
    ISendSmsFailAction,
} from './type'

import inspirecloud from '@/network/light-initial'

// 注册相关 actions
export const signup = (payload: ISignupPayload): ISignupAction => ({
    type: SIGNUP,
    payload,
})

export const signupSuccess = (): ISignupSuccessAction => ({
    type: SIGNUP_SUCCESS,
})

export const signupFail = (message: string): ISignupFailAction => ({
    type: SIGNUP_FAIL,
    message,
})

export const resetSignup = (): IResetSignupAction => ({
    type: RESET_SIGNUP,
})

// 字节轻服务用户名、密码注册接口
export const lightSignup = (payload: ISignupPayload) => {
    const { username, password } = payload
    return (dispatch: any): void => {
        inspirecloud
            .run('createUser', {
                username,
                password,
            })
            .then(res => {
                console.log(res)
                if (res.success) {
                    // 注册成功
                    dispatch(signupSuccess())
                } else {
                    // 注册失败
                    dispatch(signupFail(res.message))
                }
            })
    }
}

/* ======================================================== */

// 登录相关 actions
export const signin = (payload: ISigninByPasswordPayload): ISigninAction => ({
    type: SIGNIN,
    payload,
})

export const signinSuccess = (): ISigninSuccessAction => ({
    type: SIGNIN_SUCCESS,
})

export const signinFail = (message: string): ISigninFailAction => ({
    type: SIGNIN_FAIL,
    message,
})

export const resetSignin = (): IResetSigninAction => ({
    type: RESET_SIGNIN,
})

// 字节轻服务用户名、密码登录接口
export const lightSigninByPassword = (payload: ISigninByPasswordPayload) => {
    const { username, password } = payload
    return (dispatch: any): void => {
        inspirecloud
            .run('signinByPassword', {
                username,
                password,
            })
            .then(res => {
                console.log(res)
                if (res.success) {
                    // 登录成功
                    dispatch(signinSuccess())
                } else {
                    // 登录失败
                    dispatch(signinFail(res.message))
                }
            })
    }
}

// 字节轻服务手机号码、短信验证码 注册/登录 接口
export const lightSigninByCode = (payload: ISigninByCodePayload) => {
    const { phoneNumber, code } = payload

    return (dispatch: any): void => {
        inspirecloud
            .run('signinByCode', {
                phoneNumber,
                code,
            })
            .then(res => {
                console.log(res)
                if (res.success) {
                    // 登录成功
                    dispatch(signinSuccess())
                } else {
                    // 登录失败
                    dispatch(signinFail(res.message))
                }
            })
    }
}

/* ================================================================= */
// 发送短信验证码相关 actions
export const sendSms = (payload: string): ISendSmsAction => ({
    type: SENDSMS,
    payload,
})

export const sendSmsSuccess = (): ISendSmsSuccessAction => ({
    type: SENDSMS_SUCCESS,
})

export const sendSmsFail = (message: string): ISendSmsFailAction => ({
    type: SENDSMS_FAIL,
    message,
})

export const lightSendSms = (phoneNumber: string) => {
    return (dispatch: any): void => {
        inspirecloud
            .run('sendMessageAPI', {
                phoneNumber,
            })
            .then(res => {
                if (res.success) {
                    dispatch(sendSmsSuccess())
                } else {
                    dispatch(sendSmsFail(res.message))
                }
            })
    }
}
