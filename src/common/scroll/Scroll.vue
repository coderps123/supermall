<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      // scroll 事件 监听滚动位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      // 上拉加载更多
      this.scroll.on('pullingUp', () => {
        this.$emit('loadMore')
      })
    },
    methods: {
      scrollTo(x = 0, y = 0, time = 500) {
        this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .content{
  }
</style>