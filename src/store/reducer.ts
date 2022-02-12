import { CHANGE_ARTICLE } from './constants'

const defaultState = {
    article: '',
}

function reducer(state = defaultState, action: any) {
    switch (action.type) {
        case CHANGE_ARTICLE:
            return { ...state }
        default:
            return state
    }
}

export default reducer
