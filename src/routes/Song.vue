<template>
  <section class="main">
    <article v-if="song">
      <h1 class="text-2xl p-6">{{ song.full_title }}</h1>
    </article>
    <pre>{{song}}</pre>
  </section>
</template>
<script>
import { useMeta } from 'vue-meta'
import getSong from '../api/getSong'

export default {
  name: 'Song',
  setup(props) {
    useMeta({
      title: 'Song'
    })
  },
  data() {
    return {
      song: null
    }
  },
  async mounted() {
    const _song = await getSong({songId: this.$route.params.id})
    this.song = _song
  }
}
</script>
<style lang="scss" scoped>
.main {
  @apply
    max-w-screen-md
    mx-auto
    border
    border-fuchsia-200
    shadow-sm
    bg-fuchsia-50
    rounded-xl
  ;
}
</style>
