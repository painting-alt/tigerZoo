import { CHANGE_ARTICLE, CHANGE_TITLE, CHANGE_TAG } from './constants'

export const changeArticleAction = (text: any) => ({
    type: CHANGE_ARTICLE,
    text,
})

export const changeTitleAction = (title: any) => ({
    type: CHANGE_TITLE,
    title,
})

export const changeTagAction = (tag: any) => ({
    type: CHANGE_TAG,
    tag,
})
