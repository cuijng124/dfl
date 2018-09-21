<template>
    <header>
        <div class="header">
            <ul>
                <li class="car">
                    <div class="cars">
                        <img src="@/assets/img/car.png" alt="">
                        <i>2</i>
                    </div>
                </li>
                <li class="login"><div><img src="@/assets/img/login.png" alt=""></div>登录</li>
                <li class="order"><div><img src="@/assets/img/order.png" alt=""></div>我的订单</li>
                <li class="line">客户中心<i></i></li>
                <li class="line">帮助中心<i></i></li>
                <li>在线客服</li>
            </ul>
        </div>
    </header>
</template>
<style scoped>
    header{
        width: 100%;
        height: 58px;
        background: #222325;
        color: #ececec;
        text-align: right;
        line-height: 58px
    }
    .header{
        width: 1200px;
        margin: 0 auto;
    }
    .header ul li{
        display: inline;
        font-size: 16px
    }
    header .login,header .order{
        display: inline-block;
        background: #04b1f6;
        padding: 9px;
        border-radius: 3px;
    }
    header .line i{
        display: inline-block;
        width:1px;
        height: 10px;
        background: #878789;
        margin: 0 10px
    }
    .header .car div,
    .header .login div,
    .header .order div {
        display: inline;
        margin-right: 10px;
    }
    .header .car,
    .header .login,
    .header .order {
        margin-right: 20px;
    }
    .header .cars {
        position: relative;
        width: 30px;
    }
    .cars i{
        position: absolute;
        right:-8px;
        top: -14px;
        width: 18px;
        height: 18px;
        background: #ff6b61;
        border-radius: 50%;
        line-height: 18px;
        text-align: center
    }
    img {
        vertical-align: middle;
    }
</style>

