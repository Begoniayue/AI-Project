<template>
  <el-tabs v-model="activeName" class="square-tab" @tab-click="handleClick">
    <el-tab-pane label="灵感区" name="first">灵感区</el-tab-pane>
    <el-tab-pane label="风格广场" name="second">风格广场</el-tab-pane>
    <el-tab-pane label="风格训练" name="third">风格训练</el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.square-tab  .el-tabs__content{
  font-size: 18px;
  color: #C4C5C5;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>