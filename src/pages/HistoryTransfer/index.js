import React, { useEffect } from 'react'
import T from 'prop-types'
import TransactionTable from '../../components/TransactionTable'

import './styles.scss'

const HistoryTransfer = (props) => {
  const {
    history: { push },
    getTransactionList,
    setTransactionReplay,
    transfer: { transactionList },
  } = props

  const transactionReplay = (params) => {
    setTransactionReplay(params)
    push('/transfer')
  }

  useEffect(() => {
    setTimeout(() => getTransactionList(), 0)
  }, [])

  return (
    <div className='login-wrapp'>
      <div className='title-login'>History Transfer page</div>
      <TransactionTable transactionInfo={transactionList} replayBtn={transactionReplay} />
    </div>
  )
}

export default HistoryTransfer

HistoryTransfer.propTypes = {
  push: T.func,
  getTransactionList: T.func,
  setTransactionReplay: T.func,
  transactionList: T.arrayOf(
    T.shape({
      date: T.string,
      username: T.string,
      amount: T.number,
      balance: T.number,
    })
  ),
}
