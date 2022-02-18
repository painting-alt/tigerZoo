import {
    // 请求用户信息相关
    GETINFO,
    GETINFO_SUCCESS,
    GETINFO_FAIL,
    RESET_GETINFO,
} from './constants'

import { IGetInfoState, IGetInfoUnionType } from './type'

// userState 默认值
const initialState: IGetInfoState = {
    loaded: false,
    success: false,
    message: '',
}

export default function userReducer(
    state = initialState,
    action: IGetInfoUnionType,
) {
    switch (action.type) {
        case GETINFO:
            return {
                ...state,
                signout: {
                    loaded: false,
                    success: false,
                },
            }
        case GETINFO_SUCCESS:
            return {
                ...state,
                signout: {
                    loaded: true,
                    success: true,
                },
            }
        case GETINFO_FAIL: {
            return {
                ...state,
                signout: {
                    loaded: true,
                    success: false,
                    message: action.message,
                },
            }
        }
        case RESET_GETINFO: {
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
