import React from 'react'
import T from 'prop-types'

const Logo = ({ push }) => (
  <div className='logo-nav' onClick={() => push('/')}>
    <h1>ParrotWings</h1>
  </div>
)

export default Logo

Logo.propTypes = {
  push: T.func,
}
