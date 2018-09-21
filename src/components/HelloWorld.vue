<template>
  <div>
    <header-bar></header-bar>
    <div class="navPosition">
        <nav-bar></nav-bar>
        <sideNavigation></sideNavigation>
    </div>
    <swiper></swiper>
    <hydraulic></hydraulic>
    <standard></standard>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import  HeaderBar  from "@/components/header.vue";
import  NavBar  from "@/components/nav.vue";
import Swiper from "@/components/swiper"
import Hydraulic from '@/components/hydraulic'
import Standard from '@/components/standard'
import FooterBar from '@/components/footer'
import SideNavigation from '@/components/sideNavigation'
export default {
  name: 'HelloWorld',
  components:{
    HeaderBar,
    NavBar,
    Swiper,
    Hydraulic,
    Standard,
    FooterBar,
    SideNavigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navPosition{
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
</style>
