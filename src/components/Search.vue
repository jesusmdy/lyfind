<template>
  <div class="container mx-auto">
    <div v-if="isLoading">Loading...</div>
    <div v-if="Boolean(songs.length) && !isLoading">
      <h4 class="text-2xl my-4 uppercase text-fuchsia-400">Results for <b>{{ $route.query.search }}</b></h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Song v-for="(song, n) in songs" :key="n" :song="song" />
      </div>
    </div>
    <div v-else>No posts</div>
  </div>
</template>
<script>
import search from '../api/search'
import Song from '../components/Song.vue'
export default {
  name: 'Search',
  components: {Song},
  data () {
    return {
      search: '',
      isLoading: false,
      songs: []
    }
  },
  methods: {
    doSearch() {
      this.isLoading = true
      this.songs = []
      search({query: this.$route.query.search})
      .then(songs => {
        this.songs = songs
        this.isLoading = false
      })
    }
  },
  mounted() {
    this.doSearch()
  },
  watch: {
    '$route.query.search': function () {
      this.doSearch()
    }
  }
}
</script>
