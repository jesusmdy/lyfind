<script setup>
import formatter from '../../utils/numberFormatter'
const {format} = formatter
import eyeIconVue from '../icons/eyeIcon.vue'
import userGrouIconVue from '../icons/userGrouIcon.vue'
</script>
<template>
  <div class="meta">
    <div class="item" title="Release date">{{ song.release_date_for_display }}</div>
    <div class="item" title="Views">
      <eyeIconVue class="h-4 w-4 mr-1" />
      {{ format(song.stats.pageviews) }}
    </div>
    <div class="item" title="Contributors">
      <userGrouIconVue class="h-4 w-4 mr-1" />
      {{ song.stats.contributors }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'SongMeta',
  props: {
    song: null
  }
}
</script>
<style lang="scss" scoped>
.meta {
  @apply
    flex
    flex-wrap
    p-2
  ;
  .item {
    @apply
      px-2
      text-xs
      font-semibold
      border-r
      flex
    ;
    &:last-child {
      @apply border-none;
    }
  }
}
</style>
