<template>
  <div id="detail">
    <detail-nav-bar/>
    <back-top @click.native="backTop" v-if="isShowBackTop"/>

    <scroll class="wrapper" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swiper :images="images"/>
      <detail-base-info :baseInfo="baseInfo"/>
      <detail-shop-info :shopInfo="shopInfo"/>
      <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-params :itemParams="itemParams" ref="params"/>
      <detail-rate-info :rateInfo="rateInfo" ref="rate"/>
      <goods :list="recommendData" class="goods" ref="recommend"/>
    </scroll>

  </div>
</template>

<script>
  import DetailNavBar from "./child/DetailNavBar";
  import BackTop from "components/common/backtop/BackTop";
  import Scroll from "common/scroll/Scroll";

  import DetailSwiper from "./child/DetailSwiper";
  import DetailBaseInfo from "./child/DetailBaseInfo";
  import DetailShopInfo from "./child/DetailShopInfo";
  import DetailInfo from "./child/DetailInfo";
  import DetailParams from "./child/DetailParams";
  import DetailRateInfo from "./child/DetailRateInfo";
  import Goods from "components/content/goods/Goods";

  import {getDetailData, baseInfo, getRecommend} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        images: [],
        baseInfo: {},
        shopInfo: {},
        detailInfo: {},
        itemParams: {},
        rateInfo: {},
        recommendData: [],
        isShowBackTop: false
      }
    },
    components: {
      DetailNavBar,
      BackTop,
      Scroll,

      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailInfo,
      DetailParams,
      DetailRateInfo,
      Goods
    },
    created() {
      // 1.保存iid
      this.iid = this.$route.params.iid

      // 2.获取detail数据
      getDetailData(this.iid).then(res => {
        const result = res.data.result
        console.log(result);

        // 2.1 获取轮播图数据
        this.images = res.data.result.itemInfo.topImages

        // 2.2 获取 baseInfo 数据
        this.baseInfo = new baseInfo(result.columns, result.itemInfo, result.shopInfo)

        // 2.3 获取shopInfo 数据
        this.shopInfo = result.shopInfo

        // 2.4 获取 detailInfo 数据
        this.detailInfo = result.detailInfo

        // 2.5 获取 itemParams 数据
        this.itemParams = result.itemParams
        // console.log(this.itemParams);

        // 2.6 获取 用户 user 数据
        this.rateInfo = result.rate
        // console.log(this.rateInfo);

        // 3. 获取推荐商品数据
        getRecommend().then(res => {
          this.recommendData = res.data.data.list
          // console.log(this.recommendData);
        })

      })
    },
    methods: {
      backTop() {
        this.$refs.scroll.scrollTo()
      },
      imageLoad() {
        this.$refs.scroll.refresh()
      },
      scroll(position) {
        this.isShowBackTop = -position.y > 1000
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    height: 100vh;
  }

  .wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

  .goods{
    margin-top: 35px;
  }
</style>