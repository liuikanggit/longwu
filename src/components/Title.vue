<template>
    <div class="wrap">
        <div class="title" :style="{'backgroundImage':bg}">{{title}}</div>
        <div class="desc">{{desc}}</div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'标题'
        },
        desc:{
            type:String,
            default:'content'
        }
    },
    data(){
        return {
            bg:'url('+require('@/assets/images/base/bei.jpg')+')'
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    flex-direction column
    align-items center
    width 100%
    padding 5px 0px
    min-width 250px
    .title
        display block
        font-size 25px
        color #070002
        background no-repeat center 55%
        width 100%
        text-align center
    .desc
        font-size 15px
        font-family arial
        color #acacac
        letter-spacing 8px
        display block
        margin-top 5px
        width 100%
        text-align center
</style>