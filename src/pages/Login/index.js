import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import { Link } from 'react-router-dom'
import Input from '../../elements/Input'
import Button from '../../elements/Button'
import { getControlProps, validateForm, validators, useForm } from '../../helpers/forms'

import './styles.scss'

const confirmSighUp = (state, props) => {
  const triggerErrors = validateForm(state, formValues)
  if (triggerErrors.length !== 0) {
    return triggerErrors.map((f) => f())
  } else {
    const { password, email } = state
    const body = { password, email }

    state.handleIsClickButton(true)
    props.loginUser(body)
  }
}

const formValues = {
  email: {
    initialState: '',
    errorRules: {
      isEmpty: validators.isEmpty,
      isValidEmail: validators.isValidEmail,
    },
  },
  password: {
    initialState: '',
    errorRules: {
      isEmpty: validators.isEmpty,
    },
  },
}

const useControls = () => {
  const [isClickButton, handleIsClickButton] = useState(false)
  const state = {
    isClickButton,
  }
  const handlers = {
    handleIsClickButton,
  }

  return [state, handlers]
}

const useLogin = () => {
  const [formState, formHandlers] = useForm(formValues)
  const [controlsState, controlsHandlers] = useControls()

  const state = { ...formState, ...controlsState }
  const handlers = { ...formHandlers, ...controlsHandlers }

  return [state, handlers]
}

const Login = (props) => {
  const [orderState, orderHandlers] = useLogin()
  const state = { ...orderState, ...orderHandlers }

  const {
    auth: { fetching, token, loginError },
    history: { push },
  } = props

  const { isClickButton, handleIsClickButton } = state

  useEffect(() => {
    if (token) {
      setTimeout(() => push('/'), 1000)
    }
  }, [token])

  return (
    <form className='login-wrapp'>
      <div className='title-login'>Login</div>
      <Input {...getControlProps('email', state)} onFocus={() => handleIsClickButton(false)} />
      <Input
        {...getControlProps('password', state)}
        type='password'
        onFocus={() => handleIsClickButton(false)}
      />
      <div className='button-wrapp'>
        <Button isBusy={fetching} onClick={() => confirmSighUp(state, props)}>
          Login
        </Button>
        <Link to='/signup'>or Sign Up</Link>
      </div>
      {loginError && isClickButton && <div className='transaction-error'>{loginError}</div>}
    </form>
  )
}

export default Login

Login.propTypes = {
  fetching: T.bool,
  token: T.string,
  loginError: T.string,
  push: T.func,
}
