<template>
    <div class="standard">
        <div class="standard_nk">
            <div class="standard_top">
                <div class="standard_topLeft">
                    <img src="@/assets/img/standard.png" alt="">
                </div>
                <img class="titleright1" src="@/assets/img/more.png" alt="">
            </div>
            <div class="standard_bottom">
                <div class="standard_bottomList">
                    <div class="standard_tu">
                        <img src="@/assets/img/luo8_03.png" alt="">
                    </div>
                    <p class="standard_percolator">PERCOLATOR</p>
                    <p class="standard_shuang">双筒管路过滤器</p>
                    <p class="standard_sprice">468.00</p>
                </div>
                <div class="standard_bottomList">
                    <div class="standard_tu">
                        <img src="@/assets/img/luo8_05.png" alt="">
                    </div>
                    <p class="standard_percolator">PERCOLATOR</p>
                    <p class="standard_shuang">双筒管路过滤器</p>
                    <p class="standard_sprice">468.00</p>
                </div>
                <div class="standard_bottomList">
                    <div class="standard_tu">
                        <img src="@/assets/img/luo8_07.png" alt="">
                    </div>
                    <p class="standard_percolator">PERCOLATOR</p>
                    <p class="standard_shuang">双筒管路过滤器</p>
                    <p class="standard_sprice">468.00</p>
                </div>
                <div class="standard_bottomList">
                    <div class="standard_tu">
                        <img src="@/assets/img/luo8_09.png" alt="">
                    </div>
                    <p class="standard_percolator">PERCOLATOR</p>
                    <p class="standard_shuang">双筒管路过滤器</p>
                    <p class="standard_sprice">468.00</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    /*标准件开始*/
    .standard {
        width: 100%;
        height: 735px;
        margin:30px 0 200px
    }
    .standard_nk {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    .standard_top {
        width: 100%;
        height: 223px;
    }
    .standard_topLeft {
        width: 520px;
        height: 100%;
        float: left;
    }
    .standard_topLeft img {
        display: block;
        width: 100%;
    }
    .standard_topRight {
        width: 120px;
        height: 100%;
        float: right;
    }
    .titleright1{
        float: right;
        margin-top: 100px;
    }
    .standard_bottom {
        width: 100%;
        height: 512px;
        display: flex;
        justify-content: space-between;
    }
    .standard_bottomList {
        width: 286px;
        height: 85%;
    }
    .standard_tu {
        width: 280px;
        height: 280px;
        border: 3px solid #D3D3D3;
        transition: 0.4s;
    }
    .standard_tu img {
        display: block;
        width: 100%;
    }
    .standard_percolator {
        text-align: center;
        color: #B8C8D9;
        font-size: 17px;
        margin-top: 13px;
    }
    .standard_shuang {
        text-align: center;
        color: #445567;
        font-size: 23px;
    }
    .standard_sprice {
        text-align: center;
        color: #159BF4;
        font-size: 26px;
    }
    .standard_bottomList:hover .standard_tu {
        border: 3px solid #159BF4;
    }
    .luosi_image {
        width: 100%;
        height: 540px;
    }
    .luosi_image img {
        display: block;
        width: 100%;
    }
</style>