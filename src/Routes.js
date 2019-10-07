import Home from './pages/Home/index.connector'
import SignUp from './pages/SignUp/index.connector'
import NotFound from './pages/NotFound'
import Login from './pages/Login/index.connector'
import App from './App'
import NavigationWrap from './layout/NavigationWrap/index.connector'
import Transfer from './pages/Transfer/index.connector'
import HistoryTransfer from './pages/HistoryTransfer/index.connector'

import isAuthorized from './isAuthorized'

export default [
  {
    component: App,
    routes: [
      {
        component: NavigationWrap,
        routes: [
          {
            component: Home,
            path: '/',
            exact: true,
          },
          {
            component: SignUp,
            path: '/signup',
          },
          {
            component: Login,
            path: '/login',
          },
          {
            component: isAuthorized(Transfer),
            path: '/transfer',
          },
          {
            component: isAuthorized(HistoryTransfer),
            path: '/histori-transfer',
          },
          {
            component: NotFound,
          },
        ],
      },
    ],
  },
]
