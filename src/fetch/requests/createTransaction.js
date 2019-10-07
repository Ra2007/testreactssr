import fetch from '../index'

export default ({body, token}) =>
  fetch({
    url: '/api/protected/transactions',
    method: 'POST',
    body: {
      ...body,
    },
    token,
  })
