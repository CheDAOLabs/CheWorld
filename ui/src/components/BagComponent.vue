<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "BagComponent",
  props: {

  },
  computed: {
    ...mapState(['adventurer']),
  },
  data() {
   return {

   }
  },
  methods: {
    ...mapActions(['equip','drop_items','use_item']),
    async onClickEquip(){
      //todo await this.equip()
    },
    async onClickUseItem(){
      //todo await this.use_item()
    },
    async drop_item(){
      //todo await this.drop_items()
    }
  }

}
</script>

<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<style scoped>

</style>