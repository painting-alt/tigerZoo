import { changeAllArtcile } from './actionCreators'
import {
    CHANGE_ARTICLE,
    CHANGE_TITLE,
    CHANGE_TAG,
    CHANGE_ALL_ARTICLE,
    CHANGE_ONE_ARTICLE,
    CHANGE_NOW_TIME,
    CHANGE_LAST_TIME,
} from './constants'

const defaultState = {
    article: '',
    title: '',
    tag: '',
    all: [],
    oneArticle: {},
    nowTime: 0,
    lastTime: 0,
}

function reducer(state = defaultState, action: any) {
    switch (action.type) {
        case CHANGE_ARTICLE:
            return { ...state, article: action.text }
        case CHANGE_TITLE:
            return { ...state, title: action.title }
        case CHANGE_TAG:
            return { ...state, tag: action.tag }
        case CHANGE_ALL_ARTICLE:
            return { ...state, all: action.all }
        case CHANGE_ONE_ARTICLE:
            return { ...state, oneArticle: action.oneArticle }
        case CHANGE_NOW_TIME:
            return { ...state, nowTime: action.nowTime }
        case CHANGE_LAST_TIME:
            return { ...state, lastTime: action.lastTime }
        default:
            return state
    }
}

export default reducer
