import axios from 'axios'

let baseUrl = ''

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://cryptic-cliffs-66031.herokuapp.com'
}

const click = async () => {
  const res = await axios.post(`${baseUrl}/counter/click`)
  return res.data
}

export default {
  click
}