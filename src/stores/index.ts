import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const middleware: any = [thunk]

const store: Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)
))

export default store
