import {
    ISSIGNIN,
    ISSIGNOUT,
    SIGNOUT,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAIL,
    RESET_SIGNOUT,
} from './constants'

import { IUserState, IUserUnionType } from './type'

// userState 默认值
const initialState: IUserState = {
    userStatus: {
        isAuth: false, // 默认为 未登录
    },
    userInfo: {
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
        case SIGNOUT:
            return {
                ...state,
                signout: {
                    loaded: false,
                    success: false,
                    message: '',
                },
            }

        case SIGNOUT_SUCCESS:
            return {
                ...state,
                signout: {
                    loaded: true,
                    success: true,
                    message: '',
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
        default:
            return state
    }
}
