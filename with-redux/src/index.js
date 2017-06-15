'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import App from './app'

const store = createStore((state) => state)

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <NextApp />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
