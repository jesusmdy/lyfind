<script setup>
import searchIconVue from './icons/searchIcon.vue';
</script>
<template>
  <div class="searchBoxContainer">
    <form class="searchBox" method="GET" @submit.prevent="handleSubmit">
      <div class="searchIcon">
        <searchIconVue class="h-8 w-8" />
      </div>
      <input
        class="input"
        type="text"
        placeholder="Start typing a song or artist..."
        v-model="value"
      >
      <button>Search</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleSubmit() {
      this.value &&
      this.$router.push({
        path: '/',
        query: {
          search: this.value
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.searchBoxContainer {
  @apply
    p-4
    flex
    items-center
    justify-center
    w-full
  ;
  height: 15vh;
}
.searchBox {
  @apply
    w-full
    md:w-2/4
    border
    shadow-sm
    bg-white
    dark:bg-zinc-800
    border-fuchsia-200
    dark:border-zinc-700
    rounded-xl
    flex
  ;
  .searchIcon {
    @apply
      h-16
      w-16
      flex
      items-center
      justify-center
      text-fuchsia-200
      dark:text-fuchsia-900
    ;
  }
  .input {
    @apply
      w-full
      md:w-2/4
      flex-1
      py-4
      outline-none
      bg-transparent
      text-fuchsia-500
      dark:text-fuchsia-100
    ;
    &::placeholder {
      @apply text-fuchsia-300;
    }
  }
  button {
    @apply
      bg-fuchsia-100
      font-bold
      text-fuchsia-500
      px-8
      rounded-xl
      m-2
      dark:bg-fuchsia-900
      dark:text-fuchsia-200
    ;
  }
}
</style>
