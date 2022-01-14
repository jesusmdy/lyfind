import axios from 'axios'

import.meta.env.VITE_GENIUS_AUTH_TOKEN
const {VITE_GENIUS_AUTH_TOKEN: token} = import.meta.env

const instance = axios.create({
  baseURL: 'https://api.genius.com/',
  params: {
    access_token: token && token || null
  }
})

export default instance
