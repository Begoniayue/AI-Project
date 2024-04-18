<template>
  <el-menu
      :default-active="activeIndex"
      class="square-tab"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#C4C5C5"
      :router="true"
  >
    <el-menu-item index="/">灵感区</el-menu-item>
    <el-menu-item index="2">风格广场</el-menu-item>
    <el-menu-item index="3">风格训练</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('/')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.square-tab{
  border-bottom: 1px solid #4A4949;
  .el-menu-item{
    font-size: 18px;
    color: #C4C5C5;
  }
  .el-menu-item.is-active{
    font-size: 18px!important;
    color: #C4C5C5!important;
    border-bottom: none!important;
    &:after{
      background: linear-gradient(-90deg, #EE6F0F, #FFAF31)!important;
      display: block;
      content: '';
      width: 70%;
      height: 3px;
      border-radius: 2px;
      bottom: 0px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>