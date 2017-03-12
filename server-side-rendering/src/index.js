'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './client/app-client'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot && __DEV__) {
  module.hot.accept('./client/app-client', () => {
    const NextApp = require('./client/app-client').default
    renderApp(NextApp)
  })
}
