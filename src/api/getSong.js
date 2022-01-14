import api from './index'

export default async function getSong({songId = null}) {
  try {
    const {data: result} = await api.get(`/songs/${songId}`)
    const {response} = result
    const {song} = response
    return song
  } catch(e) {
    return null
  }
}
