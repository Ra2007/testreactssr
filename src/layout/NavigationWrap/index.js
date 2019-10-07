import React, {useEffect, useRef} from 'react'
import {renderRoutes} from 'react-router-config'
import {Link} from 'react-router-dom'
import Button from '../../elements/Button'

import './styles.scss'

const NavigationWrap = (props) => {
  const {
    route,
    auth: {token},
    getUserInfo,
    userLogout,
    user: {userInfo = {}},
    history: {push},
  } = props

  const exitApp = () => {
    userLogout()
    push('/')
  }

  const goToLogin = () => {
    push('/login')
  }

  const goToSignUp = () => {
    push('/signup')
  }

  const initialTimerId = useRef(false)

  useEffect(() => {
    if (token) {
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
        <div className='logo-nav' onClick={() => push('/')}>
          <h1>ParrotWings</h1>
        </div>

        <div className='transfer-block'>
          {token && (
            <>
              <Link to='/transfer'>Transfer currency</Link>
              <Link to='/histori-transfer'>Transfer history</Link>
            </>
          )}
        </div>

        <div className='user-block'>
          <div className='user-info-block'>{token && userInfo && `${userInfo.name} | PW: ${userInfo.balance}`}</div>
          <div className='user-control-block'>
            {token ? (
              <Button theme={'light-green'} onClick={() => exitApp()}>
                Logout
              </Button>
            ) : (
              <>
                <Button theme={'light-green'} onClick={() => goToLogin()}>
                  Login
                </Button>
                <Button theme={'light-green'} className='button-top-right' onClick={() => goToSignUp()}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
}

export default NavigationWrap
