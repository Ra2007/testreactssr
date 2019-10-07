import React, {useState, useEffect, useRef} from 'react'
import Input from '../../elements/Input'
import Button from '../../elements/Button'

import './styles.scss'

const Transfer = (props) => {
  const [name, handleName] = useState('')
  const [currency, handleСurrency] = useState(0)
  const [isShowList, handleIsShowList] = useState(false)
  const [errorCurrency, handleErrorCurrency] = useState(false)
  const [isSendButton, handleIsSendButton] = useState(false)

  const {
    transfer: {users, fetching, transactionInfo, transactionError, transactionReplay},
    user: {userInfo},
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
      transactionCreate({name, amount: currency})
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
    <div>
      <h1>Transfer page </h1>
      <div className='input-wrap'>
        <Input
          label={'Name'}
          value={name}
          handleInput={handleName}
          onBlur={() => onBlurInput()}
          onFocus={() => onFocusInput()}
        />
        {Object.keys(users).length > 0 && isShowList && (
          <div className='user-list'>
            {name !== '' &&
              Object.keys(users).map((idx) => (
                <div className='user-item' key={users[idx].id} onClick={() => handleName(users[idx].name)}>
                  {users[idx].name}
                </div>
              ))}
          </div>
        )}
        <Input
          label={'Currency'}
          value={currency}
          handleInput={(e) => checkQntCurrency(e)}
          error={errorCurrency && 'Input correct quantyti curency'}
        />
      </div>
      <Button disabled={!(name && currency) || isSendButton} isBusy={fetching} onClick={() => createTransaction()}>
        Send currency
      </Button>
      {isSendButton && transactionError && <div className='transaction-error'>{transactionError}</div>}
      <div className='transaction-info-block'>
        {transactionInfo && isSendButton && !transactionError && (
          <table className='table-info'>
            <caption> last transaction</caption>
            <thead>
              <tr>
                <td>date / time</td>
                <td>correspondent name</td>
                <td>amount</td>
                <td>balance</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{transactionInfo.date}</td>
                <td>{transactionInfo.username}</td>
                <td>{`${transactionInfo.amount} PW`}</td>
                <td>{`${transactionInfo.balance} PW`}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Transfer
