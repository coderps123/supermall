<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length != 0">
    <div class="title">{{baseInfo.title}}</div>
    <div class="price-info">
      <span class="price">{{baseInfo.price}}</span>
      <span class="oldPrice">{{baseInfo.oldPrice}}</span>
      <span class="disc">{{baseInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <div>{{baseInfo.columns[0]}}</div>
      <div>{{baseInfo.columns[1]}}</div>
      <div>{{baseInfo.services[baseInfo.services.length - 1].name}}</div>
    </div>
    <div class="bottom">
<!--      注意 此处item为数字-->
      <div v-for="item in baseInfo.services.length - 1">
        <img v-if="baseInfo.services[item-1].icon" :src="baseInfo.services[item-1].icon" alt="" class="icon">
        {{baseInfo.services[item-1].name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      baseInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    border-bottom: 4px solid #f8f8f8;
  }

  .title{
    margin: 10px 5px;
    font-size: 19px;
  }

  .price{
    color: red;
    font-size: 25px;
    margin: 0 10px 20px;
  }

  .oldPrice{
    text-decoration: line-through;
    margin-right: 6px;
  }

  .disc{
    background-color: red;
    color: #ffffff;
    font-size: 19px;
    border-radius: 25px;
    padding: 5px 8px;
  }

  .columns{
    display: flex;
    justify-content: space-between;
    margin: 15px 7px;
    padding-bottom: 10px;
    border-bottom: 1px solid #C1c1c1;
    font-size: 13px;
  }

  .bottom{
    display: flex;
    justify-content: space-between;
    margin: 10px 7px 20px;
    font-size: 13px;
  }

  .bottom img{
    width: 13px;
  }
</style>