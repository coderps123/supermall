<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length != 0">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" alt="" class="logo">
      {{shopInfo.name}}
    </div>

    <div class="score">
      <div class="left">
        <div class="left-lt">
          <div class="lt-top number">{{shopInfo.cSells | showSells}}</div>
          <div class="lt-bottom text">总销量</div>
        </div>
        <div class="left-rt">
          <div class="rt-top number">{{shopInfo.cGoods}}</div>
          <div class="rt-bottom text">全部宝贝</div>
        </div>
      </div>

      <div class="right">
        <table>
          <tr v-for="item in shopInfo.score">
            <td>{{item.name}}</td>
            <td class="shoe-score" :class="{showBetter: item.isBetter}">{{item.score}}</td>
            <td><p class="show" :class="{isBetter: item.isBetter}">{{item.isBetter ? '高' : '低'}}</p></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="bottom">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      // isActive() {
      //   // return this.item.isBetter
      // }
    },
    filters: {
      showSells(value) {
        return (value / 10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    border-bottom: 4px solid #f6f6f6;
  }

  .shop-logo{
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-left: 15px;
  }

  .logo{
    width: 50px;
    border-radius: 50%;
    border: 2px solid #666666;
    margin: 25px 7px;
  }

  .score{
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  .left{
    width: 50%;
    display: flex;
    text-align: center;
    border-right: 1px solid #666666;
  }

  .right{
    width: 50%;
  }

  table{
    margin: 0 auto;
    width: 80%;
  }

  td{
    padding: 5px 0;
  }

  .left-lt, .left-rt{
    flex: 1;
  }

  .number{
    font-size: 26px;
  }

  .text{
    margin-top: 4px;
    font-size: 17px;
  }

  .shoe-score{
    color: green;
  }

  .showBetter{
    color: red;
  }

  .show{
    background-color: green;
    color: #ffffff;
  }

  .isBetter{
    background-color: red;
  }

  .bottom{
    width: 40%;
    padding: 5px;
    border-radius: 10px;
    background-color: #c1c1c1;
    color: #000;
    text-align: center;
    margin: 10px auto 25px;
  }
</style>