import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {getUsersName, clearUserList, transactionCreate} from '../../store/actions'

import Component from './index'

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  getUsersName: (filter) => dispatch(getUsersName(filter)),
  clearUserList: () => dispatch(clearUserList()),
  transactionCreate: (body) => dispatch(transactionCreate(body)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
)
