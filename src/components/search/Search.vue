<template lang="">
  <div>

    <input type="text" :value="keyword" @input="setKeyword" @change="handleSubmit" >
    <p>k - {{keyword}}</p>
    <p>fk - {{enterKeyword}}</p>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const {keyword, setKeyword, enterKeyword, handleSubmit} = defineProps(['keyword', 'setKeyword', 'enterKeyword', 'handleSubmit'])

onMounted(()=>{
})
// watch(enterKeyword, ()=>{
//   console.log('a')
// })


// function useKeyword() {
//   const keyword = ref<string>('')
//   const enterKeyword = ref<string>('')
//   console.log(keyword.value)
//   function setKeyword(e: InputEvent) {
//     keyword.value = e.target?.value
//   }
//   function handleSubmit(e: SubmitEvent) {
//     enterKeyword.value = e.target?.value
//   }
//   return {keyword, setKeyword, enterKeyword, handleSubmit}
// }

</script>
<style lang="">
  
</style>