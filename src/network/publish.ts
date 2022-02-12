import request from '@/network/request'

export function publishData(data: any) {
    return request({
        url: 'post',
        method: 'post',
        data: data,
    })
}
