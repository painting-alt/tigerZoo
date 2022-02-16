import { combineReducers } from 'redux'

import articleReducer from './article/reducer'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
    article: articleReducer,
    auth: authReducer,
    user: userReducer,
})

export default rootReducer
