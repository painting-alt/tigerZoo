import request from '@/network/request'

export function publishData(data: any) {
    return request({
        url: 'createArticle',
        method: 'post',
        data: data,
    })
}
