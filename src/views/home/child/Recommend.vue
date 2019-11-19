<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend.list"
         :key="index"
         class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommend: Object,
      default: {}
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    font-size: 12px;
    padding: 10px 0 15px;
    border-bottom: 6px solid #F2f2f2;
  }

  .recommend-item{
    flex: 1;
    text-align: center;
  }

  .recommend-item img{
    width: 70px;
    margin-bottom: 10px;
  }
</style>