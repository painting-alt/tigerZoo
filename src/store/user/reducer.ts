import {
    // 登录态判断
    ISSIGNIN,
    ISSIGNOUT,
    // 退出登录
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

import { IUserState, IUserUnionType } from './type'

// userState 默认值
const initialState: IUserState = {
    userStatus: {
        isAuth: false, // 默认为 未登录
    },
    userInfo: {
        _id: '',
        username: '',
        nickname: '',
        avatar: '',
        intro: '',
        email: '',
        phoneNumber: '',
    },
    signout: {
        loaded: false,
        success: false,
        message: '',
    },
    getInfo: {
        loaded: false,
        success: false,
        message: '',
    },
}

export default function userReducer(
    state = initialState,
    action: IUserUnionType,
) {
    switch (action.type) {
        // 用户未登录
        case ISSIGNIN:
            return {
                ...state,
                userStatus: {
                    isAuth: true,
                },
            }
        case ISSIGNOUT:
            return {
                ...state,
                userStatus: {
                    isAuth: false,
                },
            }
        /* ================================================================== */
        // 用户退出登录
        case SIGNOUT:
            return {
                ...state,
                signout: {
                    loaded: false,
                    success: false,
                },
            }
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                signout: {
                    loaded: true,
                    success: true,
                },
            }
        case SIGNOUT_FAIL: {
            return {
                ...state,
                signout: {
                    loaded: true,
                    success: false,
                    message: action.message,
                },
            }
        }
        case RESET_SIGNOUT: {
            return {
                ...state,
                signout: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }
        }
        /* =========================================================================== */
        // 获取用户信息相关
        case GETINFO:
            return {
                ...state,
                getInfo: {
                    loaded: false,
                    success: false,
                },
            }
        case GETINFO_SUCCESS:
            return {
                ...state,
                getInfo: {
                    loaded: true,
                    success: true,
                },
            }
        case GETINFO_FAIL:
            return {
                ...state,
                getInfo: {
                    loaded: true,
                    success: false,
                    message: action.message,
                },
            }

        case RESET_GETINFO:
            return {
                ...state,
                getInfo: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }

        /* =========================================================== */
        /* 本地用户数据相关 */
        case UPDATE_LOCALINFO:
            return {
                ...state,
                userInfo: {
                    ...action.userInfo,
                },
            }
        default:
            return state
    }
}
