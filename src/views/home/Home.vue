<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <recommend :recommend="recommend"/>
    <feature/>
  </div>
</template>

<script>
  import NavBar from "common/navbar/NavBar";
  import HomeSwiper from "./child/HomeSwiper";
  import Recommend from "./child/Recommend";
  import Feature from "./child/Feature";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banner: {},
        recommend: {}
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      Recommend,
      Feature
    },
    created() {
      // 请求首页更多数据
      this.getHomeMultidata()

      // 请求推荐数据

    },
    methods: {
      /**
       * 网络模块相关代码
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res.data.data);
          this.banner = res.data.data.banner
          this.recommend = res.data.data.recommend
        })
      }
    }
  }
</script>

<style scoped>

</style>