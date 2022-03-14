<template>
  <div>
    <Search :keyword="keyword" :handleChangeKeyword="handleChangeKeyword" :enterKeyword="enterKeyword" :handleSubmit="handleSubmit" />
    <List :userList="userList" />
  </div>
</template>

<script setup lang="ts">

import Search from './components/search/Search.vue';
import List from './components/list/List.vue';
import { onMounted, ref, watch } from 'vue';
import { UserList } from './lib/type';
import { fetchMultiUser, fetchUserList } from './lib/api';

const {keyword, handleChangeKeyword, enterKeyword} = useKeyword()
const {userList, handleSubmit} = useUserList()
watch(enterKeyword, ()=>{
  console.log('a')
})


function useKeyword() {
  const keyword = ref<string>('')
  const enterKeyword = ref<string>('')
  function handleChangeKeyword(e: InputEvent) {
    keyword.value = e.target?.value
  }
  return {keyword, handleChangeKeyword, enterKeyword}
}

function useUserList() {
  const userList = ref<UserList>({
    items: [],
    incomplete_results: false,
    total_count: 0
  })

  async function handleSubmit(e: SubmitEvent) {
    const fetchedUserList = await fetchUserList(e.target?.value)
    const userDetailList = await fetchMultiUser(fetchedUserList)
    console.log(userDetailList)
    fetchedUserList.items = userDetailList
    userList.value = fetchedUserList
  }
  
  return { userList, handleSubmit }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
