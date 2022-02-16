import { CHANGE_ARTICLE, CHANGE_TITLE, CHANGE_TAG } from './constants'

const defaultState = {
    article: '',
    title: '',
    tag: '',
}

function reducer(state = defaultState, action: any) {
    switch (action.type) {
        case CHANGE_ARTICLE:
            return { ...state, article: action.text }
        case CHANGE_TITLE:
            return { ...state, title: action.title }
        case CHANGE_TAG:
            return { ...state, tag: action.tag }
        default:
            return state
    }
}

export default reducer
