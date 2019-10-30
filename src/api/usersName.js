import axios from 'axios'

export default ({ body }) =>
  axios.post('/api/protected/users/list', {
    ...body,
  })
