<template>
  <div class="common-layout">
    <el-container>
<!--      -->
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="container-header"
            mode="horizontal"
            :ellipsis="false"
            background-color="#000"
        >
          <el-menu-item index="0">
            <img
                style="width: 160px"
                src="https://res1.justeasy.cn/images/ai_style/logo.png"
                alt="ai logo"
            />
          </el-menu-item>
          <div class="flex-grow" />
          <el-sub-menu index="2">
            <template #title>
              <div class="user-avatar">
               头像
              </div>
            </template>
            <el-menu-item index="2-1" class="sub-menu">item one</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
<!--      -->
      <el-container class="container-main">
        <el-aside width="200px">
          <el-menu
              active-text-color="#fff"
              background-color="#000"
              class="menu-side"
              default-active="2"
              text-color="#fff"
              @select="handleSelect"
              router
          >
            <div class="nave-title">为你推荐</div>
            <el-menu-item index="/" class="menu-item" path="ins_zone">
              <svg-icon iconName="icon-lingganzhongxin"></svg-icon>
              <span>灵感中心</span>
            </el-menu-item>
            <el-menu-item index="/plug" class="menu-item">
              <svg-icon iconName="icon-chajian"></svg-icon>
              <span>插件中心</span>
            </el-menu-item>
            <el-menu-item index="3" class="menu-item">
              <svg-icon iconName="icon-wenhao"></svg-icon>
              <span>帮助中心</span>
            </el-menu-item>
            <div class="nave-title">个人创作</div>
            <el-menu-item index="4" class="menu-item">
              <svg-icon iconName="icon-AIchuangzuo"></svg-icon>
              <span>AI创作</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.container-header{
  border: none;
}
.container-main{
  padding: 20px;
}
.menu-item{
  color: #FEFEFE;
  font-size: 14px;
  height: 40px;
  border-radius: 8px;
  margin-bottom: 15px;
}
.menu-item.is-active{
  background: linear-gradient(-15deg, #EE6F0F, #FFAF31)!important;
}
.sub-menu{
  color: #f9f9f9!important;
}
.menu-side{
  border: none;
  height: 70vh;
  .nave-title{
    font-size: 12px;
    color: #808080;
    margin-bottom: 10px;
    padding-left: 15px;
    text-align: left;
  }
}
.flex-grow {
  flex-grow: 1;
}
.user-avatar{
  color: #f9f9f9;
}
</style>