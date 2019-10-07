import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import '@babel/polyfill'

import Routes from './Routes'
import {store, persistor} from './store'

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
