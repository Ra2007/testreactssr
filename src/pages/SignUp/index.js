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
    const { userName, password, email } = state
    const body = { username: userName, password, email }

    state.handleIsClickButton(true)
    props.registrUser(body)
  }
}

const formValues = {
  userName: {
    initialState: '',
    errorRules: {
      isEmpty: validators.isEmpty,
    },
  },
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

  confirmPassword: {
    initialState: '',
    errorRules: {
      isEmpty: validators.isEmpty,
      isSamePassword: validators.isSamePassword,
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

const useSignUp = () => {
  const [formState, formHandlers] = useForm(formValues)
  const [controlsState, controlsHandlers] = useControls()

  const state = { ...formState, ...controlsState }
  const handlers = { ...formHandlers, ...controlsHandlers }

  return [state, handlers]
}

const SignUp = (props) => {
  const [orderState, orderHandlers] = useSignUp()
  const state = { ...orderState, ...orderHandlers }

  const {
    auth: { fetching, token, signUpError },
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
      <div className='title-login'>Sign Up</div>

      <Input {...getControlProps('userName', state)} onFocus={() => handleIsClickButton(false)} />

      <Input {...getControlProps('email', state)} onFocus={() => handleIsClickButton(false)} />

      <Input
        {...getControlProps('password', state)}
        type='password'
        onFocus={() => handleIsClickButton(false)}
      />

      <Input
        {...getControlProps('confirmPassword', state)}
        type='password'
        onFocus={() => handleIsClickButton(false)}
      />
      <div className='button-wrapp'>
        <Button isBusy={fetching} onClick={() => confirmSighUp(state, props)}>
          Sign Up
        </Button>
        <Link to='/login'>or Login</Link>
      </div>
      {signUpError && isClickButton && <div className='transaction-error'>{signUpError}</div>}
    </form>
  )
}

export default SignUp

SignUp.propTypes = {
  fetching: T.bool,
  token: T.string,
  signUpError: T.string,
  push: T.func,
}
