import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Loader from '../Loader'

import './styles.scss'

export default function Button(props) {
  const {
    children,
    className = '',
    contentClassName,
    disabled,
    type,
    theme = '',
    size,
    showFocus,
    isBusy,
    ...otherProps
  } = props

  const classBtn = ['button', `${className}`, `${theme}`, `${(disabled || isBusy) && 'disabled'}`].join(' ')
  const labelBtn = `label ${contentClassName}`
  return (
    <button disabled={disabled || isBusy} className={classBtn} type={type} {..._.omit(otherProps, ['busyManagerKey'])}>
      {!isBusy ? (
        <div className={labelBtn}>{children}</div>
      ) : (
        <div className='loader-btn'>
          <Loader />
        </div>
      )}
    </button>
  )
}
