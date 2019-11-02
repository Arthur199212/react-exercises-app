import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import './style.css'

import(/* webpackChunkName: "app" */ './components/App')
  .then(({ default: App }) => 
    render(<App />, document.getElementById('root'))
  )
