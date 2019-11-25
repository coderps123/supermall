<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']"
                 @itemClick="itemClick"
                 v-show="isShowTabControl"
                 class="tab-control1" ref="tabControl1"/>
    <scroll class="wrapper"
            @scroll="scroll"
            ref="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @loadMore="loadMore">
      <home-swiper :banner="banner"/>
      <recommend :recommend="recommend"/>
      <feature/>
      <tab-control :title="['流行','新款','精选']"
                   @itemClick="itemClick"
                   ref="tabControl2"/>
      <goods :list="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "common/navbar/NavBar";
  import Scroll from "common/scroll/Scroll";

  import HomeSwiper from "./child/HomeSwiper";
  import Recommend from "./child/Recommend";
  import Feature from "./child/Feature";
  import TabControl from "components/content/tabcontrol/TabControl";
  import Goods from "components/content/goods/Goods";
  import BackTop from "components/common/backtop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banner: {},
        recommend: {},
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        isShowTabControl: false,
        y: 0
      }
    },
    components: {
      NavBar,
      Scroll,
      HomeSwiper,
      Recommend,
      Feature,
      TabControl,
      Goods,
      BackTop
    },
    created() {
      // 请求首页更多数据
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {
      // 接受 bus 发射来的事件
      this.$bus.$on('imageLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      itemClick(index) {
        switch (index) {
          case 0: this.currentType = "pop";
            break;
          case 1: this.currentType = "new";
            break;
          case 2: this.currentType = "sell";
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backTop() {
        this.$refs.scroll.scrollTo()
      },
      scroll(position) {
        this.isShowBackTop = (-position.y) > 1000
        // console.log(this.$refs.tabControl.$el.offsetTop);
        // 获取组件的高度，要获取 $el ：组件内元素的高度
        this.isShowTabControl = (-position.y) > this.$refs.tabControl2.$el.offsetTop + 44
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.finishPullUp()
      },

      /**
       * 网络模块相关代码
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res.data.data);
          this.banner = res.data.data.banner
          this.recommend = res.data.data.recommend
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          const data = res.data.data
          this.goods[type].page = page
          this.goods[type].list.push(...data.list)
          // console.log(data);
        })
      }
    },
    // 激活
    activated() {
      // 此处需要重新刷新
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.y, 0)
    },
    // 解散
    deactivated() {
      // 在离开时记录 home scroll滚动的位置
      this.y = this.$refs.scroll.scroll.y
    }

  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
    padding-top: 44px;
  }

  .nav-bar{
    color: #ffffff;
  }

  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 47px;
    right: 0;
    left: 0;
    overflow: hidden;
  }

  .tab-control1{
    position: fixed;
  }
</style>