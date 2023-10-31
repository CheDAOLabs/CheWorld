<script>
import {mapActions, mapState} from "vuex";
import {ITEM_ICONS, ITEM_SLOTS, ITEM_TYPES, ITEMS} from "../system/GameData.js";
import {calculateLevel, calculateProgress, playClickSound} from "@/utils/index.js";

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
    calculateProgress,
    calculateLevel,
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
    getItemName(item) {
      return ITEMS[item.id]
    },
    getItemType(item) {
      return ITEM_TYPES[item.id]
    },
    getItemIcon(item){
      let name = ITEMS[item.id];
      let slot  = ITEM_SLOTS[name];
      console.log("slot",slot)
      return ITEM_ICONS[slot];
    }
  }

}
</script>

<template>

  <div class="sideList">
    <div class="list">
      <ul>
        <li style="">
          <div class="border">
            <div class="imgbox"><img src="/src/assets/images/set1.png" alt=""></div>
            <div class="ri">
              <div class="title">Roast meat</div>
              <div class="dec">Type: Meat</div>
              <div class="lv">
                <!--                <span>LV1</span><i><em style="width: 40%;"></em></i>-->
                <span>{{ adventurer.resources.roast_meat }}</span>
              </div>
            </div>
            <a href="#" class="eq" @click="onClickUseItem">USE</a></div>
          <!--          <a href="#" class="delet"></a>-->
        </li>
        <li v-for="(item, index) in adventurer.bag" :key="index" v-show="item && item.id!==0">
          <div class="border">
            <div class="imgbox">
              <img :src="'images/'+getItemIcon(item)" alt="">
            </div>
            <div class="ri">
              <div class="title">{{ getItemName(item) }}</div>
              <div class="dec">Type: {{ getItemType(item) }}</div>
              <div class="lv">
                <span>LV{{calculateLevel(item.xp)}}</span>
                <i>
                  <em :style="'width:'+calculateProgress(item.xp)+'%'"></em>
                </i>
              </div>
            </div>
            <a href="#" class="eq" @click="onClickEquip(item)">EQUIP</a>
          </div>
          <a href="#" class="delet" @click="onClickDropItem(item)"></a>
        </li>
      </ul>
    </div>
  </div>


  <!--  <div id="bag" class="leftInfor">-->
  <!--    <ul>-->
  <!--      <li v-for="(item, index) in adventurer.bag" :key="index" v-show="item && item.id!==0">-->
  <!--        <div>{{ getItemName(item)}}</div>-->

  <!--        &lt;!&ndash;        <div class="item">{{ item.name }}</div>&ndash;&gt;-->
  <!--        &lt;!&ndash;        <div class="item">{{ item.count }}</div>&ndash;&gt;-->
  <!--        <button class="item" @click="onClickEquip(item)">Equip</button>-->
  <!--        <button class="item" @click="onClickUseItem(item)">Use</button>-->
  <!--        <button class="item" @click="onClickDropItem(item)">Drop</button>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->

</template>

<style scoped>

</style>