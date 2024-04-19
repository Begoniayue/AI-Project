<template>
  <Header />
  <div class="square">
    <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
      <div v-masonry-tile class="item" v-for="(item, index) in data">
        <img :src="`https://aiimg.justeasy.cn/${item.out_url}`" alt="mock images" :width="item.width" :height="item.height">
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Square/Header.vue";
import { ref ,onMounted} from "vue";
import {GetInspirationListApi} from "@/apis/common/common.api.js";
const data = ref([]);

const getList = () => {
  GetInspirationListApi({page:1}).then(res => {
    console.log(res,'res')
    if (res.status === 200) {
      //data.value = res.list
      // data.value = res.list;
      data.value = getImgProportion(res.list);
      console.log(res,data.value)
    }
  })
};
/**/
const itemBox = ref(0);
function getWaterfallNum(){
  let box = document.querySelector('.square');
  itemBox.value = Math.floor(box.offsetWidth / 5) - 15;
}
function getImgProportion(data){
  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      data[i].height =  Math.floor(( Number(data[i].picheight) / Number(data[i].picwidth)) * itemBox.value)
      data[i].width = itemBox.value;
    }
  }
  return data
}
onMounted( () => {
  getWaterfallNum()
  getList()
})
</script>
<style>
</style>
