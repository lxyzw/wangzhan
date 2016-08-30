/**
 * Created by bingur on 2016-8-3.
 */

$(function () {
    // //设置链接
    // $("a").attr("href","javaScript:;");
    // $("#menu1>a").attr("href","#");
    // $("#menu2>a").attr("href","#");
    // $("#menu3>a").attr("href","#");
    // $("#menu4>a").attr("href","#");
    // $("#menu5>a").attr("href","#");
    // $("#menu6>a").attr("href","#");
    // $("#menu7>a").attr("href","#");
    // $("#menu8>a").attr("href","#");


    var scrollTop = $(document).scrollTop();
    if(scrollTop+window.innerHeight>$("#section2").offset().top){
        $("#section2 .wrap .home_title").animate({
            top: 0
        }, 1000);
        $("#section2 .wrap .service_text").animate({
            left: 0
        }, 1000);
        $("#section2 .wrap .serve_column").animate({
            bottom: 0
        }, 1000);
    }



    //导航特效
    // $(".nav_icon").css({"left": 40, "width": 56});
    // $(".nav li").mouseover(function () {
    //     var index = $(this).index();
    //     // console.log(index);
    //     $(".nav_icon").stop(true, false).animate({left: 40 + 96 * index});
    // });
    // $(".nav li").mouseout(function () {
    //     $(".nav_icon").stop().animate({left: 40});
    // });

    //banner轮播图

    $("#list_pic li").mouseenter(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $("#pic>li").width($(window).width());
        var picWidth = $("#pic>li").width();
        var len = $("#pic>li").length;
        $("#pic").width(picWidth * len);
        $("#pic").animate({
            left: -picWidth * index
        })
    });
    var il = 0;
    setInterval(function () {
        il++;
        if (il >= $("#pic>li").length)
            il = 0;
        $("#list_pic li").eq(il).mouseenter();
    }, 2000)



    //section2图片变大
    $("#section2 .fix .pic").mouseenter(function () {
        $(this).find("img").stop(true).animate({
            width:324,
            height:240,
            top:-20,
            left:-27
        },800);
        $(this).find("img").animate({
            width:270,
            height:200,
            top:-0,
            left:-0
        },600);

    });
    //缩小


    //右侧导航
    $("#fp-nav ul a").click(function () {
        $("#fp-nav ul a").removeClass("active");
        $(this).addClass("active");
        var index = $(this).parent().index();
        var scrollTop = $("#section" + (index + 1)).offset().top;
        $(document.body).animate({
            scrollTop: scrollTop
        });
    });
    $(document).scroll(function () {
        var scrollTop = $(this).scrollTop();
        // console.log(scrollTop);
        var scroTop = []
        for (var i = 0; i < $("#fp-nav ul a").length; i++) {
            scroTop[i] = parseInt($("#section" + (i + 1)).offset().top);
        }
        // console.log(scroTop);
        for (var i = 0; i < scroTop.length; i++) {
            if (scroTop[i] <= scrollTop) {
                $("#fp-nav ul a").removeClass("active");
                $($("#fp-nav ul a")[i]).addClass("active");
            }
            //渲染section2画面,
            if(scrollTop+window.innerHeight>$("#section2").offset().top){
                $("#section2 .wrap .home_title").animate({
                    top: 0
                }, 1000);
                $("#section2 .wrap .service_text").animate({
                    left: 0
                }, 1000);
                $("#section2 .wrap .serve_column").animate({
                    bottom: 0
                }, 1000);
            }
            if(scrollTop+window.innerHeight>$("#section3").offset().top){
                $("#section3 .succeed .succeed_title").animate({
                    top: 0
                }, 1000);
                $("#section3 .succeed .success_text").animate({
                    left: 0
                }, 1000);
                $("#section3 .portfolio-grid").animate({
                    bottom: 0
                }, 1000);
            }
            if(scrollTop+window.innerHeight>$("#section4").offset().top){
                $("#section4 .home_solutions_title").animate({
                    left: 0
                }, 1000);
                $("#section4 .home_solutions_text").animate({
                    left: 0
                }, 1000);
                $("#section4 .home_solutions_list").animate({
                    top: 0
                }, 1000);
            }
        }
    });
    //灰色遮罩
    $(".thumbnail").mouseenter(function () {
        $(this).find(".projectinfo").fadeIn();
    });
    $(".thumbnail").mouseleave(function () {
        $(this).find(".projectinfo").fadeOut();
    });

});