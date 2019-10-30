import React, { useEffect, useRef } from 'react'
import T from 'prop-types'
import axios from 'axios'
import { renderRoutes } from 'react-router-config'
import Logo from '../../components/Logo'
import LinksTransfer from '../../components/LinksTransfer'
import UserBlock from '../../components/UserBlock'

import './styles.scss'

const NavigationWrap = (props) => {
  const {
    route: { routes },
    auth: { token },
    getUserInfo,
    userLogout,
    user: { userInfo },
    history: { push },
  } = props

  const exitApp = () => {
    userLogout()
    push('/')
  }

  const initialTimerId = useRef(false)

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['AUTHORIZATION'] = 'bearer ' + token
      initialTimerId.current = setTimeout(async function setGetStatusLoop() {
        await getUserInfo()
        initialTimerId.current = setTimeout(setGetStatusLoop, 1000)
      }, 1000)
    } else {
      setTimeout(() => clearInterval(initialTimerId.current), 500)
    }
  }, [token])

  return (
    <div className='app-container'>
      <div className='top-nav'>
        <Logo push={push} />
        <LinksTransfer token={token} />
        <UserBlock token={token} userInfo={userInfo} exitApp={exitApp} push={push} />
      </div>
      <div>{renderRoutes(routes)}</div>
    </div>
  )
}

export default NavigationWrap

NavigationWrap.propTypes = {
  routes: T.arrayOf(
    T.shape({
      component: T.elementType,
      exact: T.bool,
      path: T.string,
    })
  ),
  token: T.string,
  getUserInfo: T.func,
  userLogout: T.func,
  userInfo: T.shape({
    balance: T.number,
    email: T.string,
    id: T.number,
    name: T.string,
  }),
  push: T.func,
}

NavigationWrap.defaultProps = {
  userInfo: {},
}
