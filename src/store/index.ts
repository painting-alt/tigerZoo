import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import reducer from './reducer'
import thunk from 'redux-thunk'

// composeEnhancers函数

const storeEnhancer = applyMiddleware(thunk)

const store = createStore(reducer, composeWithDevTools(storeEnhancer))

export default store
