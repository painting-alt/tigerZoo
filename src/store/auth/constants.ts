// 注册相关 action.type 常量
export const SIGNUP = 'SIGNUP' // 发送注册请求
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' // 注册成功
export const SIGNUP_FAIL = 'SIGNUP_FAIL' // 注册失败
export const RESET_SIGNUP = 'RESET_SIGNUP' // 重置注册状态
export const LIGHT_SIGNUP = 'LIGHT_SIGNUP' // 发送字节轻服务注册请求

// 登录相关 action.type 常量
export const SIGNIN = 'SIGNIN' // 发送登录请求
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS' // 登录成功
export const SIGNIN_FAIL = 'SIGNIN_FAIL' // 登录失败
export const RESET_SIGNIN = 'RESET_SIGNIN' // 重置登录状态
export const LIGHT_SIGNIN = 'LIGHT_SIGNIN' // 发送字节轻服务登录请求

// 短信验证码 action.type 常量
export const SENDSMS = 'SENDSMS' // 发送短信验证码
export const SENDSMS_SUCCESS = 'SENDSMS_SUCCESS' // 发送成功
export const SENDSMS_FAIL = 'SENDSMS_FAIL' // 发送失败
