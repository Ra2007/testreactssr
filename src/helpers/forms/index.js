import React, {useState} from 'react'
import cap from '../strings/cap'
import _ from 'lodash'

const errors = {
  NO_USERNAME: 'Input please correct user name',
  NO_EMAIL: 'Input please correct email',
  NO_PASSWORD: 'Input please correct password',
  NO_CONFIRMPASSWORD: 'Input please correct password',
}

const labelInput = {
  userName: 'User name',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm password',
}

const handleInput = (key, state) => {
  return function handler(nextValue) {
    const inputHandler = state[`handle${cap(key)}`]
    const isError = state[`${key}Error`]
    const errorHandler = state[`handle${cap(key)}Error`]

    if (isError && errorHandler) errorHandler('')

    inputHandler(nextValue)
  }
}

const handleError = (key, state) => {
  return function handler(nextError) {
    const isError = state[`${key}Error`]
    const errorHandler = state[`handle${cap(key)}Error`]

    if (isError || !errorHandler) return
    errorHandler(nextError)
  }
}

const checkErrorRules = (state, formValues, {keys, getValidationKeys}) => {
  const errorFuncs = []
  let index = 0
  keys.forEach((inputKey) => {
    const errorHandler = handleError(inputKey, state)

    const {errorRules} = formValues[inputKey]
    const inputValidationKeys =
      typeof getValidationKeys === 'function' ? getValidationKeys(inputKey) : Object.keys(errorRules)

    inputValidationKeys.forEach((validationKey) => {
      const inputError = errorRules[validationKey](state, {
        key: inputKey,
      })

      if (inputError) {
        errorFuncs.push(
          index === 0
            ? () => {
                document.getElementById(inputKey).focus()
                return errorHandler(inputError)
              }
            : () => errorHandler(inputError)
        )
        index++
      }
    })
  })

  return errorFuncs
}

export const getControlProps = (key, state) => {
  return {
    id: key,
    value: state[key],
    handleInput: handleInput(key, state),
    error: state[`${key}Error`],
    label: labelInput[key],
  }
}

export const validateForm = (state, formValues) => {
  let errorFuncs = []
  const set = new Set()

  Object.keys(formValues).map((key) => !_.isEmpty(formValues[key].errorRules) && set.add(key))

  errorFuncs = errorFuncs.concat(checkErrorRules(state, formValues, {keys: set}))

  return errorFuncs
}

export const validators = {
  isEmpty: (state, {key}) => (!state[key] ? errors[`NO_${key.toUpperCase()}`] : ''),
  isValidEmail: (state, {key}) => {
    const value = state[key]
    // eslint-disable-next-line no-useless-escape
    const isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      value
    )
    return isValid ? '' : errors[`NO_${key.toUpperCase()}`]
  },
  isSamePassword: (state, {key}) => (state[key] !== state.password ? errors[`NO_${key.toUpperCase()}`] : ''),
}

export const useForm = (formValues) => {
  let state = {}
  let handlers = {}

  Object.keys(formValues).forEach((name) => {
    const {initialState, errorRules = {}} = formValues[name]
    const isErrors = Object.keys(errorRules).length > 0

    const stateField = useState(initialState)
    state = {
      ...state,
      [name]: stateField[0],
    }
    handlers = {
      ...handlers,
      [`handle${cap(name)}`]: stateField[1],
    }

    if (isErrors) {
      const stateErrorField = useState('')
      state = {
        ...state,
        [`${name}Error`]: stateErrorField[0],
        [`handle${cap(name)}Error`]: stateErrorField[1],
      }
    }
  })

  return [state, handlers]
}
