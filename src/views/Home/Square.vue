<template>
  <Header />
  <div class="square" style="background-color: red">
    <waterfall :data="data" :col="3">
      <img alt="load error" :src="item.avatar" height="200px"/>
    </waterfall>
  </div>
</template>

<script setup>
import Header from "@/components/Square/Header.vue";
import { ref ,onMounted} from "vue";
import {GetInspirationListApi} from "@/apis/common/common.api.js";
import waterfall from 'vue-waterfall2'
const data = ref([])
const getList = () => {
  GetInspirationListApi({page:1}).then(res => {
    console.log(res,'res')
    if (res.status === 200) {
      data.value = res.list
      console.log(res,data.value)
    }
  })
};
onMounted( () => {
   getList()
})
</script>
