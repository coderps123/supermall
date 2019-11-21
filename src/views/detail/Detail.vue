<template>
  <div id="detail">
  </div>
</template>

<script>
  import {getDetailData} from "network/detail";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null
      }
    },
    created() {
      // 1.保存iid
      this.iid = this.$route.params.iid
      this.getDetailData(this.iid)
    },
    methods: {
      getDetailData(iid) {
        getDetailData(iid).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>