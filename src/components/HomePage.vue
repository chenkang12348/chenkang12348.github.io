<template>
  <div class="home-page">
    <HomeNav />
    <div class="home-content">
      <div class="content-left">
        <div class="left-title">
          <h1>F{{'</code>'}}</h1>
        </div>
        <p class="left-descript">
          Do whatever you wanna do, go wherever you wanna go.
        </p>
        <div class="left-btn">
          <a
            class="btn btn-primary btn-ghost btn-shine"
            href="/views/about.html"
            >README</a
          >
          <a
            class="btn btn-primary btn-ghost btn-shine"
            href="/views/article/index.html"
            >BLOG</a
          >
        </div>
      </div>
    </div>
    <home-bg />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HomeBg from './common/HomeBg.vue';
import HomeNav from './common/HomeNav.vue';
export default defineComponent({
  name: 'HomePage',
  components: { HomeNav, HomeBg },
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
    margin: auto;
    justify-content: center;
    height: 100%;
    // overflow-y: auto;
    .home-cover {
      object-fit: cover;
    }
    .content-left {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // .left-title {
      //   font-size: 36px;
      //   font-weight: 600;
      //   margin-bottom: 10px;
      // }
      .left-title {
        display: grid;
        place-items: center;
        // height: 100vh;
        color: white;

        h1 {
          font-size: 250%;
          text-shadow: 0 2px 2px black;
          color: #fff;
        }
      }

      .left-descript {
        font-size: 20px;
        margin-bottom: 30px;
        color: #000;
      }
      .left-btn {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
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
      justify-content: center;
      width: 100%;
      height: 100%;
      .home-cover {
        width: 55%;
        height: 100%;
        object-fit: cover;
      }
      .content-left {
        // padding: 30px 50px;
        // width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // .left-title {
        //   font-size: 36px;
        //   font-weight: 600;
        //   margin-top: 200px;
        //   margin-bottom: 10px;
        // }
        .left-title {
          display: grid;
          place-items: center;
          // height: 100vh;
          color: white;

          h1 {
            font-size: 250%;
            text-shadow: 0 2px 2px black;
            color: #fff;
          }
        }
        .left-title{
            text-align: center;
            // background-color: #000;
            filter: contrast(30);
            h1{
              font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
              letter-spacing: -40px;
              animation: move-letter 4s linear forwards; 
              }
        }
        .left-descript {
          font-size: 20px;
          margin-bottom: 30px;
          color: #000;
        }
        .left-btn {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
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
      // padding: 30px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
@keyframes move-letter{
  0% {
    opacity: 0;
    letter-spacing: -40px;
    filter: blur(10px);
  }
  25% {
    opacity: 1;
  }
  50% {
    filter: blur(5px);
  }
  100% {
    letter-spacing: 2px;
    filter: blur(0px);
  }
}


</style>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);

.left-descript {
  color: #000;
  font-size: 2em;
  padding:20px;
  font-family: Lato, sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  background-size: 80%;
  background-repeat: no-repeat;
  // below two lines create text gradient effect
  color: transparent;
  background-clip: text;
  animation: shining 3s linear forwards;
  filter: drop-shadow(2px 4px 6px black);
  opacity: 0.3;
}

@keyframes shining {
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
}

.btn {
  --hue: 190;
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 187;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: white;
    }
  }

  &-shine {
    color: white;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(var(--hue), 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      background: transparent;
      box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
}
</style>
