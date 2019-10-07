import React, {Fragment} from 'react'
import './styles.scss'

export default function Input(props) {
  const {className, handleInput, value, id, error, label, disabled, onBlur, onFocus, type = 'text'} = props
  const style = `input ${className ? className : ''} ${error && 'error'}`

  return (
    <main className='input-wrapp'>
      <Fragment>{label && <div className='input-label'>{label}</div>}</Fragment>
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
