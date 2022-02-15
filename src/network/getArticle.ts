import request from './request'

export function getAllArticle() {
    return request({
        url: 'getAllArticle',
    })
}

export function getOneArticle(id: any) {
    return request({
        url: 'getOneArticle',
        params: id,
    })
}
