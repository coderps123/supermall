<template>
  <div class="params" v-if="Object.keys(itemParams).length != 0">
    <table class="table_1 table">
      <caption class="cap_1">{{itemParams.info.key}}</caption>
      <tr v-for="(item, index) in itemParams.info.set" :keys="item.id">
        <td>{{item.key}}</td>
        <td class="red-td">{{item.value}}</td>
      </tr>
    </table>

    <table class="table_2 table" v-for="(item, index) in itemParams.rule.tables" :key="item.id">
      <caption class="cap_2">{{itemParams.rule.key}}</caption>
      <tr v-for="tr in item" :key="tr.id">
        <td v-for="td in tr" :key="td.id">
          {{td}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      itemParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params{
    padding: 10px 0 45px 0;
    border-top: 4px solid rgba(100, 100, 100, .08);
    border-bottom: 4px solid rgba(100, 100, 100, 0.08);
  }

  .cap_1, .cap_2{
    border-bottom: 2px solid #f6f6f6;
    padding: 10px 0;
  }

  .cap_2{
    padding-top: 35px;
  }

  .table{
    width: 100%;

    /*设置表格边框是否合并*/
    border-collapse: collapse;
  }

  .table_1 tr td{
    padding: 15px 0 15px 15px;
    border-bottom: 2px solid #f6f6f6;
    width: 1px;
  }

  .table_2 tr td{
    padding: 10px 0;
    text-align: center;
    border-bottom: 2px solid #f6f6f6;
  }

  .red-td{
    color: #f36f6f;
  }
</style>