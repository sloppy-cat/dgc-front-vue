<script setup lang="ts">
import { UserList } from '../../lib/type';
import Detail from './Detail.vue';

const {userList} = defineProps<{userList: UserList}>()

</script>

<template>
<div>
  <div v-for="user in userList.items" :key="user.login" >
    <Detail :user="user" />
    
  </div>
</div>
</template>
<style lang="">
  
</style>