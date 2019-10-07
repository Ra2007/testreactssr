import fetch from '../index'

export default ({body}) =>
  fetch({
    url: '/users',
    method: 'POST',
    body: {
      ...body,
    },
  })
