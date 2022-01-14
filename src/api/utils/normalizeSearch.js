// See https://api.genius.com/ to know what is returned

import normalizeSongs from "./normalizeSongs"

export default function normalizeSearch(response) {
  const {response: result} = response
  const {hits: songsArr} = result
  const hits = normalizeSongs(songsArr)
  return hits
}