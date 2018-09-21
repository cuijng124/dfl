var ajaxUrl = "http://39.107.114.231:8080/fsheng-afterend/";
// var ajaxUrl = "http://192.168.100.112:8081/";
var postAjax = function (url, dataString, callback) {
    $.ajax({
        type: "POST",
        url: ajaxUrl + url,
        data: dataString,
        success: function (data) {
            data = typeof (data) == "string" ? JSON.parse(data) : data;
            if (data.code == '200') {
                callback(data);
            } else {
                confirm(data.msg)
            }
        },
        error: function (err) {
            confirm(err)
        }
    });
};
var getAjax = function (url, dataString, callback) {
    $.ajax({
        type: "GET",
        url: ajaxUrl + url,
        data: dataString,
        success: function (data) {
            data = typeof (data) == "string" ? JSON.parse(data) : data;
            if (data.code == '200') {
                callback(data);
            } else {
                confirm(data.msg)
            }
        },
        error: function (err) {
            confirm(err)
        }
    });
};
var oldlocalStorages = {};
var localStoragestest;
try {
    localStorage.setItem("localtest", "ok");
    localStoragestest = true;
} catch (e) {
    localStoragestest = false;
}
var localStorages = {};
oldlocalStorages.setItem = window.localStorage.setItem;
oldlocalStorages.getItem = window.localStorage.getItem;
oldlocalStorages.removeItem = window.localStorage.removeItem;
localStorages.setItem = function (key, value) {
    if (localStoragestest) { //如果 支持localStorages
        oldlocalStorages.setItem.call(localStorage, key, value);
    } else { //否则 使用cookie
        var time = arguments.length > 2 ? arguments[2] : 7;
        setCookie(key, value, time);
    }
}
localStorages.getItem = function (key) {
    if (localStoragestest) { //如果 支持localStorages
        return oldlocalStorages.getItem.call(localStorage, key)
    } else { //否则 使用cookie
        return getCookie(key);
    }
}
localStorages.removeItem = function (key) {
    if (localStoragestest) { //如果 支持localStorages
        oldlocalStorages.removeItem.call(localStorage, key)
    } else { //否则 使用cookie
        delCookie(key);
    }
}
//cookie操作
function getCookie(name) { //获取cookie
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function setCookie(key, value, expiredays) { //设置cookie  encodeURIComponent
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = key + "=" + escape(value) +
        ((expiredays == null) ? ";path=/" : "; expires=" + exdate.toGMTString() + ";path=/");
}

function delCookie(name) { //删除cookie
    setCookie(name, "ikan", -1);
}
// 时间转换
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}


