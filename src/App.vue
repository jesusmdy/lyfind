<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SearchInput from './components/SearchInput.vue';
import './App.scss'
</script>

<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content} / LyFind` : `LyFind` }}</template>
    </metainfo>
    <SearchInput />
    <router-view />
  </div>
</template>
