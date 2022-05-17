<template>
  <div class="article-tag" :style="{ 'background-color': color }">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Tag',
  props: {
    color: {
      type: String,
      default: '#d4d4d4',
    },
  },
});
</script>
<style lang="less" scoped>
.article-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
