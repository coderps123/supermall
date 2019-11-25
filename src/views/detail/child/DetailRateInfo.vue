<template>
  <div class="rate-info"
       v-if="Object.keys(rateInfo).length != 0">
    <div class="top-div">
      <div>用户评价</div>
      <div>更多</div>
    </div>

    <div v-for="item in rateInfo.list" :key="item.id">
      <div class="user">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>

      <div class="rate">
        <div class="rate-content">{{item.content}}</div>
        <div>
          <span class="Date">{{item.created}}</span>
          <span>{{item.style}}</span>
        </div>
        <span v-for="img in item.images" class="parent-img">
          <img :src="img" alt="" class="rate-img">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRateInfo",
    props: {
      rateInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .rate-info{
    padding: 30px 8px;
    font-size: 18px;
    border-bottom: 5px solid rgba(100, 100, 100, .08);
  }

  .top-div{
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    border-bottom: 3px solid rgba(100, 100, 100, .5);
  }

  .user{
    display: flex;
    align-items: center;
    margin: 20px 0;
  }

  .user img{
    width: 48px;
    border-radius: 50%;
    margin: 0 10px;
  }

  .rate-content{
    font-size: 15px;
    padding-bottom: 10px;
  }

  .parent-img{
    margin-right: 10px;
  }

  .rate-img{
    width: 90px;
    margin-top: 10px;
  }

  .Date{
    margin-right: 15px;
  }
</style>