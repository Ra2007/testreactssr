import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {getTransactionList, setTransactionReplay} from '../../store/actions'

import Component from './index'

const mapStateToProps = (state) => ({
  transfer: state.transfer,
})

const mapDispatchToProps = (dispatch) => ({
  getTransactionList: () => dispatch(getTransactionList()),
  setTransactionReplay: (params) => dispatch(setTransactionReplay(params)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
)
