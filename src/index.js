import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import pointReducer from './reducers/pointReducer'
import App from './App'
import scoreReducer from './reducers/scoreReducer'

const reducer = combineReducers({
  points: pointReducer,
  score: scoreReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)