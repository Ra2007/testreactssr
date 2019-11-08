import React from 'react'
import T from 'prop-types'

import './styles.scss'

export default function Input(props) {
  const { className, handleInput, value, id, error, label, disabled, onBlur, onFocus, type } = props

  const style = `input ${className ? className : ''} ${error ? 'error' : ''}`

  return (
    <main className='input-wrapp'>
      {label && <div className='input-label'>{label}</div>}
      <input
        disabled={disabled}
        id={id}
        className={style}
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
      />
      {error && <div className='input-error'>{error}</div>}
    </main>
  )
}

Input.propTypes = {
  className: T.string,
  handleInput: T.func,
  value: T.oneOfType([T.string, T.number]),
  id: T.string,
  error: T.oneOfType([T.string, T.bool]),
  label: T.string,
  disabled: T.bool,
  onBlur: T.func,
  onFocus: T.func,
  type: T.string,
}

Input.defaultProps = {
  type: 'text',
}
