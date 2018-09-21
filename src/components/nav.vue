<template>
    <nav>
        <div class="navArea">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="company">
                <h1>德富勒备件城</h1>
                <h3>你的库存第二保障</h3>
            </div>
            <div class="nav">
                <div class="navtab" v-for="(navtabC,index) in navtab"  @mouseenter="enter(index)" @mouseleave="leave()">
                    <a href="" class="">{{navtabC.title}}</a>
                    <div class="navbox" v-show="is_active&&index==current">
                        <div class="navmenu">
                            <div class="conlist">
                                <div class="conlist_tu">
                                    <img src="" alt="">
                                </div>
                                <p class="conlist_shuang">{{navtab[index].navmenu.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="search">
                <input type="text" placeholder="搜一下你想要的.....">
                <div class="searchBtn"></div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data (){
        return {
            is_active : false,
            current :0,
            navtab:[
                {
                    "title":"首页",
                    "navmenu":{
                        "name":"双筒管路过滤器11111"
                    }
                },
                {
                    "title":"公司简介",
                    "navmenu":{
                        "name":null
                    }
                },
                {
                    "title":"液压件",
                    "navmenu":{
                        "name":"双筒管路过滤器3333"
                    }
                },
                {
                    "title":"黑色金属",
                    "navmenu":{
                        "name":"双筒管路过滤器4444"
                    }
                },
                {
                    "title":"贵重金属",
                    "navmenu":{
                        "name":"双筒管路过滤器55555"
                    }
                },
                {
                    "title":"五金工具",
                    "navmenu":{
                        "name":"双筒管路过滤器6666"
                    }
                },
                {
                    "title":"进口产品",
                    "navmenu":{
                        "name":"双筒管路过滤器7777"
                    }
                },
                {
                    "title":"化工产品",
                    "navmenu":{
                        "name":"双筒管路过滤器8888"
                    }
                },
                {
                    "title":"电器件",
                    "navmenu":{
                        "name":"双筒管路过滤器9999"
                    }
                },
            ]
        }
    },
    methods:{
        enter(index) {
            this.is_active = true;
            this.current = index;
        },
        leave (){
            this.is_active = false;
            this.current = null
        }
    }
}
</script>


 <style scoped>

/*导航*/
.navArea {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
}
.nav{
    width: 900px;
    height: 100px;
    position: relative;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
.navArea .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*background: red;*/
    margin-top: 25px;
    margin-right: 13px
}

.company{
    width: 160px;
    margin-right:60px 
}
.company h1 {
    font-size: 24px;
    color: #384754;
    margin:0px;
    margin-top:14px;
}
.company h3 {
    font-size: 18px;
    color: #8899ab;
    margin:0;
}
.navtab {
    font-size: 18px;
    color: #6d8091;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 100px;
    
}
.navLine{
    position: absolute;
    top: 64px;
}
.firseLine{
    width: 34px;
    height: 2px;
    background: #30b7fc;
}
.secoundLine {
    width: 68px;
    height: 2px;
    background: #021019;
}
.navbox{
    width: 980px;
    position: absolute;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    left: 0;
    top: 100px;
    z-index: 999;
    /*overflow: hidden;*/
    min-height: 120px;
    /* display: none; */
}
.navmenu.active{
    display: block;
}
.navmenu{
    width: 100%;
    height: 90px;
}
.conlist{
    width: 100px;
    height: 90px;
    margin: 5px 10px;
    float: left;
}
.conlist_tu{
    width:55px;
    height: 55px; 
    background: #3A3E43;
    margin-left: 23px;
}
.conlist_shuang{
    color: #3A3E43;
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
}

.navtab a{
    color: #6D8091;
}
/* 头部 */
/* 搜索 */
.search{
    position: absolute;
    top: 110px;
    right: 0;
    z-index: 111;
    border: none;
    width: 310px;
    height: 54px;
    line-height: 54px;
    background: url(../assets/img/search.png) no-repeat;
    background-size:310px 54px ;
}
.search input{
    border: none;
    width: 230px;
    height: 42px;
    padding-left: 10px;
    margin-left: 10px;
    display: inline-block;
}
.searchBtn{
    width: 54px;
    height: 44px;
    float: right;
    position: absolute;
    top: 4px;
    right: 0;
    cursor: pointer;
}
/* 搜索 */

 </style>
 