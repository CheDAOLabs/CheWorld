<script>
import {mapActions, mapState} from "vuex";
import {ITEMS} from "../system/GameData.js";
import {playClickSound} from "@/utils/index.js";

export default {
  name: "BagComponent",
  props: {},
  computed: {
    ...mapState(['adventurer']),
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.adventurer.bag)
  },
  methods: {
    ...mapActions(['equip', 'drop_items', 'eat']),
    async onClickEquip(item) {
      playClickSound();
      await this.equip(item.id)
    },
    async onClickUseItem(item) {
      playClickSound();
      await this.eat()
    },
    async onClickDropItem(item) {
      playClickSound();
      await this.drop_items(item.id)
    },
    getItemName(item){
      return ITEMS[item.id]
    },
  }

}
</script>

<template>

  <div id="bag" class="leftInfor">
    <ul>
      <li v-for="(item, index) in adventurer.bag" :key="index" v-show="item && item.id!==0">
        <div>{{ getItemName(item)}}</div>

        <!--        <div class="item">{{ item.name }}</div>-->
        <!--        <div class="item">{{ item.count }}</div>-->
        <button class="item" @click="onClickEquip(item)">Equip</button>
        <button class="item" @click="onClickUseItem(item)">Use</button>
        <button class="item" @click="onClickDropItem(item)">Drop</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>