import React from 'react'
import T from 'prop-types'

import './styles.scss'

export default function Loader(props) {
  const { className, ballClassName, wrapperClassName, isBig } = props

  return (
    <span className={`wrapper ${wrapperClassName}`}>
      <span className={`loader ${className} ${isBig && 'big'}`}>
        <span className={`ball first ${ballClassName} ${isBig && 'big'}`} />
        <span className={`ball second ${ballClassName} ${isBig && 'big'}`} />
        <span className={`ball third ${ballClassName} ${isBig && 'big'}`} />
      </span>
    </span>
  )
}

Loader.propTypes = {
  className: T.string,
  ballClassName: T.string,
  wrapperClassName: T.string,
  isBig: T.bool,
}
Loader.defaultProps = {
  isBig: false,
}
