!(function (g) {
    var pageDiv = function (nowNum, option, callback) {
        this.option = {
            perNum: 5,
            totalNum: 20,
            parent: "body",
            activePage: nowNum ? nowNum : 1,
            nowFirstNum: 0,
            reload: true,
            classNames: {
                ul: "a-",
                prePage: "c-",
                ellipsisPre: "d-",
                ellipsis: "e-",
                nextPage: "f-",
                pageNumber: "h-"
            }
        };
        this.callback = callback;
        this.extend(this.option, option);
        this.fixClassName();
        this.initPageNum();
        this.createDom();
        this.initEvent();
    };

    pageDiv.prototype = {
        getStyle: function (obj, attr) {    //获取非行间样式，obj是对象，attr是值
            if (obj.currentStyle) {   //针对ie获取非行间样式
                return obj.currentStyle[attr];
            } else {
                return getComputedStyle(obj, false)[attr];   //针对非ie
            }
        },
        dataset: function (ele, name, val) {
            this.canDataset = document.querySelector('body').dataset;
            switch (arguments.length) {
                case 2:
                    return this.canDataset ? ele.dataset[name] : ele['data-' + name];
                    break;
                case 3:
                    return this.canDataset ? ele.dataset[name] = val : ele['data-' + name] = val;
                    break;
                default:
                    return;
            }
        },
        fixClassName: function () {
            window.pageDivObjNum = window.pageDivObjNum ? ++window.pageDivObjNum : 1;
            this.pageDivObjNum = window.pageDivObjNum;
            for (var i in this.option.classNames) {
                this.option.classNames[i] = this.option.classNames[i] + this.pageDivObjNum;
            }
        },
        initPageNum: function () {
            if (this.option.reload) {
                var data = JSON.parse(sessionStorage.getItem('page' + this.pageDivObjNum));
                if (data) {
                    this.option.activePage = data.pageNum;
                    this.option.nowFirstNum = data.nowFirstNum;
                }
            }
            if (this.option.nowFirstNum == 0) {
                this.option.nowFirstNum = this.option.activePage > this.option.totalNum - this.option.perNum ? this.option.totalNum - this.option.perNum + 1 : this.option.activePage;
            }
        },
        extend: function (target, obj) {
            for (var i in obj) {
                target[i] = obj[i];
            }
        },
        hasClass: function (obj, cla) {
            var re = new RegExp("(^|\\s)" + cla + "(\\s|$)");
            return re.test(obj.className);
        },
        addClass: function (obj, cla) {
            if (this.hasClass(obj, cla)) {
                return;
            }

            var newclass = obj.className.split(' ');
            newclass.push(cla);
            obj.className = newclass.join(' ');
        },
        removeClass: function (obj, cla) {
            if (!this.hasClass(obj, cla)) {
                return;
            }
            var re = new RegExp("(^|\\s)" + cla + "(\\s|$)", 'g');
            obj.className = obj.className.replace(re, ' ');
        },
        initEvent: function () {
            var _this = this;
            var addEvent = function (eventType) {
                document.body.addEventListener(eventType, _this, false);
            };
            addEvent("click");
        },
        findTarget: function (e) {
            var thisTarget = e.target;
            while (thisTarget.parentNode && !this.hasClass(thisTarget.parentNode, "pageBtnWrap")) {
                thisTarget = thisTarget.parentNode;
            }
            if (thisTarget.parentNode) return thisTarget;
            else return false;
        },
        createDom: function () {
            this.wrap = document.querySelector(this.option.parent);
            this.ul = document.createElement('ul');
            this.ul.className = this.option.classNames.ul + ' pageBtnWrap';
            this.wrap.appendChild(this.ul);
            this.refreshDom();
            if (!document.getElementById('pageDivCss')) {
                var style = document.createElement('style');
                style.id = 'pageDivCss';
                style.innerHTML = '.pageBtnWrap{border-radius: 4px;text-align:center;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;} .pageBtnWrap>li{display:inline;padding: 0;margin: 0;list-style: none;border: 0;text-decoration: none;} .pageBtnWrap .lastBgEEE>a{display:inline-block;width: 76px;height: 26px;border: 1px solid #9d9d9d;border-radius: 20px;text-align: center;color: #7d7d7d;background:#fbfbfb;margin:0 10px} .pageBtnWrap>li>a{box-sizing: border-box;display:inline-block;width: 26px;height: 26px;border: 1px solid #9d9d9d;border-radius:50%;text-align: center;color: #7d7d7d;background:#fbfbfb;margin:0 6px}    .pageBtnWrap>li>a:hover{background:#159bf4;color:#fff }.pageBtnWrap>.active{position: relative;} .pageBtnWrap>.active>a,.pageBtnWrap>.active>a:hover{z-index: 3;color: #fff;cursor: default;background-color: #159bf4;border-color: #fff;}  .lastBgEEE>a{cursor: default !important;background-color: #eee !important;} .pageBtnWrap>.' + this.option.classNames.ellipsisPre + '>a:hover,.pageBtnWrap>.' + this.option.classNames.ellipsis + '>a:hover{cursor:default;background-color:#fff} .' + this.option.classNames.pageNumber + '>a{width:40px;box-sizing:border-box;}';
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        },
        refreshDom: function () {
            if (this.option.activePage == 1) {
                this.option.nowFirstNum = 1;
            }
            var listNum = 0;
            this.ul.innerHTML = '';
            var html = '';
            var i = this.option.nowFirstNum;
            if (i > this.option.totalNum - this.option.totalNum % this.option.perNum) {
                i = this.option.totalNum - this.option.perNum + 1
            }
            if (i <= 0) {
                i = 1;
            }
            html += '<li class="' + this.option.classNames.prePage + '"><a href="javascript:void(0)" ><span>PREV</span></a></li>';
            html += '<li class="' + this.option.classNames.ellipsisPre + '" style="display: none"><a href="javascript:void(0)">...</a></li>';
            for (var l = i + this.option.perNum; i < l; i++) {
                if (i > this.option.totalNum) break;
                listNum++;
                html += '<li data-page="' + i + '" class="' + this.option.classNames.pageNumber + '"><a href="javascript:void(0)">' + i + '</a></li>'
            }
            if (listNum >= this.option.perNum) {
                this.option.nowFirstNum = i - this.option.perNum;
            }
            html += '<li class="' + this.option.classNames.ellipsis + '" style="display: none"><a href="javascript:void(0)">...</a></li>';
            html += '<li class="' + this.option.classNames.nextPage + '"><a href="javascript:void(0)" ><span>NEXT</span></a></li>';
            this.ul.innerHTML = html;
            this.active(listNum);
        },
        active: function (listNum) {
            if (listNum < this.option.perNum) {
                this.option.nowFirstNum = this.option.nowFirstNum - (this.option.perNum - listNum);
                if (this.option.nowFirstNum <= 0) {
                    this.option.nowFirstNum = 1;
                } else {
                    return this.refreshDom();
                }
            }
            if (this.option.nowFirstNum == 1) {
                this.changeStyle(this.option.classNames.prePage, 'lastBgEEE');
                this.hide(document.querySelector('.' + this.option.classNames.ellipsisPre));
            } else {
                this.delStyle(this.option.classNames.prePage, 'lastBgEEE');
                this.show(document.querySelector('.' + this.option.classNames.ellipsisPre));
            }
            if (this.option.nowFirstNum == this.option.totalNum - this.option.perNum + 1) {
                this.hide(document.querySelector('.' + this.option.classNames.ellipsis));
                this.changeStyle(this.option.classNames.nextPage, 'lastBgEEE');
            } else {
                this.delStyle(this.option.classNames.nextPage, 'lastBgEEE');
                this.show(document.querySelector('.' + this.option.classNames.ellipsis));
            }
            var arr = document.getElementsByClassName(this.option.classNames.pageNumber);
            if (this.canDataset) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    if (this.dataset(arr[i], 'page') == this.option.activePage) {
                        this.addClass(arr[i], 'active');
                    }
                }
            } else {
                for (var i = 0, l = arr.length; i < l; i++) {
                    if (arr[i].innerText == this.option.activePage) {
                        this.addClass(arr[i], 'active');
                    }
                }
            }
            if (this.option.perNum >= this.option.totalNum) {
                this.hide(document.querySelector('.' + this.option.classNames.ellipsisPre));
                this.changeStyle(this.option.classNames.prePage, 'lastBgEEE');
                this.changeStyle(this.option.classNames.nextPage, 'lastBgEEE');
                this.hide(document.querySelector('.' + this.option.classNames.ellipsis));
            }
        },
        show: function (obj) {
            if (!this.dataset(obj, 'display')) {
                this.dataset(obj, 'display', this.getStyle(this.wrap.getElementsByTagName('li')[0], 'display'));
            }
            obj.style.display = this.dataset(obj, 'display')
        },
        hide: function (obj) {

            if (obj.style.display != 'none') {
                this.dataset(obj, 'display', obj.style.display);
            }
            obj.style.display = 'none';
        },
        changeStyle: function (cla, actCla) {
            this.addClass(document.querySelector('.' + cla), actCla);
        },
        delStyle: function (cla, actCla) {
            this.removeClass(document.querySelector('.' + cla), actCla);
        },
        changePage: function (num, bool) {
            if (this.option.reload) {
                sessionStorage.setItem('page' + this.pageDivObjNum, JSON.stringify({
                    pageNum: num,
                    nowFirstNum: this.option.nowFirstNum
                }));
            }
            // if (this.option.activePage != num) {
            if (this.callback && typeof this.callback == 'function') this.callback(num);
            // }
            this.option.activePage = num;
            var arr = this.ul.childNodes;
            for (var i = 0; i < arr.length; i++) {
                this.removeClass(arr[i], 'active');
            }
            // if (!bool) {
            this.refreshDom();
            // }
            this.active();
        },
        _click: function (e) {
            var num = 0;
            var target = this.findTarget(e);
            if (target) {
                if (this.hasClass(target, this.option.classNames.prePage)) {
                    if (this.option.nowFirstNum == 1) return;
                    this.option.activePage = this.option.activePage - this.option.perNum;
                    this.option.activePage = this.option.activePage < 1 ? 1 : this.option.activePage;
                    num = this.option.activePage;
                    console.log(this.option.activePage);
                    this.option.nowFirstNum -= this.option.perNum;
                    if (this.option.nowFirstNum <= 0) this.option.nowFirstNum = 1;
                    this.changePage(num);
                } else if (this.hasClass(target, this.option.classNames.nextPage)) {
                    if (this.option.nowFirstNum == this.option.totalNum - this.option.perNum + 1) return;
                    this.option.activePage = this.option.activePage + this.option.perNum;
                    this.option.activePage = this.option.activePage > this.option.totalNum ? this.option.totalNum : this.option.activePage;
                    num = this.option.activePage;
                    this.option.nowFirstNum += this.option.perNum;
                    if (this.option.nowFirstNum > this.option.totalNum - this.option.perNum) this.option.nowFirstNum = this.option.totalNum - this.option.perNum + 1;
                    this.changePage(num);
                } else if (this.hasClass(target, this.option.classNames.pageNumber)) {
                    num = Number(this.findTarget(e).childNodes[0].innerHTML);
                    this.changePage(num, true);
                } else {
                    return false;
                }
            }
        },
        handleEvent: function (e) {
            var eventFun = "_" + e.type;
            if (typeof this[eventFun] == "function") this[eventFun](e);
        }
    };

    Object.defineProperty(g, "pageDiv", {
        configurable: true,
        enumerable: true,
        value: pageDiv
    });

})(window);







