<script setup>
import eyeIconVue from './icons/eyeIcon.vue'
</script>
<template>
  <router-link class="songItem" :to="`/songs/${song.id}`">
    <div class="flex items-center justify-center w-1/4">
      <img
        loading="lazy"
        class="w-20 h-20 rounded-xl"
        :src="song.song_art_image_thumbnail_url"
      />
    </div>
    <div class="title">
      <h4 class="block">
        {{ truncatewords(song.title, 4) }}
      </h4>
      <p class="artist">
        {{truncatewords(song.primary_artist.name, 6)}}
      </p>
      <div v-if="song?.stats?.pageviews" class="views">
        <eyeIconVue class="w-4 h-4 mr-1" />
        <span class="text-xs font-bold">{{ format(song.stats.pageviews) }}</span>
      </div>
    </div>
  </router-link>
</template>
<script>
import {truncatewords} from 'humanize'
import formatter from '../utils/numberFormatter'
const {format} = formatter
export default {
  name: 'SongItem',
  props: {
    song: null
  },
  methods: {truncatewords, format}
}
</script>

<style lang="scss" scoped>
.songItem {
  @apply
    rounded-xl
    border-2
    dark:border
    border-fuchsia-100
    dark:border-fuchsia-700
    flex
    h-28
    bg-fuchsia-50
    dark:bg-fuchsia-900
  ;
  .artist {
    @apply
      text-xs
      font-bold
      text-gray-700
      dark:text-fuchsia-500
      dark:font-normal
    ;
  }
  .title {
    @apply
      flex-1
      flex
      flex-col
      justify-center
      dark:text-fuchsia-200
      dark:font-bold
    ;
  }
  .views {
    @apply
      flex
      mt-2
      text-gray-600
      dark:text-fuchsia-400
    ;
  }
  &:hover {
    @apply
      border-fuchsia-200
      cursor-pointer
    ;
  }
}
</style>
