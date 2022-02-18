// 用户登录态判断行为相关
export const ISSIGNIN = 'ISSINGIN' // 将用户登录态标志 isAuth 置为 true
export const ISSIGNOUT = 'ISSIGNOUT' // 将用户登录态标志 isAuth 置为 false

// 用户退出登录行为相关
export const SIGNOUT = 'SIGNOUT' // 用户退出登录
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS' // 用户退出登录成功
export const SIGNOUT_FAIL = 'SIGNOUT_FAIL' // 用户退出登录失败
export const RESET_SIGNOUT = 'RESET_SIGNOUT' // 重置退出登录态

// 请求用户数据行为相关
export const GETINFO = 'GETINFO' // 发送请求用户数据
export const GETINFO_SUCCESS = 'GETINFO_SUCCESS' // 请求用户数据成功
export const GETINFO_FAIL = 'GETINFO_FAIL' // 请求用户数据失败
export const RESET_GETINFO = 'RESET_GETINFO' // 重置请求用户数据状态

// 本地用户数据相关
export const UPDATE_LOCALINFO = 'UPDATE_LOCALINFO'
