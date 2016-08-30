/**
 * Created by 楠 on 2016/8/7.
 */
$(function () {
//1.动态创建ol的li
    var timer1 = null;
    var $ulLis = $(".screen>ul>li");
    $ulLis.each(function (index) {
        $(".screen>ol").append("<li>" + (index + 1) + "</li>");
        $(".screen>ol>li").eq(0).addClass("current");

        //TODO 淡入淡出
        //1定时器--失败
        //    var index = 0;
        //    timer1 = setInterval(function () {
        //        $(".screen>ul").width($(".current").width());

        //        $ulLis.eq(index).show()
        //        $ulLis.eq(index+1).show()
        //            .css("opacity",0);
        //        $ulLis.eq(index + 1).fadeIn(3000);
        //        $ulLis.eq(index).fadeOut(3000);
        //        index++;
        //        if (index === 4) {
        //            index = 0;
        //        }
        //    }, 6000);
        $(".screen").on("mouseenter", "ol>li", move);

    });

//2.----搜的方法
//        function loopBanner(index) {
//            var ulLis = $(".screen>ul>li");
//            var total = ulLis.length;
//
//            if( !total ) return false;
//            if( index >= total ) index = 0;
//
//            var next = index + 1;
//            if( next > total-1 ) next = 0;
//
//            $(ulLis[index]).show();
//            $(ulLis[next]).show();
//            $(ulLis[next]).css('opacity', '0');
//            $(ulLis[next]).animate({opacity:'1'}, 4000);
//            $(ulLis[index]).animate({opacity:'0'}, 6000, function(){
//                    $(ulLis[index]).hide();
//                    $(ulLis[next]).hide();
//                    loopBanner(index+1) }
//            );
//        }
//
//        $(document).ready(function(){
//            loopBanner(0);		// 从第 0 个开始播放
//        });

    //ol li列表mouseenter


    function move() {
        clearInterval(timer1);
        var zIndex = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        //$(window).mousemove(function(){
        // var picWidth=$(window).width();
        //    $(".screen img").css("width",picWidth);
        //});

        $(".screen img").css("width",1366);
        $(".screen img").css("height",400);
        var target = -$(".screen img").eq(0).width() * zIndex;
        $(".screen>ul").stop(false, true).animate({
            "left": target
        }, 200);
    };


    var index = 0;
    setInterval(function () {
        index++;
        if (index === 3) {
            index = 0;
        }
        $(".screen").on("ol>li", function () {
            var target = -$(".screen img").eq(0).width() * index;
            $(".screen>ul").animate({
                "left": target

            }, 500);
        });
    }, 500);


    //设置左右按钮
    //$(".screen").mouseenter(function () {
    //    $("#arr").show();
    //    return false;
    //});
    //$(".screen").mouseleave(function () {
    //    $("#arr").hide();
    //    return false;
    //});
});


//2.   news_tab li
$(function () {
    var $lis = $(".news_tab li");
    $lis.each(function (index) {
        if (index < 5) {
            $(this).css({
                "top": 50,
                "left": -850,
                "opacity": 0
            });
        } else {
            $(this).css({
                "top": 200,
                "right": -850,
                "opacity": 0
            });
        }

    });

    $lis.each(function (index) {
        if (index < 5) {
            $(this).animate({
                "left": 245 * index,
                "top": 10,
                "opacity": .8
            }, 500 + index * 500);
        } else {
            $(this).animate({
                "left": 245 * (index - 5),
                "top": 230,
                "opacity": .8
            }, 500 + index * 200);
        }
        $(this).mouseenter(function () {
            $(this).css({
                "opacity": 1,
                "border-top": "30px solid #fff",
                "border-bottom": "30px solid #fff"
            });
        });
        $(this).mouseleave(function () {
            $(this).css({
                "opacity": .6,
                "border": 0
            });
        });
    });
});

//nav li
$(function () {
    $("nav li").mouseenter(function () {
        var liWidth = $(this).width() + 40;
        var index = $(this).index();
        $(".nav_icon").css({
            "left": liWidth * index + 38,
        });
    });
    $("nav li").mouseleave(function () {
        $(".nav_icon").css({
            "left": 615,
        });
    });
});

//右侧固定栏
$(function () {
    $(".li_close").click(function () {
        $(this).parent().parent().remove();
    });
    $(".li_top").click(function () {
        $(document).scrollTop(0);
    });
});
//微信图标
$(function () {
    $(".ewm").mouseenter(function () {
        $(".ewm img").css("display", "block");
    });
    $(".ewm").mouseleave(function () {
        $(".ewm img").css("display", "none");
    });
});