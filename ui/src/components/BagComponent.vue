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
      await this.equip(item.id)
    },
    async onClickUseItem(item) {
      await this.use_item(item.id)
    },
    async onClickDropItem(item) {
      await this.drop_items(item.id)
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
        <button class="item" @click="onClickEquip(item)">Equip</button>
        <button class="item" @click="onClickUseItem(item)">Use</button>
        <button class="item" @click="onClickDropItem(item)">Drop</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>