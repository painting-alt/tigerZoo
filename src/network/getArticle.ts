import request from './request'

export function getArticle(params: number) {
    return request({
        url: 'getArticle',
        params,
    })
}
