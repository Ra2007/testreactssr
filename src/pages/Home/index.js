import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const Home = (props) => {
  const {
    auth: {token},
  } = props

  return !!token ? (
    <div className='home-wrapp'>
      <div className='text-home'>You can </div>

      <Link className='text-home' to='/transfer'>
        Transfer
      </Link>
      <div className='text-home'>a currency or see the</div>
      <Link className='text-home' to='/histori-transfer'>
        History
      </Link>

      <div className='text-home'>of currency transfers</div>
    </div>
  ) : (
    <div className='home-wrapp'>
      <div className='text-home'>The application is for Parrot Wings transfer </div>
      <div className='text-home'>for work it is necessary</div>
      <Link className='text-home' to='/signup'>
        Sign Up
      </Link>
      <div className='text-home'>or</div>
      <Link className='text-home' to='/login'>
        Login
      </Link>
    </div>
  )
}

export default Home
