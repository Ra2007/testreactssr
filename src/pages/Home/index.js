import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const Home = (props) => {
  const {
    auth: {token},
  } = props

  return !!token ? (
    <div>
      <h1>You can translate a currency or see the history of currency transfers</h1>
      <Link to='/transfer'>Transfer</Link>
      <br />
      <Link to='/histori-transfer'>History</Link>
    </div>
  ) : (
    <div>
      <h1>The application is for Parrot Wings transfer </h1>
      <Link to='/signup'>Sign Up</Link>
      <br />
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Home
