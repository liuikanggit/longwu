/** 鼠标悬停动画图片 */
<template>
    <div class="wrap" :style="style">
    </div>
</template>

<script>
export default {
    props:{
        width:{
            type:String,
            default:'100%'
        },
        height:{
            type:String,
            default:'100%'
        },
        src:{
            type:String
        },
        text:{
            type:String
        },
        to:{
            type:String,
            default:'/'
        }
    },
    data(){
        return {
            
        }
    },
    computed:{
        style(){
            return {
                width:this.width,
                height:this.height,
                backgroundImage: this.src
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    background-color #eee
</style>