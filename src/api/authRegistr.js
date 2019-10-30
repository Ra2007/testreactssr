import axios from 'axios'

export default ({ body }) =>
  axios.post('/users', {
    ...body,
  })
