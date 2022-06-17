<template>
  <div class="article-content">
    <!-- <div class="article-nav-tag">
      <a
        v-for="tag in tags"
        :key="tag.name"
        :href="tag.url"
        :class="['tag-item', { 'tag-active': tagActive === tag.name }]"
      >
        {{ tag.name }}
      </a>
    </div> -->

    <div class="tabs">
      <ul class="tabs__links">
        <li v-for="tag in tags" :key="tag.name">
          <button
            :class="
              tagActive === tag.name ? 'active  tabs__link' : 'tabs__link'
            "
          >
            <abbr :title="tag.name" style="text-decoration: none">
              <a
                class="tabs__link__text"
                :data-text="tag.name"
                :href="tag.url"
                >{{ tag.name }}</a
              >
            </abbr>
          </button>
        </li>
      </ul>
    </div>
    <div class="content">
      <Content />
    </div>
    <div v-if="!catalogue" class="copy-right">
      {{'<code\
        >'}}
        <a href="/views/about.html">@F-笔记</a>
        {{'</code\
      >'}}
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
      // {
      //   name: 'All',
      //   url: '/views/article/index.html',
      // },
      {
        name: 'ES/TS',
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
  width: 100%;
  height: 100%;
  .content {
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
    height: calc(100% - 100px);
  }
  .article-nav-tag {
    // position: sticky;
    top: 50px;
    display: flex;
    align-items: center;
    z-index: 9;
    .tag-item {
      padding: 5px;
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
      border-bottom: 2px solid #333;
    }
  }
  .copy-right {
    font-size: 14px;
    opacity: 0.8;
    text-align: center;
    margin-top: 20px;
    color: #e6382b;
  }
}

@media screen and (min-width: 700px) {
  .article-nav-tag {
    height: 50px;
  }
}
@media screen and (max-width: 700px) {
  .article-content {
    // padding: 10px;
    .article-nav-tag {
      flex-wrap: wrap;
    }
  }
}
</style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,300');

@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

.tabs {
  --tab-links-height: 60px;
  --tab-links-bg: linear-gradient(135deg, #e5eaf1 0%, #b9c5d8 100%);
  --tab-links-overlay: linear-gradient(
    135deg,
    #2cd8d5 0%,
    #6b8dd6 48%,
    #8e37d7 100%
  );
  --tab-link-bg: linear-gradient(
    90deg,
    transparent 70%,
    rgba(255, 255, 255, 0.2) 100%
  );
  width: 100%;
  max-width: 1200px;
  min-width: 300px;
  font-family: Lato, sans-serif;

  .tabs__links {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--tab-links-height);
    background: var(--tab-links-bg);
    list-style-type: none;

    @include sp-layout {
      height: calc(var(--tab-links-height) * 0.8);
    }

    li {
      flex: 1;

      .tabs__link {
        all: unset;
        position: relative;
        height: var(--tab-links-height);
        width: 100%;
        background: var(--tab-link-bg);
        cursor: pointer;
        overflow: hidden;
        transition: 0.3s;

        @include sp-layout {
          height: calc(var(--tab-links-height) * 0.8);
          font-size: 12px;
        }

        // overlay
        &::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: var(--tab-links-overlay);
          transform: scaleY(0);
          transform-origin: top;
          transition: 0.3s ease-in-out;
        }

        .tabs__link__text {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.6;
          transition: 0.5s;
          width: 100%;
          height: 100%;

          // big-text
          &::before {
            position: absolute;
            content: attr(data-text);
            top: 160%;
            z-index: -1;
            font-size: 40px;
            font-weight: 600;
            color: white;
            opacity: 0.1;
            transition: 1.2s ease-out;

            @include sp-layout {
              display: none;
            }
          }
        }

        &:hover {
          &::before {
            transform: scaleY(1);
          }

          .tabs__link__text {
            color: white;
            opacity: 1;

            &::before {
              transform: translateY(-200%);
            }
          }
        }

        &.active {
          transform: scaleY(1);
          background: white;

          .tabs__link__text {
            transform: scale(1.5);
          }
          &::before {
            transform: scaleY(1);
          }

          .tabs__link__text {
            color: white;
            opacity: 1;

            &::before {
              transform: translateY(-200%);
            }
          }
        }

        // &.active .tabs__link__text,
        // &.active:hover .tabs__link__text {
        //   background: var(--tab-links-overlay);
        //   background-clip: text;
        //   background: white;
        //   color: #333;
        //   opacity: 1;
        // }
      }
    }
  }

  // .tabs__contents {
  //   position: relative;
  //   margin-top: 0;
  //   padding: 40px 60px;
  //   background: white;
  //   list-style-type: none;
  //   transition: 1s;

  //   // bottom-line
  //   &::after {
  //     position: absolute;
  //     content: '';
  //     left: 0;
  //     bottom: 0;
  //     width: 100%;
  //     height: 5px;
  //     background: var(--tab-links-overlay);
  //   }

  //   .tabs__content {
  //     display: none;
  //     min-height: 200px;
  //     font-weight: 300;
  //     line-height: 1.8;
  //     opacity: 0;
  //     transform: translateY(30%);
  //     animation: fadeIn 0.6s forwards;

  //     &.active {
  //       display: block;
  //     }
  //   }
  // }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
