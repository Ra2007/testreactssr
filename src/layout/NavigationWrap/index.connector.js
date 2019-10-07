import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {getUserInfo, userLogout} from '../../store/actions'

import Component from './index'

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
  userLogout: () => dispatch(userLogout()),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
)
