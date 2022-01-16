<template>
  <div class="meta">
    <div class="item">{{ song.release_date_for_display }}</div>
    <div class="item">Views: {{ song.stats.pageviews }}</div>
    <div class="item">Contributors: {{ song.stats.contributors }}</div>
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
    ;
    &:last-child {
      @apply border-none;
    }
  }
}
</style>
