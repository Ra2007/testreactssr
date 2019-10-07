import fetch from '../index'

export default ({token}) =>
  fetch({
    url: '/api/protected/transactions',
    token,
  })
