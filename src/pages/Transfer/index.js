import React, { useState, useEffect, useRef } from 'react'
import T from 'prop-types'
import Input from '../../elements/Input'
import Button from '../../elements/Button'
import TransactionTable from '../../components/TransactionTable'
import UsersList from '../../components/UsersList'

import './styles.scss'

const Transfer = (props) => {
  const [name, handleName] = useState('')
  const [currency, handleСurrency] = useState(0)
  const [isShowList, handleIsShowList] = useState(false)
  const [errorCurrency, handleErrorCurrency] = useState(false)
  const [isSendButton, handleIsSendButton] = useState(false)

  const {
    transfer: { users, fetching, transactionInfo, transactionError, transactionReplay },
    user: { userInfo },
    getUsersName,
    clearUserList,
    transactionCreate,
  } = props

  const timerRequest = useRef(null)

  const onFocusInput = () => {
    handleIsShowList(true)
    name && getUsersName(name)
    handleIsSendButton(false)
  }

  const onBlurInput = () => {
    setTimeout(() => {
      handleIsShowList(false)
      clearUserList()
    }, 300)
  }

  const checkQntCurrency = (e) => {
    if (/^(?:[0-9]\d*|\d)$/.test(e) || e === '') {
      handleIsSendButton(false)
      handleErrorCurrency(false)
      handleСurrency(e)
    }
  }

  const createTransaction = () => {
    if (userInfo.balance >= currency) {
      transactionCreate({ name, amount: currency })
      handleIsSendButton(true)
    } else {
      handleErrorCurrency(true)
    }
  }

  useEffect(() => {
    if (timerRequest.current) {
      clearTimeout(timerRequest.current)
    }
    if (name) {
      timerRequest.current = setTimeout(() => getUsersName(name), 500)
    } else {
      clearUserList()
    }
  }, [name])

  useEffect(() => {
    if (transactionReplay) {
      handleName(transactionReplay.userName)
      handleСurrency(transactionReplay.amount)
    }
  }, [transactionReplay])

  return (
    <div className='login-wrapp'>
      <div className='title-login'>Transfer page </div>
      <div className='input-wrap'>
        <Input
          label={'Name'}
          value={name}
          handleInput={handleName}
          onBlur={() => onBlurInput()}
          onFocus={() => onFocusInput()}
        />
        <UsersList users={users} isShowList={isShowList} name={name} handleName={handleName} />
        <Input
          label={'Currency'}
          value={currency}
          handleInput={(e) => checkQntCurrency(e)}
          error={errorCurrency && 'Input correct quantyti curency'}
        />
      </div>
      <Button
        disabled={!(name && currency) || isSendButton}
        isBusy={fetching}
        onClick={() => createTransaction()}
      >
        Send currency
      </Button>
      {isSendButton && transactionError && (
        <div className='transaction-error'>{transactionError}</div>
      )}
      <div className='transaction-info-block'>
        {transactionInfo && isSendButton && !transactionError && (
          <TransactionTable transactionInfo={[transactionInfo]} caption={'last transaction'} />
        )}
      </div>
    </div>
  )
}

Transfer.propTypes = {
  users: T.arrayOf(
    T.shape({
      id: T.number,
      name: T.string,
    })
  ),
  fetching: T.bool,
  transactionInfo: T.shape({
    date: T.string,
    username: T.string,
    amount: T.number,
    balance: T.number,
  }),
  transactionError: T.bool,
  transactionReplay: T.func,
  userInfo: T.shape({
    id: T.number,
    name: T.string,
    email: T.string,
    balance: T.number,
  }),
  getUsersName: T.func,
  clearUserList: T.func,
  transactionCreate: T.func,
}

export default Transfer
