<template>
    <swiper :options="swiperOption"  ref="mySwiper" style="height: 475px;overflow: hidden;background: #000">
		  <swiper-slide v-for="slide in sliders" :key = "slide.id">
		  	<a :href="slide.url" target="_blank"><img src="@/assets/img/luosi_03.jpg"></a>
		  </swiper-slide>
		  <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
export default {
		data () {
			return {
				swiperOption: {
					// notNextTick:false,
					initialSlide: 1,
					autoplay: 5000,
					loop: true,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					observeParents: true
				},
				sliders:[
					{
						"id":0,
						// "img": "dfl/src/assets/img/luosi_03.jpg",
						"url": "www.baidu.com"
					},
					{
						"id":1,
						// "img": "@/assets/img/luosi_03.jpg",
						"url": "www.baidu.com"
					},
					{
						"id":2,
						// "img": "",
						"url": "www.baidu.com"
					}
				]
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        } 
		
	}
</script>