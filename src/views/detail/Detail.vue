<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :images="images"/>
    <detail-base-info :baseInfo="baseInfo"/>
  </div>
</template>

<script>
  import DetailNavBar from "./child/DetailNavBar";
  import DetailSwiper from "./child/DetailSwiper";
  import DetailBaseInfo from "./child/DetailBaseInfo";

  import {getDetailData, baseInfo} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        images: [],
        baseInfo: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
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
        console.log(this.baseInfo);
      })
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>