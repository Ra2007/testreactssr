import React from 'react'
import T from 'prop-types'
import Loader from '../Loader'

import './styles.scss'

export default function Button(props) {
  const { children, className, contentClassName, disabled, theme, isBusy, ...otherProps } = props

  const classBtn = [
    'button',
    `${className}`,
    `${theme}`,
    `${disabled || isBusy ? 'disabled' : ''}`,
  ].join(' ')
  const labelBtn = `label ${contentClassName}`
  return (
    <div className={classBtn} {...otherProps}>
      {!isBusy ? (
        <div className={labelBtn}>{children}</div>
      ) : (
        <div className='loader-btn'>
          <Loader />
        </div>
      )}
    </div>
  )
}

Button.propTypes = {
  children: T.string,
  className: T.string,
  contentClassName: T.string,
  disabled: T.bool,
  theme: T.string,
  isBusy: T.bool,
}

Button.defaultProps = {
  className: '',
  theme: '',
}
