<template>
    <div class="footer">
        <div class="footer_nk">
            <div class="footer_left">
                <img src="@/assets/img/luo11_05.png" alt="">
            </div>
            <div class="footer_right">
                <div class="footer_rightTop">
                    <div class="footer_rightToplist">
                        <div class="footer_right_text">4</div>
                        <div class="footer_right_right">
                            <p class="footer_qual">QUALITY</p>
                            <p class="footer_qual1">ASSURANCE</p>
                            <p class="pinzhi">品质保证</p>
                        </div>
                    </div>
                    <div class="footer_rightToplist">
                        <div class="footer_right_text">6</div>
                        <div class="footer_right_right">
                            <p class="footer_qual">FREE</p>
                            <p class="footer_qual1">AFTERSALE</p>
                            <p class="pinzhi">无忧售后</p>
                        </div>
                    </div>
                    <div class="footer_rightToplist">
                        <div class="footer_right_text">8</div>
                        <div class="footer_right_right">
                            <p class="footer_qual">PROVIDEHOME</p>
                            <p class="footer_qual1">DELIVERYSERVICE</p>
                            <p class="pinzhi">送货上门</p>
                        </div>
                    </div>
                </div>
                <div class="footer_rightBottom">
                    <div class="footer_rightBottomleft">
                        <p class="footer_adress">公司地址</p>
                        <p class="footer_adressy">COMPANY ADDRESS</p>
                        <p class="footer_adress">联系方式</p>
                        <p class="footer_adressy">CONTACT INFORMATION </p>
                        <p class="footer_adress">客户服务</p>
                        <p class="footer_adressy">CUSTOMER SERVICE</p>
                    </div>
                    <div class="footer_rightBottomright">
                        <p class="pinzhi">山西省晋中市高新开发区</p>
                        <p class="pinzhi">No. nineflakjlflkafjldjaaldfkjlaflalfjkal</p>
                        <p class="footer_shuzi">0351-7777777</p>
                        <div class="footer_server">
                            <div class="footer_server_left">
                                <div class="footer_server_tu">
                                    <img src="@/assets/img/wx_03.png" alt="">
                                </div>
                                <p class="footer_zaixian">在线客服</p>
                            </div>
                            <div class="footer_server_left">
                                <div class="footer_message_tu">
                                    <img src="@/assets/img/message_03.png" alt="">
                                </div>
                                <p class="footer_zaixian">在线客服</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="footer_company">公司简介|帮助中心</p>
        <p class="footer_copy">CopyRight @ 德富勒电商 2015-2017 </p>
    </div>
</template>
<style>
    /*底部开始*/
    .footer {
        width: 100%;
        height: 315px;
        background: #040420;
        /* margin-bottom: 50px; */
        position: relative;
    }
    .footer_nk {
        width: 1200px;
        margin: 0 auto;
        position: absolute;
        top: -240px;
        left: 50%;
        margin-left: -600px;
        height: 400px;
        background: #fff;
        box-shadow: 2px -10px 10px #f8f8f8;
        border-radius: 3px;
    }
    .footer_left {
        width: 257px;
        height: 250px;
        margin-top: 151px;
        float: left;
    }
    .footer_left img {
        display: block;
        width: 100%;
    }
    .footer_right {
        width: 940px;
        height: 100%;
        float: right;
    }
    .footer_rightTop {
        width: 100%;
        height: 152px;
        display: flex;
        justify-content: space-between;
    }
    .footer_rightToplist {
        width: 33%;
        height: 100%;
    }
    .footer_right_text {
        width: 68px;
        float: left;
        height: 100%;
        font-size: 69px;
        color: #445566;
        line-height: 152px;
        text-align: center;
    }
    .footer_right_right {
        width: 240px;
        height: 100%;
        float: right;
    }
    .footer_qual {
        color: #445566;
        font-size: 19px;
        margin-top: 40px;
    }
    .footer_qual {
        color: #445566;
        font-size: 19px;
        font-weight: 400;
    }
    .pinzhi {
        color: #8899AB;
        font-size: 17px;
    }
    .footer_rightBottom {
        width: 100%;
        height: 248px;
    }
    .footer_rightBottomleft {
        width: 260px;
        height: 100%;
        margin-left: 10px;
        float: left;
    }
    .footer_adress {
        font-size: 20px;
        color: #445566;
    }
    .footer_adressy {
        font-size: 14px;
        color: #445566;
        margin-bottom: 10px;
    }
    .footer_rightBottomright {
        width: 660px;
        float: right;
        height: 100%;
    }
    .footer_shuzi {
        color: #30B7FC;
        font-size: 30px;
        margin-top: 10px;
    }
    .footer_server {
        width: 100%;
        height: 80px;
    }
    .footer_server_left {
        width: 60px;
        height: 100%;
        float: left;
    }
    .footer_server_tu {
        width: 45px;
        height: 45px;
        margin-left: 5px;
    }
    .footer_server_tu img {
        display: block;
        width: 100%;
    }
    .footer_message_tu {
        width: 45px;
        height: 45px;
        margin-left: 5px;
    }
    .footer_message_tu img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .footer_zaixian {
        text-align: center;
        font-size: 12px;
        color: #8C9398;
    }
    .footer_company {
        width: 100%;
        text-align: center;
        font-size: 22px;
        color: #fff;
        position: absolute;
        left: 0;
        bottom: 50px;
    }
    .footer_copy {
        width: 100%;
        text-align: center;
        font-size: 15px;
        color: #fff;
        position: absolute;
        left: 0;
        bottom: 20px;
    }
</style>