/**
 * Created by Administrator on 2016/8/4.
 */


//header筋斗云特效处理

$(function () {
    $(".nav_icon").css({"left": 330, "width": 56});
    $(".nav li").mouseover(function () {
        var leader = $(this).offset().left;
        $(".nav_icon").stop().animate({left: leader - 465});
    });
    $(".nav li").mouseout(function () {
        $(".nav_icon").stop().animate({left: 330});
    });
});


//banner动画处理
$(function () {
    $(".inside_banner_service").show(1500, function () {
        $(this).animate({
            "opacity": 1
        }, 2000)
        $(".longmaoBig").animate({
            "opacity": 0
        }, 2000)

    });
})

//banner图片模糊处理

$(function () {
    $(".fix li").mouseenter(function () {
        $(this).children(".blur_shade").stop(false, true).slideDown("slow");
        $(this).children(".blur_shade").css({
            "top": 0,
            "opacity": 1
        })
        $(this).children("img").addClass("blur");
    })
    $(".fix li").mouseleave(function () {
        $(this).children(".blur_shade").stop(false, true).slideUp("slow");
        $(this).children("img").removeClass("blur");
    })
})

//banner轮播图处理


$(function () {

    var firstImg = $(".prev").clone(true);
    $(".main>ul").append(firstImg);
    var pic = 0;
    $(".arr-right").click(function () {
        if (pic == 2) {
            $(".main>ul").css({
                "left": 0
            })
            pic = 0;
        }
        pic++;
        var target = -pic * 1200;
        $(".main>ul").animate({
            "left": target + "px"
        }, 1000)
        //清楚文字被选中影响
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    })
    $(".arr-left").click(function () {
        if (pic == 0) {
            $(".main>ul").css({
                "left": "-2400px",
            })
            pic = 2;
        }
        pic--;
        var target = -pic * 1200;
        $(".main>ul").animate({
            "left": target + "px"
        }, 1000)
        //清楚文字被选中影响
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    })
    var timer = null;
    timer = setInterval(function () {
        $(".arr-right").click();
    }, 2500)
    $(".main").mouseenter(function () {
        clearInterval(timer);
    })
    $(".main").mouseleave(function () {
        timer = setInterval(function () {
            $(".arr-right").click();
        }, 2500)
    })
    $(".arr-right").mouseenter(function () {
        clearInterval(timer);
    })
    $(".arr-right").mouseleave(function () {
        timer = setInterval(function () {
            $(".arr-right").click();
        }, 2500)
    })
    $(".arr-left").mouseenter(function () {
        clearInterval(timer);
    })
    $(".arr-left").mouseleave(function () {
        timer = setInterval(function () {
            $(".arr-right").click();
        }, 2500)
    })

})
    //合作流程漂浮处理
window.onload = function () {
    var oDiv = document.getElementById("float");
    var aA =oDiv.children;
    var i = 0;
    for (i = 0; i < aA.length; i++) {
        aA[i].pause = 1;
        aA[i].time = null;
        initialize(aA[i]);
        aA[i].onmouseover = function () {
            this.pause = 0;
        };
        aA[i].onmouseout = function () {
            this.pause = 1;
        };
    }
    setInterval(starmove, 24);
    function starmove() {
        for (i = 0; i < aA.length; i++) {
            if (aA[i].pause) {
                domove(aA[i]);
            }
        }
    }

    function domove(obj) {
        if (obj.offsetTop <= -obj.offsetHeight) {
            obj.style.top = oDiv.offsetHeight + "px";
            initialize(obj);
        }
        else {
            obj.style.top = obj.offsetTop - obj.ispeed + "px";
        }
    }

    function initialize(obj) {
        var iLeft = parseInt(Math.random() * oDiv.offsetWidth);
        var scale = Math.random() * 1 + 1;
        var iTimer = parseInt(Math.random() * 1500);
        obj.pause = 0;

        obj.style.fontSize = 10 * scale + 'px';

        if ((iLeft - obj.offsetWidth) > 0) {
            obj.style.left = iLeft - obj.offsetWidth + "px";
        }
        else {
            obj.style.left = iLeft + "px";
        }
        clearTimeout(obj.time);
        obj.time = setTimeout(function () {
            obj.pause = 1;
        }, iTimer);
        obj.ispeed = Math.ceil(Math.random() * 4) + 1;
    }
};

    //回到顶部特效
    $(function () {
        $(window).scroll(function () {
            if($(window).scrollTop()>120){
                $(".totop").fadeIn(1500);
            }else{
                $(".totop").fadeOut(1500);
            }
        })
    })

    $(function () {
        $(".totop").click(function () {
            $("body").animate({
                scrollTop:0
            },2000)
        });
    })



    
