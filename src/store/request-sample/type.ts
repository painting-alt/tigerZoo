import {
    // 请求用户数据相关
    GETINFO,
    GETINFO_FAIL,
    GETINFO_SUCCESS,
    RESET_GETINFO,
} from './constants'

export interface IGetInfoState {
    loaded: boolean
    success: boolean
    message: string
}

// 注册请求用户数据相关 action 对象接口类型
export interface IGetInfoAction {
    type: typeof GETINFO
    payload: any
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

// 请求用户数据 action 联合类型
export type IGetInfoUnionType =
    | IGetInfoAction
    | IGetInfoFailAction
    | IGetInfoSuccessAction
    | IResetGetInfoAction
