<template>
  <div class="article-content">
    <div class="article-nav-tag">
      <a
        v-for="tag in tags"
        :key="tag.name"
        :href="tag.url"
        :class="['tag-item', { 'tag-active': tagActive === tag.name }]"
      >
        {{ tag.name }}
      </a>
    </div>
    <Content />
    <div v-if="!catalogue" class="copy-right">
      本文首发于
      <a href="https://chenkang12348.github.io/">@F小站</a>，转载请署名出处
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useData } from 'vitepress';
export default defineComponent({
  name: 'ArticleContent',
  setup() {
    const { frontmatter } = useData();
    const tags = [
      {
        name: 'All',
        url: '/views/article/index.html',
      },
      {
        name: 'Javascript',
        url: '/views/article/Javascript/index.html',
      },
      {
        name: 'Vue',
        url: '/views/article/Vue/index.html',
      },
      {
        name: 'React',
        url: '/views/article/React/index.html',
      },
      {
        name: 'Nodejs',
        url: '/views/article/Nodejs/index.html',
      },
      {
        name: 'InformalEssay',
        url: '/views/article/InformalEssay/index.html',
      },
    ];
    const tagActive = computed(() => {
      return frontmatter.value.tag;
    });

    const catalogue = computed(() => {
      return frontmatter.value.catalogue || false;
    });
    return {
      tags,
      tagActive,
      catalogue,
    };
  },
});
</script>
<style lang="less" scoped>
.article-content {
  .article-nav-tag {
    position: sticky;
    top: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 9;
    .tag-item {
      font-size: 24px;
      color: #999;
      cursor: pointer;
      margin-right: 15px;
      line-height: 30px;
      &:hover {
        color: #333;
      }
    }
    .tag-active {
      color: #333;
    }
  }
  .copy-right {
    margin-top: 20px;
    color: #e6382b;
    font-weight: 700;
  }
}

@media screen and (min-width: 700px) {
  .article-nav-tag {
    height: 50px;
  }
}
@media screen and (max-width: 700px) {
  .article-content {
    padding: 10px;
    .article-nav-tag {
      flex-wrap: wrap;
    }
  }
}
</style>
