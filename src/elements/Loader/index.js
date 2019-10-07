import PropTypes from 'prop-types'
import React, {Component} from 'react'

import './styles.scss'

export default class Loader extends Component {
  static propTypes = {
    className: PropTypes.string,
    ballClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    isBig: PropTypes.bool,
  }

  render() {
    const {className, ballClassName, wrapperClassName, isBig = false, ...rest} = this.props

    return (
      <span {...rest} className={`wrapper ${wrapperClassName}`}>
        <span className={`loader ${className} ${isBig && 'big'}`}>
          <span className={`ball first ${ballClassName} ${isBig && 'big'}`} />
          <span className={`ball second ${ballClassName} ${isBig && 'big'}`} />
          <span className={`ball third ${ballClassName} ${isBig && 'big'}`} />
        </span>
      </span>
    )
  }
}
