import api from './index'
import normalizeSearch from './utils/normalizeSearch'

export default async function search({query = null, page = 1}) {
  try {
    const {data: result} = await api.get('/search', {
      params: {
        q: query,
        page
      }
    })
    return normalizeSearch(result)
  } catch(e) {
    return null
  }
}
