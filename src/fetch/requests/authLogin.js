import fetch from '../index'

export default ({body}) =>
  fetch({
    url: '/sessions/create',
    method: 'POST',
    body: {
      ...body,
    },
  })
