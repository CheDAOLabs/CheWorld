<script>
import {mapState} from "vuex";

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

  }

}
</script>

<template>
  <div></div>
</template>

<style scoped>

</style>