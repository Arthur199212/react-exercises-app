import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'

function reduxStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

export default reduxStore()