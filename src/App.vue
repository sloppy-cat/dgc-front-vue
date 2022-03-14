<script setup lang="ts">
import Search from './components/search/Search.vue';

import { onMounted, ref, watch } from 'vue';
const {keyword, setKeyword, enterKeyword, handleSubmit} = useKeyword()

watch(enterKeyword, ()=>{
  console.log('a')
})


function useKeyword() {
  const keyword = ref<string>('')
  const enterKeyword = ref<string>('')
  function setKeyword(e: InputEvent) {
    keyword.value = e.target?.value
  }
  function handleSubmit(e: SubmitEvent) {
    enterKeyword.value = e.target?.value
  }
  return {keyword, setKeyword, enterKeyword, handleSubmit}
}




</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Search :keyword="keyword" :setKeyword="setKeyword" :enterKeyword="enterKeyword" :handleSubmit="handleSubmit" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
