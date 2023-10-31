<template>
  <div class="alertmodel modal_animation" style="">
    <div class="center center4" v-loading="loading">
      <div class="close" @click="onClockClose"></div>
      <div class="titlero">
        <img src="@/assets/images/title3.png" alt="">
      </div>
      <div class="con">
        <div class="left2">
          <div class="titles">
            equips
          </div>
          <div class="list type2">
            <ul>
              <li v-for="(item, index) in ITEM_ICONS" :key="index">
                <div class="border">
                  <div class="imgbox">
                    <img :src="'images/'+item" alt="">
                  </div>
                  <div class="ri" v-if="getItem(this.adventurer[index.toLowerCase()]).id!=0">
                    <div class="titler">{{ getItem(this.adventurer[index.toLowerCase()]).name }}</div>
                    <div class="decr">Type: {{ getItem(this.adventurer[index.toLowerCase()]).type }}</div>
                    <div class="lv">
                      <span>LV{{ calculateLevel(this.adventurer.xp) }}</span>
                      <i>
                        <em :style="'width:'+calculateProgress(this.adventurer.xp) +'%'"></em>
                      </i>
                    </div>
                  </div>
                  <div class="ri" v-else>
                    <div class="txt">None Equipped</div>
                  </div>
                  <a href="#" v-if="getItem(this.adventurer[index.toLowerCase()]).id!=0" class="eq"
                     @click="onClickUnEquip(getItem(this.adventurer[index.toLowerCase()]))">UNLOAD</a>
                </div>
                <!--                <div class="s1">-->
                <!--                  <div class="icon"><img src="@/assets/images/fd1.png" alt=""></div>-->
                <!--                  <div class="tit">{{ getItem(this.adventurer.head).name }}</div>-->
                <!--                </div>-->
                <!--                <div class="s2" v-if="this.adventurer.head.id>0">-->
                <!--                  <p>TIERS: {{ getItem(this.adventurer.head).tiers }}</p>-->
                <!--                  <p>XP: {{ getItem(this.adventurer.head).xp }}</p>-->
                <!--                </div>-->
                <!--                <a href="#" class="eq">UNLOAD</a>-->
              </li>
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd2.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.chest).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.chest.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.chest).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.chest).xp }}</p>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd3.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.waist).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.waist.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.waist).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.waist).xp }}</p>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd4.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.foot).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.foot.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.foot).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.foot).xp }}</p>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd5.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.weapon).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.weapon.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.weapon).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.weapon).xp }}</p>-->

              <!--                    <el-button size="small" @click="onClickUnEquip(this.adventurer.weapon)">unequip</el-button>-->

              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd6.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.hand).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.hand.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.hand).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.hand).xp }}</p>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd7.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.neck).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.neck.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.neck).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.neck).xp }}</p>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li>-->
              <!--                <div class="s1">-->
              <!--                  <div class="icon"><img src="@/assets/images/fd8.png" alt=""></div>-->
              <!--                  <div class="tit">{{ getItem(this.adventurer.ring).name }}</div>-->
              <!--                </div>-->
              <!--                <div class="s2" v-if="this.adventurer.ring.id>0">-->
              <!--                  <p>TIERS: {{ getItem(this.adventurer.ring).tiers }}</p>-->
              <!--                  <p>XP: {{ getItem(this.adventurer.ring).xp }}</p>-->
              <!--                </div>-->
              <!--              </li>-->
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="xt">
            <div class="tit">LV {{ calculateLevel(this.adventurer.xp) }}</div>
            <div class="val">
              <em :style="'width:'+calculateProgress(this.adventurer.xp)+'%'"></em>
            </div>
          </div>
          <div class="Point">
            <div class="s1">Point</div>
            <div class="s2">{{ this.point.toString() }}</div>
          </div>
          <div class="peopleDetail">
            <img src="@/assets/images/people.png" class="" style="    display: block;
    margin: auto;
    height: 299px;
    margin-bottom: 33px;" alt="">
            <div class="list">
              <ul>
                <li v-for="(value, key) in stat_desc" :key="key">
                  <div class="s1">{{ key }}</div>
                  <div class="s2">{{ stat(key) }}</div>
                  <div :class="[point>0 ? 's3' : '']" @click="onClickAddState(key)"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="btns" style="display: flex">
            <button class="btn2" v-show="showConfirm()" @click="reset">reset</button>
            <button class="btn2" v-show="showConfirm()" @click="onClickUpgrade">confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {stat_desc, stat_desc2} from "../config/stat.js";
import {ITEM_ICONS, ITEM_TIERS, ITEM_TYPES, ITEMS} from "../system/GameData.js";
import {calculateLevel, calculateProgress, playClickSound} from "@/utils/index.js";

export default {
  name: 'RoleInformation',
  components: {},
  mounted() {
    this.init();
  },
  watch: {
    adventurer(newValue, oldValue) {
      // 在 count 发生变化时执行的操作
     this.init()
    },
  },
  computed: {
    stat_desc() {
      return stat_desc2
    },
    ITEM_ICONS() {
      return ITEM_ICONS
    },
    ...mapState(['adventurer']),

  },
  data() {
    return {
      currenUpgrades: {
        Strength: 0,
        Dexterity: 0,
        Vitality: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
        Luck: 0
      },
      point: 0,
      loading: false
    }
  },

  methods: {
    calculateProgress,
    calculateLevel,
    ...mapMutations(['setShowInformation']),
    ...mapActions(['upgrade', 'unequip']),
    init() {
      console.log(this.adventurer);
      this.currenUpgrades = {
        Strength: 0,
        Dexterity: 0,
        Vitality: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
        Luck: 0
      };
      this.point = (Number)(this.adventurer.statUpgrades);
    },
    showConfirm() {
      let res = this.currenUpgrades.Strength + this.currenUpgrades.Dexterity + this.currenUpgrades.Vitality + this.currenUpgrades.Intelligence + this.currenUpgrades.Wisdom + this.currenUpgrades.Charisma + this.currenUpgrades.Luck > 0;
      console.log("showConfirm", res);
      return res;
    },
    stat: function (key) {
      return this.adventurer[key.toLowerCase()] + this.currenUpgrades[key];
    },
    onClockClose() {
      playClickSound();
      this.setShowInformation(false)
    },
    onClickAddState(key) {
      playClickSound();
      console.log(key, this.point);
      if (isNaN(this.point) || this.point <= 0) {
        return;
      }
      this.point--;
      this.currenUpgrades[key]++;
    },
    async onClickUpgrade() {
      playClickSound();
      if (this.loading) {
        return;
      }
      this.loading = true;
      const potions = 0;
      const items = [];
      try {
        await this.upgrade({
          currenUpgrades: this.currenUpgrades,
          potions: potions,
          items: items
        });
      } finally {
        this.loading = false
      }
    },
    getItem(i) {
      if (i === undefined || i.id === 0) {
        return {
          name: 'NONE EQUIPPED',
          xp: 0,
          id: 0,
          tiers: 0,
        }
      }
      const name = ITEMS[i.id];
      const tiers = ITEM_TIERS[name];
      const type = ITEM_TYPES[i.id];
      return {
        name: name,
        xp: i.xp,
        id: i.id,
        tiers: tiers,
        type: type
      }
    },
    async onClickUnEquip(item) {
      playClickSound();
      await this.unequip(item.id)
    },
    async reset() {
      playClickSound();
      this.init()
    }
  }
}
</script>

<style>

</style>