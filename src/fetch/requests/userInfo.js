import fetch from '../index'

export default ({token}) =>
  fetch({
    url: '/api/protected/user-info',
    token,
  })
