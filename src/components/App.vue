<template>
  <HeroContent v-if="docType === 'Hero'" />
  <DocsContent v-else />
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useData } from 'vitepress';
import HeroContent from './HeroContent.vue';
import DocsContent from './DocsContent.vue';
export default defineComponent({
  name: 'Layout',
  components: { HeroContent, DocsContent },
  setup() {
    const { frontmatter } = useData();
    const docType = computed(() => {
      if (frontmatter.value.hero) return 'Hero';
      return 'Docs';
    });
    return {
      docType,
    };
  },
});
</script>
<style lang="less" scoped></style>
