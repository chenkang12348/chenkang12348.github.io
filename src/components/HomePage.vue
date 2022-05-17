<template>
  <div class="home-page">
    <HomeNav />
    <div class="home-content">
      <img class="home-cover" src="/images/cover3.jpg" />
      <div class="content-left">
        <div class="left-title">F小站</div>
        <div class="left-descript">
          Do whatever you wanna do, go wherever you wanna go.
        </div>
        <a class="enter-btn" href="/views/about.html">README</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HomeNav from './common/HomeNav.vue';
export default defineComponent({
  name: 'HomePage',
  components: { HomeNav },
});
</script>
<style lang="less" scoped>
@import url('./../.vitepress/style/var.less');

.home-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .home-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    overflow-y: auto;
    .home-cover {
      object-fit: cover;
    }
    .content-left {
      height: 100%;
      .left-title {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .left-descript {
        font-size: 20px;
        margin-bottom: 30px;
      }
      .enter-btn {
        display: block;
        width: 120px;
        height: 40px;
        border-radius: 4px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        background-color: @theme-color;
        cursor: pointer;
        &:hover {
          opacity: 0.85;
        }
      }
    }
  }
}
@media screen and (min-width: 700px) {
  .home-page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .home-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      .home-cover {
        width: 55%;
        height: 100%;
        object-fit: cover;
      }
      .content-left {
        padding: 30px 50px;
        width: 45%;
        height: 100%;
        .left-title {
          font-size: 36px;
          font-weight: 600;
          margin-top: 200px;
          margin-bottom: 10px;
        }
        .left-descript {
          font-size: 20px;
          margin-bottom: 30px;
        }
        .enter-btn {
          display: block;
          width: 120px;
          height: 40px;
          border-radius: 4px;
          color: #fff;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          background-color: @theme-color;
          cursor: pointer;
          &:hover {
            opacity: 0.85;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .home-page {
    min-width: 350px;
    .home-content {
      flex-direction: column;
    }
    .home-cover {
      width: 100%;
      height: 400px;
    }
    .content-left {
      width: 100%;
      padding: 30px 10px;
    }
  }
}
</style>
