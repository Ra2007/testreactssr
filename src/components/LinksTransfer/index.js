import React from 'react'
import T from 'prop-types'
import { Link } from 'react-router-dom'

const LinksTransfer = ({ token }) => (
  <div className='transfer-block'>
    {token && (
      <>
        <Link to='/transfer'>Transfer currency</Link>
        <Link to='/histori-transfer'>Transfer history</Link>
      </>
    )}
  </div>
)

export default LinksTransfer

LinksTransfer.propTypes = {
  token: T.string,
}
