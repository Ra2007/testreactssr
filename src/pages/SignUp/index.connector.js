import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {registrUser} from '../../store/actions'

import Component from './index'

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  registrUser: (params) => dispatch(registrUser(params)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
)
