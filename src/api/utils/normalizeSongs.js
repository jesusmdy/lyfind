// See https://api.genius.com/ to know what is returned

export default function normalizeSongs(songsArr) {
  return songsArr
  .filter(song => song.type == 'song')
  .map(song => song.result)
}