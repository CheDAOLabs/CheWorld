<script>
import {mapActions, mapState} from "vuex";

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
    ...mapActions(['equip', 'drop_items', 'use_item']),
    async onClickEquip(item) {
       await this.equip(41)
    },
    async onClickUseItem() {
      //todo await this.use_item()
    },
    async drop_item() {
      //todo await this.drop_items()
    }
  }

}
</script>

<template>

  <div id="bag" class="leftInfor">
    <ul>
      <li v-for="(item, index) in adventurer.bag" :key="index">
        <div>{{ index }}</div>
        <!--        <div class="item">{{ item.name }}</div>-->
        <!--        <div class="item">{{ item.count }}</div>-->
        <button class="item" @click="onClickEquip">Equip</button>
        <button class="item" @click="onClickUseItem">Use</button>
        <button class="item" @click="drop_item">Drop</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>