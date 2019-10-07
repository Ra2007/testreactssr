import fetch from '../index'

export default ({body, token}) =>
  fetch({
    url: '/api/protected/users/list',
    method: 'POST',
    body: {
      ...body,
    },
    token,
  })
