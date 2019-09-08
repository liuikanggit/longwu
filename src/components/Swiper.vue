<template>
    <div class="swiper">
        <div class="wrap" :style="{'width':images.length + '00%','transform':'translate(-'+(100 / images.length * index)+'%)'}">
            <div v-for="(img,i) in images" :key="i" class="image" :style="{'width':(100 / images.length) + '00%'}" >
                <img :src="img[1]" alt="" style="width:100%;height:100%">
            </div>
        </div>
        <div class="control" >
            <div class="spot" v-for="(img,i) in images" :key="i" :class="{'active':index == i}" @click="change(i)"></div>
        </div>
    </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from 'timers';

export default {
    props:{
        images:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            index:0
        }
    },
    methods:{
        start(){
            this.t = setInterval(()=>{
                this.index = (this.index + 1) % this.images.length
            },4000)
        },
        stop(){
            this.t && clearInterval(this.t)
        },
        change(i){
            this.stop()
            this.index = i
            this.start()
        }
    },
    created(){
        this.start()
    }
}
</script>

<style lang="stylus" scope>
.swiper
    display block
    width 100%
    overflow hidden
    .wrap
        transition all 1s
    .control
        position absolute
        bottom 15px
        align-items center
        width 100%
        justify-content center
        .spot
            width 12px
            height 12px
            margin 10px
            background-color rgba(200,200,200,.5)
            border-radius 50%
        .active
            background #000
</style>