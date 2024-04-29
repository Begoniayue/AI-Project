<template>
  <Header />
  <div class="square" style="background-color: red;height: 800px">
    <div class="container">
      <div class="item" v-for="item in data">
        <img :src="getMockImagesURL()" @load="imgLoaded" alt="mock images" :width="item.width/3" :height="item.height/3">
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Square/Header.vue";
import { ref ,onMounted} from "vue";
// import { WaterFall } from "@/components/Waterfall/WaterFall.vue";
import {GetInspirationListApi} from "@/apis/common/common.api.js";
const data = ref([]);
const itemBox = ref();
const ing =[{
  src: 'https://img.yzcdn.cn/vant/cat.jpeg',
  id: 'Title',
}, {
}]
const getList = () => {
  GetInspirationListApi({page:1}).then(res => {
    console.log(res,'res')
    if (res.status === 200) {
      //data.value = res.list
      data.value = getImgProportion(res.list);

      //console.log(res,data.value)
    }
  })
};
import Masonry from 'masonry-layout';
let masonry;
/*計算瀑布流盒子存放個數*/
function getWaterfallNum(){
   let box = document.querySelector('.square');
   itemBox.value = Math.floor(box.offsetWidth / 5) - 15;
}
/*計算圖片比例*/
function getImgProportion(data){
  let datas = data;
  let widthBox = itemBox.value;
  if (datas.length != 0) {
    for (let i = 0; i < datas.length; i++) {
      datas[i].height =  Math.floor(( Number(datas[i].picheight) / Number(datas[i].picwidth)) * widthBox)
      datas[i].width = widthBox;
    }
  }
  return datas
}
function imgLoaded(){
  masonry.layout();
}

function getMockImagesURL() {
  let arr = [200, 250, 300, 350, 400, 450];
  const width = arr[Math.ceil(Math.random() * 10) % 6];
  const height = arr[Math.ceil(Math.random() * 10) % 6];
  return `https://picsum.photos/${width}/${height}`;
}
onMounted( () => {
  document.body.setAttribute('style', '');
  masonry = new Masonry('.container', {
    itemSelector: '.item',//将以此选择器对应的元素作为瀑布流内容元素
    columnWidth: '.container .item',//将以此选择器对应的元素宽度作为瀑布流的列宽
    percentPosition: true,//支持百分比宽度
  });
  getWaterfallNum()
  getList()
})
</script>
<style>
</style>
