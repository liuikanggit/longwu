<template>
  <div class="home min-width">
    <Title title="服装项目" desc="SERVICE ITEMS"></Title>
    <Title title="关于我们" desc="ABOUT US"></Title>
    <Title title="客户案例" desc="CUSTOMER CASE"></Title>
    <Title title="服务优势" desc="SERVICE ADVANTAGE"></Title>
    <Title title="最新活动" desc="LATEST ACTIVITIES"></Title>
    <Title title="设备展示" desc="EQUIPMENT DISPLAY"></Title>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  components: {
    Title
  }
}
</script>

<style lang="stylus" scoped>
.home
  flex-direction column
</style>
