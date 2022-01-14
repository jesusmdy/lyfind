<template>
  <div class="container mx-auto">
    <div v-if="$route?.query?.search">
      <Search  />
    </div>
    <div class="empty" v-else>
      <h1 class="title">
        Start typing to search lyrics
      </h1>
    </div>
  </div>
</template>
<script>
import Search from '../components/Search.vue'
export default {
  name: 'Index',
  components: {Search}
}
</script>
<style lang="scss" scoped>
.empty {
  @apply
    flex
    items-center
    justify-center
  ;
  height: 50vh;
  .title {
    @apply
      text-4xl
      text-fuchsia-500
      dark:text-fuchsia-500
    ;
  }
}
</style>
