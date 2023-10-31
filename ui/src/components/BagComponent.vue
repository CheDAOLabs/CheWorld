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
       await this.equip([0])
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
  <div id="bag">
    <ul>
      <li v-for="(item, index) in adventurer.bag" :key="index">
        <div>{{ index }}</div>
        <!--        <div class="item">{{ item.name }}</div>-->
        <!--        <div class="item">{{ item.count }}</div>-->
        <div class="item" @click="onClickEquip">Equip</div>
        <div class="item" @click="onClickUseItem">Use</div>
        <div class="item" @click="drop_item">Drop</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>