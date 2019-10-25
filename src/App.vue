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
                    <router-link :class="{'active':routePath == m2.route}" :to="m1.route"> {{m2.name}}</router-link>
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
    <div class="footer min-width">
      <div class="part1">
        <div class="link">
          <div class="col" v-for="m in menu.slice(1,6)" :key="m.id">
            <div class="title">{{m.name}}</div>
            <template v-if="m.subMenu">
                <router-link class="content" v-for="m2 in m.subMenu.slice(0,3)" :key="m2.id" :class="{'active':routePath == m2.route}" :to="m.route"> {{m2.name}}</router-link>
            </template>
          </div>
        </div>
        <div class="conect">
          <div class="QRcode">
              <div class="image"><img src="@/assets/images/base/weixin.jpg" alt="二维码"></div>
              <div class="text">微信扫码关注</div>
          </div>
          <div class="form">
            <div class="col">
              <input class="input" type="text" placeholder="姓名:">
            </div>
            <div class="col">
              <input class="input" type="text" placeholder="电话:">
            </div>
            <div class="col">
              <input class="input" type="text" placeholder="留言:">
              <div class="btn">提交</div>
            </div>
          </div>
        </div>
      </div>
      <div class="part2">
          <div class="info">
            <div class="col">上海龙吾文化传播有限公司</div>
            <div class="col">地址：上海市徐汇区飞雕国际大厦1302室</div>
            <div class="col">手机号/微信：18516241996   QQ：1709734280 邮箱：1709734280@qq.com</div>
          </div>
          <div class="info right">
            <div>copyright ©上海龙吾文化传播有限公司</div>
            <div>沪ICP备18152928号-1</div>
            <div class="col">技术支持：HEO科技有限公司</div>
          </div>
      </div>
    </div>
    <SideTool></SideTool>
  </div>
</template>

<script>
import { mapState } from 'vuex' 
import Swiper from '@/components/Swiper.vue'
import SideTool from '@/components/SideTool.vue'

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
      Swiper,
      SideTool
  },
  created(){
  }
}
</script>


<style lang="stylus" scoped>
#app
  position relative
  background #fff
  flex-direction column
  .header
    height 96px
    display flex
    align-items center
    justify-content space-between
    margin 0 auto
    .logo
      padding 0px 0px 0px 0px
    .menu
      display flex
      height 100%
      align-items center
      flex-grow 1
      justify-content center
      .menu-item:hover>.sub-menu-list
        max-height 1000px !important
      .menu-item:last-child>.menu1
        border-right none
      .menu-item
        height 100%
        cursor pointer
        align-items center
        font-size 15px
        .menu1
          color #070002
          padding 5px 8px
          border-right 1px solid rgba(200,200,180,0.5)
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
            margin-bottom 4px
            padding 5px
            font-size 14px
            text-align center
  .banner
    background #fff
  .footer
    background-color #151515
    flex-direction column
    .part1
      padding 30px 20px
      width 100%
      border-bottom 1px solid rgba(200,200,200,.1)
      .link
        border-right 1px solid rgba(200,200,200,.1)
        flex-grow 1
        padding-right 50px
        justify-content space-between
        .col
          flex-direction column
          width 65px
          .title
            font-size 16px
            color #fff
            font-family inherit
            font-weight 500
            line-height 1.1
            margin-bottom 16px
            cursor pointer
          .content
            font-size 14px
            color #696969
            margin-bottom 16px
            display block
      .conect
        justify-content space-around
        align-items center
        flex-grow 1
        .QRcode
          flex-direction column
          margin 0 28px
          .image
            width 115px
            height 115px
          .text
            font-size 14px
            color #696969
            margin-top 8px
            display block
            text-align center
        .form
          flex-direction column
          flex-grow 1
          .col
            margin-bottom 10px
            .input
              width 100%
              line-height 40px
              border 1px solid #3a3a3a
              color #838384
              padding 0 10px
              background none
            .btn
              position absolute
              right 0
              top 0
              bottom 0
              width 48px
              background #333333
              color #696969
              align-items center
              justify-content center
              cursor pointer
        .col:last-child
          margin-bottom 0px
    .part2
      justify-content space-between
      line-height 25px
      font-size 14px
      color #696969
      padding 30px 20px
      width 100%
      .info
        flex-direction column
        .col
          display block
      .right
        align-items flex-end
</style>
