<template>
  <div class="des">
    <div class="des-header">
      <h1>目的地</h1>
      <searchBox
        class="des-header-searchBox"
        :placeholder="'搜索你想要去的国家'"
      />
    </div>
    <div class="des-center">
      <div class="des-sidemenu">
        <div
          class="des-sidemenu-item"
          :style="{
            '--display': siedebarClickItem == item.text ? 'block' : 'none',
          }"
          @click="changeSideBarStyle(item)"
          :class="{ select: siedebarClickItem == item.text }"
          v-for="item in sidebarInfo"
          :key="item.id"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="des-main" id="des-main">
        <div
          class="des-main-item"
          v-for="item in desMainInfo"
          :key="item.text"
          :style="{ backgroundImage: `url(${item.url})` }"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
    <backTop :scrollContainer="'des-main'" />
    <tabbar />
  </div>
</template>

<script>
import tabbar from "../components/tabbar";
import searchBox from "../components/searchbox";
import backTop from "../components/backtop-des";
import { getDestInfo } from "../api/destination";
export default {
  name: "Destination",
  components: {
    tabbar,
    searchBox,
    backTop,
  },
  data() {
    return {
      sidebarInfo: [
        { id: 1, text: "亚洲" },
        { id: 2, text: "欧洲" },
        { id: 3, text: "非洲" },
        { id: 4, text: "北美" },
        { id: 5, text: "大洋洲" },
        { id: 6, text: "南美" },
        { id: 7, text: "南极洲" },
      ],
      siedebarClickItem: "亚洲",
      displayVar: "block",
      desMainInfo: [],
    };
  },
  methods: {
    changeSideBarStyle(currentItem) {
      this.siedebarClickItem = currentItem.text;
      this.getDestMainInfo(currentItem.id);
    },
    getDestMainInfo(id) {
      getDestInfo(id)
        .then((res) => {
          this.desMainInfo = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getDestMainInfo(1);
  },
};
</script>

<style lang="scss">
.des {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &-header {
    width: 100vw;
    height: 149px;
    background: url("../assets/images/Cover 0.png") no-repeat;
    background-size: cover;
    padding-top: 50px;
    h1 {
      margin-bottom: 17px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
  }
  &-center{
    flex: 1;
    overflow: auto;
  }
  &-sidemenu {
    float: left;
    width: 76px;
    height: 100%;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    text-align: center;
    background-color: #fafafa;
    .select {
      color: #bf2a2f;
      background-color: #fff;
    }
    &-item {
      position: relative;
      height: 40px;
      line-height: 40px;
      color: #000;
      &::before {
        position: absolute;
        display: var(--display);
        content: "";
        left: 0;
        width: 2px;
        height: 40px;
        background-color: #bf2a2f;
      }
    }
  }
  &-main {
    overflow: scroll;
    float: left;
    width: 299px;
    height: 100%;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 50px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 120px;
      height: 68px;
      line-height: 68px;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 1px;
      color: #ffffff;
      text-align: center;
      &:nth-child(2n-1) {
        margin-right: 19px;
      }
      background-color: skyblue;
    }
  }
}
</style>
