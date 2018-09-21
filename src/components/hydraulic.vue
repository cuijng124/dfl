<template>
    <div class="hydraulic">
        <div class="hydraulicParts">
            <div class="partsTitle">
                <img src="@/assets/img/luo1.jpg" alt="">
                <img class="titleright" src="@/assets/img/more.png" alt="">
            </div>
            <div class="partsArea">
                <div class="partsFloor1">
                    <div class="partsImg partsImg1"><img src="@/assets/img/luo2.jpg" alt=""></div>
                    <div class="partsImg partsImg2">
                        <img src="@/assets/img/luo3.jpg" alt="">
                        <div class="colorBlock"></div>
                    </div>
                </div>
                <div>
                    <div class="partsImg partsImg3"><img src="@/assets/img/luo5_07.png" alt=""></div>
                    <div class="partsImg partsImg4"><img src="@/assets/img/luo2.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <div class="banner">
            <a href=""><img src="@/assets/img/luo5.jpg" alt=""></a>
            <a href=""><img src="@/assets/img/luo6.jpg" alt=""></a>
            <a href=""><img src="@/assets/img/luo7.jpg" alt=""></a>
        </div>
    </div>
</template>
<style scoped>
    .hydraulic{
        width: 100%;
        overflow: hidden;
    }
    /* 液压件 */
    .hydraulicParts{
        width: 1200px;
        margin:66px auto 90px;
        overflow: hidden;
    }
    .partsTitle{
        margin-bottom:58px
    }
    .hydraulicParts .titleLeft img {
        display: inline-block;
    }
    .titleright{
        float: right;
        margin-top: 44px;
    }
    .partsFloor1{
        margin-bottom:50px;
        overflow: hidden;
    }
    .partsImg{
        display: inline-block;
        float: left;
        box-sizing: border-box;
        border: 3px solid #ffffff;
    }
    .partsImg img{
        display: block;
        width: 100%;
    }
    .partsImg:hover {
        border: 3px solid #159bf4;
        border-radius: 3px;
    }
    .partsImg2{
        position: relative;
    }
    .colorBlock{
        position: absolute;
        width: 6px;
        height: 40px;
        background: #159bf4;
        top:28px;
        right: 0
    }
    .partsImg1,
    .partsImg3 {
        margin-right: 50px
    }
    .partsImg1,
    .partsImg4 {
        width: 400px;
        height: 400px;
        overflow: hidden;
    }
    .partsImg2,
    .partsImg3 {
        width: 746px;
        height: 400px;
        overflow: hidden;
    }
    /* 液压件 */
    /* banner */
    .banner{
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-wrap: nowrap
    }
    .banner img{
        display:block;
        border:0;
    }
    /* banner */
</style>