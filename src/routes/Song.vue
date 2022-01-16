<script setup>
import eyeIconVue from '../components/icons/eyeIcon.vue'
import SongMeta from '../components/Song/Meta.vue'
</script>
<template>
  <section class="main">
    <article v-if="song">
      <div class="header">
        <div class="image">
          <img :src="song.song_art_image_thumbnail_url" />
        </div>
        <div class="content">
          <h1 class="text-2xl md:px-4">{{ song.title }}</h1>
          <router-link
            class="font-bold text-fuchsia-500 md:px-4"
            :to="song.primary_artist.api_path"
          >
            {{ song.primary_artist.name }}
          </router-link>
          <SongMeta :song="song" />
          <div class="info">
            <div v-for="(item, n) in song.media" :key="n" class="item">
              <a target="_blank" :href="item.url" class="chip">
                <img :src="`/icons/${item.provider}.png`" />
                <span>{{ item.provider }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="p-8 pt-0">
          <h4 class="text-2xl mb-2 uppercase font-medium text-fuchsia-900">Description</h4>
          <p class="text-lg text-fuchsia-900">{{ song.description.plain }}</p>
        </div>
      </div>
    </article>
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
    md:border
    md:border-fuchsia-200
    md:shadow-sm
    bg-fuchsia-50
    rounded-xl
  ;
  .header {
    @apply
      md:flex
      md:flex-wrap
      p-8
    ;
    .image {
      @apply
        w-40
        h-40
        flex
        items-center
        justify-center
      ;
      img {
        @apply
          w-40
          h-40
          rounded-lg
          shadow-sm
          border
        ;
      }
    }
    .content {
      @apply
        md:flex-1
        md:flex
        md:flex-col
        md:justify-end
      ;
      .info {
        @apply
          flex
          flex-wrap
          w-full
          md:px-4
          pt-2
        ;
        .item {
          @apply pr-2;
          .chip {
            @apply
              border
              rounded-full
              flex
              p-1
              bg-white
            ;
            &:hover {
              @apply
                border-fuchsia-500
                bg-fuchsia-100
              ;
            }
            img {
              @apply w-6 h-6 rounded-full;
            }
            span {
              @apply
                flex-1
                h-6
                flex
                flex-col
                justify-center
                capitalize
                text-sm
                font-semibold
                px-2
              ;
            }
          }
        }
      }
    }
  }
}
</style>
