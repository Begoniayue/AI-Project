# 基于vite+vue3脚手架开发的ai项目的相关说明和开发手册
## 1.项目介绍
项目基于vite+vue3脚手架开发，主要功能是AI绘图，AI图片生成，
## 2.项目运行
1.安装依赖
```
npm install
```
2.运行项目
```
npm run dev
```
3.打包项目
```
npm run build
## 打包到指定目录下
npm run build -- --dest dist
```
## 3.项目目录结构
```
·src
···components
······index.vue
...router --路由
···views
······index.vue
······login.vue
······register.vue
... store --pinia
······index.js
······user.js
