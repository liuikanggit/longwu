<template>
    <div class="wrap">
        <router-link class="btn" :to="to">
            MORE <img class="icon" src="@/assets/images/base/jt.png" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        to:{
            type:String,
            required:true
        }
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    .btn
        color #fff
        width 180px
        font-size 14px
        line-height 40px
        height 40px
        display block
        letter-spacing 15px
        margin 10px auto 0 auto
        background-color #000
        padding-left 30px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        text-transform uppercase
        cursor pointer
        font-family "微软雅黑"
    :hover
        background-color rgba(0,0,0,0.2)
    .icon
        width 16px
        height 6px
</style>