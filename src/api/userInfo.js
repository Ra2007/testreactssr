import axios from 'axios'

export default () => {
  return axios.get('/api/protected/user-info')
}
