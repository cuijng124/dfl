<template>
    <div>
        <header-bar></header-bar>
        <nav-bar></nav-bar>
        <swiper></swiper>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import HeaderBar from "@/components/header.vue";
import NavBar from "@/components/nav.vue";
import Swiper from "@/components/swiper"
import FooterBar from '@/components/footer'
export default {
  name: 'classification',
  components:{
    HeaderBar,
    NavBar,
    Swiper,
    FooterBar
  }
}
</script>