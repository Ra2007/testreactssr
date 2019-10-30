import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import axios from 'axios'
import '@babel/polyfill'

import Routes from './Routes'
import { store, persistor } from './store'

axios.defaults.baseURL = 'http://193.124.114.46:3001/'
axios.defaults.headers.post['Content-Type'] = 'application/json'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
)
