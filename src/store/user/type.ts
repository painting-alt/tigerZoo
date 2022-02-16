import { ISSIGNIN, ISSIGNOUT } from './constants'

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
}

// 注册相关 action 对象接口类型
export interface IIsSigninAction {
    type: typeof ISSIGNIN
}

export interface IIsSignoutAction {
    type: typeof ISSIGNOUT
}

// user action 联合类型
export type IUserUnionType = IIsSigninAction | IIsSignoutAction
