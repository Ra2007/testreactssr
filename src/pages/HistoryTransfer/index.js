import React, {useEffect} from 'react'
import Button from '../../elements/Button'

import './styles.scss'

const HistoryTransfer = (props) => {
  const {
    history: {push},
    getTransactionList,
    setTransactionReplay,
    transfer: {transactionList},
  } = props

  const transactionReplay = (params) => {
    setTransactionReplay(params)
    push('/transfer')
  }

  useEffect(() => {
    getTransactionList()
  }, [])

  return (
    <div className='login-wrapp'>
      <div className='title-login'>History Transfer page</div>
      <table className='table-info'>
        <thead>
          <tr className='table-head'>
            <td>date / time</td>
            <td>corr. name</td>
            <td>amount</td>
            <td>balance</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {transactionList &&
            transactionList.map((tran) => (
              <tr key={tran.id}>
                <td>{tran.date}</td>
                <td>{tran.username}</td>
                <td>{`${tran.amount} PW`}</td>
                <td>{`${tran.balance} PW`}</td>
                <td>
                  {tran.amount < 0 && (
                    <Button onClick={() => transactionReplay({userName: tran.username, amount: -tran.amount})}>
                      Repeat transfer
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryTransfer
