$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
    })

    //banner侧导航
    let tab = $(".tab");
    let is_active = false;
    tab.on("mouseover", function () {
        if (is_active) {
            return
        }
        is_active = true;
        $(this).children('.sideNavigation_slide').attr('class', 'sideNavigation_slide tab_active');

    }).on("mouseout", function () {
        is_active = false;
        $(this).children('.sideNavigation_slide').attr('class', 'sideNavigation_slide');
    })

    //顶部导航
    $(".navbox").on("mouseleave", function () {
        $(this).hide()
    });
    $(".nav").on("mouseleave", function () {
        $(".navbox").hide()
    });
    var lineHtml = '<div class="navLine"><p class="firseLine"></p><p class="secoundLine"></p></div>'
    $(".navtab").on("mouseenter", function () {
        $(".navbox").show();
        let nvaindex=$(this).index(".navtab");
        $(".navLine").remove();
        $(this).addClass("active").append(lineHtml).siblings().removeClass("active");
        let left = nvaindex*100+14
        $(".navLine").css("left",  left);
        $(".navmenu").eq(nvaindex).show().siblings().hide();
    })
    $(".linlei").on("mouseenter", function () {
        $(this).siblings(".navbox").hide();
    })

    $("#header").load('header.html');
    $("footer").load('footer.html');
})