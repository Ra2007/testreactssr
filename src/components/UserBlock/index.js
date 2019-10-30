import React from 'react'
import T from 'prop-types'
import Button from '../../elements/Button'

const UserBlock = ({ token, userInfo, exitApp, push }) => {
  return (
    <div className='user-block'>
      <div className='user-info-block'>
        {token && userInfo && `${userInfo.name} | PW: ${userInfo.balance}`}
      </div>
      <div className='user-control-block'>
        {token ? (
          <Button theme={'light-green'} onClick={() => exitApp()}>
            Logout
          </Button>
        ) : (
          <>
            <Button theme={'light-green'} onClick={() => push('/login')}>
              Login
            </Button>
            <Button
              theme={'light-green'}
              className='button-top-right'
              onClick={() => push('/signup')}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default UserBlock

UserBlock.propTypes = {
  token: T.string,
  userInfo: T.shape({
    name: T.string,
    balance: T.number,
  }),
  exitApp: T.func,
  push: T.func,
}
