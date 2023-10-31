<script>
import {mapState} from "vuex";
import {getResConfigByKey, ResType} from "@/config/res_conf.js";

export default {
  name: 'ShortcutBar',
  components: {},

  mounted() {

  },
  computed: mapState(['wallet_address', "adventurer",]),
  data() {
    return {
      page: 1,
      limit: 10,
    }
  },
  methods: {
    getRenderData() {
      let page = this.page;
      let limit = this.limit;
      let temp = {
        icon: "@/assets/images/set1.png",
        num: 0,
        name: "wild berries",
        desc: "Wild berries are precious forest resources, providing both nourishment and healing.",
        type: "wild berries",
      };

      let res = [];
      let resources = this.adventurer.resources;
      console.log("resources", resources);
      Object.keys(resources).map((key) => {
        const num = resources[key];
        let item = JSON.parse(JSON.stringify(temp));
        if (num > 0 && key !== "last_timestamp") {
          item.name = getResConfigByKey(key).name;
          item.num = num;
          item.desc = getResConfigByKey(key).inform;
          item.type = ResType[getResConfigByKey(key).type];
          res.push(item);
        }
      });


      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedRes = res.slice(startIndex, endIndex);

      let empty = [];
      for (let i = res.length; i < limit; i++) {
        empty.push(i)
      }

      return {
        page: page,
        res: paginatedRes,
        empty: empty
      };
    }
  }
}
</script>

<template>
  <div class="controls">
    <ul>
      <li v-for="item in getRenderData().res " :key="item">
        <img src="@/assets/images/set1.png" alt="">
        <div class="num">{{ item.num }}</div>
        <div class="slide">
          <div class="if1">
            <div class="icn"><img src="@/assets/images/set1.png" alt=""></div>
            <div class="ri">
              <p>
                <b>Item: </b>{{ item.name }}
              </p>
              <p>
                <b>Type: </b>{{ item.type }}
              </p>
              <p>
                <b>Quantity: </b>{{ item.num }}
              </p>
            </div>
          </div>
          <div class="if2">
            {{ item.desc }}
          </div>
        </div>
      </li>
      <!--      <li v-for="i in getRenderData().empty " :key="i"></li>-->
    </ul>
  </div>
</template>

<style scoped>

</style>