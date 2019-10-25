<template>
    <div class="wrap">
        <div class="tool" :class="{'closeTool':close}">
            <div class="btn jt" @click="up"><i class="icon fa fa-angle-up" aria-hidden="true"></i></div>
            <div class="btn"><i class="icon qq fa fa-qq" aria-hidden="true"></i>
                <div class="content">
                    qq:307311256
                </div>
            </div>
            <div class="btn dh"><i class="icon fa fa-phone" aria-hidden="true"></i>
                <div class="content">
                咨询热线：010-58222609 
                手机 ：13691106027
                </div>
            </div>
            <div class="btn wx"><i class="icon fa fa-weixin" aria-hidden="true"></i>
                <div class="content">
                    <div class="QR">
                       <img src="@/assets/images/base/weixin.jpg" alt="二维码">
                    </div>
                    微信号:123019398
                </div>
            </div>
            <div class="btn jt" @click="down"><i class="icon fa fa-angle-down" aria-hidden="true"></i></div>
        </div>
        <div class="close" @click="close=!close"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            close:false
        }
    },
    methods: {
        up(){
            
        },
        down(){
        
        }
    },
}
</script>

<style lang="stylus" scoped>
.wrap
    position fixed
    top 50%
    right 0%
    transform translateY(-60%)
    flex-direction column
    align-items center
    .closeTool
        transform translateX(100%)
    .tool
        flex-direction column
        background-color rgba(0,0,0,.6)
        border 1px solid rgba(255,255,255,.3)
        border-radius 10px 0px 0px 10px
        margin-bottom 20px
        transition all 0.7s
        .btn
            width 50px
            height 40px
            margin 5px 0px
            align-items center
            justify-content center
            cursor pointer
            z-index 999
            &:hover>.content
                width 180px
                height 180px
                top -140px
                right 50px
                opacity 1
            .icon
                color #c2c2c2
                &:hover
                    color #959595
        .jt
            font-size 30px
        .dh
            font-size 26px
        .qq
            font-size 20px
        .wx
            font-size 20px
        .content
            position absolute
            top 50%
            right 50%
            transition all 0.4s
            width 0px
            height 0px
            padding 10px
            background-color rgba(0,0,0,.6)
            border-radius 2px
            color #fefefe
            font-size 14px
            z-index 10
            overflow hidden
            opacity 0
            flex-direction column
            align-items center
            justify-content center
            .QR
                width 150px
                height 150px
                padding 10px
    .close
        color rgba(110,110,110,0.8)
        font-size 30px
        cursor pointer
        transition all 1s
        &:hover
            transform rotateZ(180deg)
</style>