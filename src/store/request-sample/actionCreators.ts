import {
    // 请求用户信息相关
    GETINFO,
    GETINFO_SUCCESS,
    GETINFO_FAIL,
    RESET_GETINFO,
} from './constants'

import {
    // 请求用户信息相关
    IGetInfoAction,
    IGetInfoSuccessAction,
    IGetInfoFailAction,
    IResetGetInfoAction,
} from './type'

// 请求用户数据相关 actions
export const request = (payload: any): IGetInfoAction => ({
    type: GETINFO,
    payload,
})

export const requestSuccess = (): IGetInfoSuccessAction => ({
    type: GETINFO_SUCCESS,
})

export const requestFail = (message: string): IGetInfoFailAction => ({
    type: GETINFO_FAIL,
    message,
})

export const resetGetInfo = (): IResetGetInfoAction => ({
    type: RESET_GETINFO,
})
