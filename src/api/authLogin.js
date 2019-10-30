import axios from 'axios'

export default ({ body }) =>
  axios.post('/sessions/create', {
    ...body,
  })
