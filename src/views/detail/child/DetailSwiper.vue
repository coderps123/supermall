<template>
  <div class="detail-swiper" v-if="images.length != 0">
    <swiper>
      <swiper-item v-for="item in images">
        <img :src="item" alt="" class="top-images">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  #hy-swiper{
    height: 245px;
    overflow: hidden;
  }

</style>