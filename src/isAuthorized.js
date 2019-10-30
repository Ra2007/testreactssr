import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Login from './pages/Login/index.connector'
import { withRouter } from 'react-router'

function isAuthorizedWrapper(Component) {
  return class IsAuthorized extends PureComponent {
    render() {
      const {
        auth: { token },
      } = this.props

      if (!token) {
        return <Login />
      }
      return <Component {...this.props} />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = () => ({})

export default function isAuthorized(Component) {
  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(isAuthorizedWrapper(Component))
  )
}
