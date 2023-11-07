<template>
<!--  <div class="snow">-->
<!--   -->
<!--  </div>-->

  <!--  <div id="app">-->
  <!--  <RouterView />-->
  <!--  </div>-->


  <div class="" @click="playAudio" style="position: absolute;width: 100%;height: 100%;">

    <LoginPage v-if="currPage==='login'"/>
    <MainPage v-if="currPage==='main'"/>
    <AdventureListPage v-if="currPage==='adventure_list'"/>
<!--    <WorldPage v-if="adventurer" :class="[currPage==='world'?'slide slide-in':'slide slide-out']"/>-->
    <WorldPage v-if="currPage==='world'" />

    <audio ref="audioPlayer" src="music/ui/bgm.mp3" autoplay loop volume="0.5"></audio>
  </div>


</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import LoginPage from "./pages/LoginPage.vue";
import MainPage from './pages/MainPage.vue'
import AdventureListPage from './pages/AdventureListPage.vue'
import WorldPage from './pages/WorldPage.vue'
import {mapState} from "vuex";
import {playClickSound} from "@/utils/index.js";

export default {
  name: 'App',
  components: {LoginPage, MainPage, AdventureListPage, WorldPage},
  mounted() {
    // this.playAudio()
  },
  computed: mapState(['currPage','adventurer']),
  data() {
    return {
      bgm: false,
    }
  },
  methods: {
    playAudio() {
      if (this.bgm) {
        return;
      }
      this.bgm = true;
      playClickSound();
      this.$refs.audioPlayer.play();
    }
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}

.show {
  transform: scale(1);
  background: rgb(0, 0, 0, 0);
}

.hide {
  transform: scale(0);
  background: rgb(0, 0, 0, 0);
}

.modal_animation {
  opacity: 1;
  transition: transform 0.2s;
}

.world_slide {
  left: 100%;  /* 设置初始位置在右侧屏幕之外 */
  top: 50%;  /* 调整初始位置为您需要的位置 */
  transform: translateY(-50%);
  transition: left 0.2s ease-in-out; /* 添加过渡效果 */
}

.world_slide-out {
  //left: -200px; /* 将位置调整为左侧边缘 */
}

.world_slide-in {
  left: 0; /* 激活时将位置调整为左侧边缘 */
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-1px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}

.idle-animation {
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
  box-shadow: none !important;
}
.idle-animation img{
//image-rendering: -webkit-optimize-contrast; /* 使用适当的渲染方式 */
  image-rendering: optimizeQuality;
  -webkit-backface-visibility: hidden; /* 修复某些浏览器的 3D 渲染问题 */
  backface-visibility: hidden;
  -webkit-transform: translateZ(0); /* 修复某些浏览器的 GPU 加速问题 */
  transform: translateZ(0);
}



</style>
