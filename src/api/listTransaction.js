import axios from 'axios'

export default () => axios.get('/api/protected/transactions')
