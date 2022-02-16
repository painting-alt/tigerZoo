import { ISSIGNIN, ISSIGNOUT } from './constants'

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
        default:
            return state
    }
}
