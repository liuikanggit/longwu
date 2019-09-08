<template>
  <div id="app">
    <div class="header min-width">
        <div class="logo">
          <img src="@/assets/images/base/logo.png" alt="">
        </div>
        <div class="menu">
            <div class="menu-item" v-for="m1 in menu" :key="m1.id">
              <router-link class="menu1" :class="{'active':routePath == m1.route}" :to='m1.route'> {{m1.name}}</router-link>
              <div class="sub-menu-list">
                <template v-if="m1.subMenu">
                  <div  v-for="m2 in m1.subMenu.slice(0,8)" :key="m2.id" class="sub-menu-item" >
                    <router-link :class="{'active':routePath == m2.route}" :to="m1.route + '?tab=' + m2.tab"> {{m2.name}}</router-link>
                  </div>
                </template>
              </div>
            </div>
        </div>
    </div>
    <div class="banner min-width">
        <Swiper :images="images"></Swiper>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex' 
import Swiper from '@/components/Swiper.vue'

export default {
  data(){
    return {
      images:[
        [require('@/assets/images/swiper/image1.jpg'),require('@/assets/images/swiper/image1_w.jpg')],
        [require('@/assets/images/swiper/image2.jpg'),require('@/assets/images/swiper/image2_w.jpg')],
        [require('@/assets/images/swiper/image3.jpg'),require('@/assets/images/swiper/image3_w.jpg')],
      ]
    }
  },
  computed:{
    ...mapState(['menu']),
    routePath(){
      return this.$route.path
    }
  },
  components:{
      Swiper
  },
  created(){
  }
}
</script>


<style lang="stylus">
#app
  position relative
  background #fff
  flex-direction column
  .header
    height 96px
    display flex
    align-items center
    justify-content space-between
    .logo
      padding 0px 5px 0px 10px
    .menu
      display flex
      height 100%
      font-size 17px
      margin-right 30px
      align-items center
      .menu-item:hover>.sub-menu-list
        max-height 1000px !important
      .menu-item
        padding 0px 5px
        height 100%
        cursor pointer
        align-items center
        color #333
        .menu1
          color #070002
        :hover
          color #666666
        .active
          color #666666
        .sub-menu-list
          position absolute
          display block
          width 100%
          top 100%
          z-index 999
          overflow hidden
          max-height 0px
          transition all 3s
          .sub-menu-item
            display block
            background #fff
            margin 2px 0px
            padding 5px
            font-size 14px
            text-align center
  .banner
    background #fff
</style>
