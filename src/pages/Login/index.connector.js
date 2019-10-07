import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {loginUser} from '../../store/actions'

import Component from './index'

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (params) => dispatch(loginUser(params)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
)
