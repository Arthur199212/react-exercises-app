import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import './style.css'

import { Provider } from 'react-redux'
import reduxStore from './redux/store/reduxStore'

import(/* webpackChunkName: "app" */ './components/App')
  .then(({ default: App }) =>
    render(
      <Provider store={reduxStore}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  )
