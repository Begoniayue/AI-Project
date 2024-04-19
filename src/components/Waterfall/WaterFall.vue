<template>
  <div class="waterfall">
    <div v-for="(item, index) in columns" :key="index" class="column">
      <img v-for="img in item" :key="img.id" :src="img.src" @load="handleImageLoad">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const props = defineProps({
  images: Array,  // 从父组件接收一个图片数组
  columnCount: {  // 列数
    type: Number,
    default: 3
  }
});

const columns = reactive(Array.from({ length: props.columnCount }, () => []));

// 初始化瀑布流
onMounted(() => {
  distributeImages();
});

function distributeImages() {
  props.images.forEach((img, index) => {
    // 分配图片到最短的列
    const minHeightIndex = columns.reduce((minIndex, current, idx, arr) => arr[minIndex].length > current.length ? idx : minIndex, 0);
    columns[minHeightIndex].push(img);
  });
}

// 图片加载后调整布局
function handleImageLoad() {
  // 这里可以添加一些调整列高的逻辑
}
</script>

<style scoped>
.waterfall {
  display: flex;
  justify-content: space-around;
}
.column {
  flex: 1;
}
img {
  width: 100%;
  display: block;
}
</style>
