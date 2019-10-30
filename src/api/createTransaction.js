import axios from 'axios'

export default ({ body }) =>
  axios.post('/api/protected/transactions', {
    ...body,
  })
