import {
    // 注册相关
    SIGNUP,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    RESET_SIGNUP,
    // 登录相关
    SIGNIN,
    SIGNIN_FAIL,
    SIGNIN_SUCCESS,
    RESET_SIGNIN,
    // 发送短息验证码相关
    SENDSMS,
    SENDSMS_SUCCESS,
    SENDSMS_FAIL,
} from './constants'
import { IAuthUnionType, IAuthState } from './type'

// state 默认值
const initialState: IAuthState = {
    signup: {
        loaded: false, // 注册请求是否结束
        success: false, // 注册是否成功
        message: '', // 注册失败提示
    },
    signin: {
        loaded: false, // 登录请求是否结束
        success: false, // 登录是否成功
        message: '', // 登录失败提示
    },
    sendSms: {
        loaded: false, // 发送短信验证码请求是否结束
        success: false, // 发送短信验证码是否成功
        message: '', // 发送失败提示
    },
}

export default function authReducer(
    state = initialState,
    action: IAuthUnionType,
) {
    switch (action.type) {
        // 发送注册请求
        case SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                },
            }

        // 注册成功
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: true,
                },
            }

        // 注册失败
        case SIGNUP_FAIL:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: false,
                    message: action.message,
                },
            }

        // 重置注册状态
        case RESET_SIGNUP:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }
        /* ======================================================== */

        // 发送登录请求
        case SIGNIN:
            return {
                ...state,
                signin: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }
        // 登录成功
        case SIGNIN_SUCCESS:
            return {
                ...state,
                signin: {
                    loaded: true,
                    success: true,
                    message: '',
                },
            }
        // 登录失败
        case SIGNIN_FAIL:
            return {
                ...state,
                signin: {
                    loaded: true,
                    success: false,
                    message: action.message,
                },
            }

        // 重置登录状态
        case RESET_SIGNIN:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }

        /* =================================================================== */

        // 发送短信验证码
        case SENDSMS:
            return {
                ...state,
                sendSms: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }

        // 发送成功
        case SENDSMS_SUCCESS:
            return {
                ...state,
                sendSms: {
                    loaded: true,
                    success: true,
                    message: '',
                },
            }

        // 发送失败
        case SENDSMS_FAIL:
            return {
                ...state,
                sendSms: {
                    loaded: true,
                    success: false,
                    message: action.message,
                },
            }

        default:
            return state
    }
}
