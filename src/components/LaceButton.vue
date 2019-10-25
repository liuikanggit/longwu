/** 花边按钮 **/
<template>
    <div class="wrap">
        <router-link :to="to">
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        to:{
            type:String,
            default:"/"
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    width 124px
    line-height 36px
    height 36px
    color #070002
    font-size 18px
    text-align center
    align-items center
    justify-content center
    cursor pointer
    &:hover
        border-top 1px solid rgba(100,103,120,0.3)
        border-bottom 1px solid rgba(100,103,120,0.3)
    &:hover:after,&:hover:before
        content:''
        display block
        width 6px
        height 6px
        background #999
        border-radius 50%
        margin 8px
</style>