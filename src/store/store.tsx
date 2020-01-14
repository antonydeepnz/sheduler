import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers/rootReducer'

const store = createStore(reducer, applyMiddleware());

export default store;