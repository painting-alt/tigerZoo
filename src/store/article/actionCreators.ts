import {
    CHANGE_ARTICLE,
    CHANGE_TITLE,
    CHANGE_TAG,
    CHANGE_ALL_ARTICLE,
    CHANGE_ONE_ARTICLE,
} from './constants'

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

export const changeAllArtcile = (all: any) => ({
    type: CHANGE_ALL_ARTICLE,
    all,
})

export const changeOneArticle = (oneArticle: any) => ({
    type: CHANGE_ONE_ARTICLE,
    oneArticle,
})
