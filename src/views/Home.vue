<template>
  <div class="home center-container">
    <Title title="服装项目" desc="SERVICE ITEMS"></Title>

    <div class="serviecMenu">
        <div class="row"><LaceButton v-for="s in service.subMenu.slice(0,6)" :key="s.id" :to="service.route">{{s.name}}</LaceButton></div>
        <div class="row"><LaceButton v-for="s in service.subMenu.slice(6,12)" :key="s.id" :to="service.route">{{s.name}}</LaceButton></div>
    </div>
    <div><Dpicture :src="src"></Dpicture></div>

    <More to="/service"></More>
    <Title title="关于我们" desc="ABOUT US"></Title>
    <Title title="客户案例" desc="CUSTOMER CASE"></Title>
    <Title title="服务优势" desc="SERVICE ADVANTAGE"></Title>
    <Title title="最新活动" desc="LATEST ACTIVITIES"></Title>
    <Title title="设备展示" desc="EQUIPMENT DISPLAY"></Title>
  </div>
</template>

<script>
import { mapState } from 'vuex' 
import Title from '@/components/Title.vue'
import More from '@/components/More.vue'
import LaceButton from '@/components/LaceButton'
import Dpicture from '@/components/Dpicture'

export default {
  computed:{
     ...mapState(['menu']),
     service(){
       return this.menu[2]
     }
  },
  data(){
    return {
      
    }
  },
  components: {
    Title,
    More,
    LaceButton,
    Dpicture
  }
}
</script>

<style lang="stylus" scoped>
.home
  flex-direction column
  .serviecMenu
      flex-direction column
      height 60px
      justify-content space-around
      margin 40px 0px
      .row
        align-items center
        justify-content space-around
        margin 12px 0
</style>
