<template>
  <div class="tab-control">
    <div v-for="(item, index) in title"
         class="control-item"
         :key="item.id"
         :class="{isActive: currentIndex === index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    /*!*设置吸顶效果*!*/
    /*position: sticky;*/
    top: 44px;
    z-index: 9;

    padding: 10px 0;
    background-color: #fff;
    width: 100%;
  }

  .control-item{
    flex: 1;
  }

  .control-item span{
    padding: 5px;
  }

  .isActive{
    color: #ff8198;
  }

  .isActive span{
    border-bottom: 4px solid #ff8198;
  }
</style>