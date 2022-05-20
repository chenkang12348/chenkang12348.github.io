<template>
  <div class="docs-content">
    <HomeNav />
    <div class="docs-bodyer">
      <ArticleContent v-if="navType === 'article'" />
      <Content v-else />
    </div>
    <home-bg />
  </div>
</template>
<script lang="ts">
import HomeBg from './common/HomeBg.vue';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vitepress';
import HomeNav from './common/HomeNav.vue';
import ArticleContent from './ArticleContent.vue';
export default defineComponent({
  name: 'DocsContent',
  components: { HomeNav, ArticleContent, HomeBg },
  setup() {
    const route = useRoute();
    const navType = computed(() => {
      let type = '';
      if (route.path.includes('/article/')) type = 'article';
      if (route.path.includes('/about/')) type = 'about';
      if (route.path.includes('/project/')) type = 'project';
      return type;
    });
    return {
      navType,
    };
  },
});
</script>
<style lang="less" scoped>
.docs-content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  // align-items: center;
  justify-content: center;
}

.docs-bodyer {
  padding: 20px;
  background: #fff;
  flex: 1;
  filter: drop-shadow(2px 4px 6px black);
  margin-top: 80px;
  box-sizing: border-box;
}
@media screen and (min-width: 800px) {
  .docs-bodyer {
    width: 80%;
    margin: 80px 200px 50px;
  }
}
@media screen and (max-width: 800px) {
  .docs-bodyer {
    margin: 0px;
    margin-top: 50px;
    width: 100%;
  }
}
</style>
