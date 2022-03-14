<template>
  <div>

    <input class="very-good-input" type="text" :value="keyword" @input="handleChangeKeyword($event)" @change="handleSubmit($event)" >
    <p>k - {{keyword}}</p>
    <p>fk - {{enterKeyword}}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineComponent } from 'vue';

const {
  keyword, 
  handleChangeKeyword, 
  enterKeyword, 
  handleSubmit
} = defineProps<{
  keyword: string
  handleChangeKeyword: Function
  enterKeyword: string
  handleSubmit: Function
}>()

</script>

<style lang="scss" scoped>
.very-good-input {
  height: 20px;
  border: none;
  border-bottom: 2px solid gray;
  margin-left: 5px;
  width: 95%;
  &:focus {
    outline: none;
    font-size: 15px;
    border: 2px solid gray;
    border-radius: 3px;
  }
}
</style>