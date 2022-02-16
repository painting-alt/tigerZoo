import { IAuthState } from './auth/type'
import { IUserState } from './user/type'

// 定义 store 接口类型 供外部使用
export default interface IAppState {
    auth: IAuthState
    user: IUserState
}
