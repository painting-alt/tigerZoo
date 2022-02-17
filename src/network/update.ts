import request from './request'

export function updateAdd(data: any) {
    return request({
        url: 'updateLike',
        method: 'post',
        data: data,
    })
}

export function updateView(data: any) {
    return request({
        url: 'updateView',
        method: 'post',
        data: data,
    })
}
