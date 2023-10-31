<template>
  <!--  <div id="app">-->
  <!--  <RouterView />-->
  <!--  </div>-->
  <div>

    <div @click="playAudio" style="position: absolute;width: 100%;height: 100%;z-index: 100;">

      <LoginPage v-if="currPage==='login'"/>
      <MainPage v-if="currPage==='main'"/>
      <AdventureListPage v-if="currPage==='adventure_list'"/>
      <WorldPage v-if="currPage==='world'"/>

      <audio ref="audioPlayer" src="music/ui/game_over.mp3" autoplay loop></audio>
    </div>
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
  computed: mapState(['currPage']),
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

<style >
#app {
  margin: 0;
  padding: 0;
}
.show{
  transform: scale(1);
  background: rgb(0,0,0,0);
}
.hide{
  transform: scale(0);
  background: rgb(0,0,0,0);
}
</style>
