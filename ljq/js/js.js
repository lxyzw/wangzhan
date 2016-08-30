/**
 * Created by Administrator on 2016/8/2.
 */
$(function() {
    //$("#n1").mouseenter(function(){
    //    $("#n1").attr("src","image/m031.jpg");
    //});
    //$("#n1").mouseleave(function(){
    //    $("#n1").attr("src","image/m03.jpg");
    //});
    //$("#n2").mouseenter(function(){
    //    $("#n2").attr("src","image/m032.jpg");
    //});
    //$("#n2").mouseleave(function(){
    //    $("#n2").attr("src","image/m04.jpg");
    //});
    //$("#n3").mouseenter(function(){
    //    $("#n3").attr("src","image/m033.jpg");
    //});
    //$("#n3").mouseleave(function(){
    //    $("#n3").attr("src","image/m05.jpg");
    //});
    var arr  = ["image/m031","image/m032","image/m033"];
    var arr2 = ["image/m03","image/m04","image/m05"]
    $(".mytel-down>div>img").mouseenter(function(){
        var zIndex = $(this).parent().index();
        $(this).attr("src",arr[zIndex]+".jpg");
    });
    $(".mytel-down>div>img").mouseleave(function(){
        var zIndex = $(this).parent().index();
        $(this).attr("src",arr2[zIndex]+".jpg");
    });
    $(document).scroll(function () {
        var top=$(document).scrollTop();
        console.log(top);
        if(top>1700){
            $(".mywx-right").animate({
                "right":"0",
                "bottom":"0"
            },1000);
        }
    });
//     $("#tp1").animate({
//         "height":"436px"
//     },1000,function () {
//         $("#tp2").animate({
//             "height":"436px"
//         },function () {
//             $("#tp3").animate({
//                 "height":"436px"
//             },1000,function () {
//                 $("#tp4").animate({
//                     "height":"436px"
//                 },1000,function () {
//                     $("#tp5").animate({
//                         "height":"436px"
//                     })
//                 })
//             })
//         })
//     })
//
    $("#tp1").fadeIn(2000,function () {
        $("#tp2").fadeIn(1000,function () {
            $("#tp3").fadeIn(1000,function () {
                $("#tp4").fadeIn(1000,function () {
                    $("#tp5").fadeIn(1500)
                })
            })
        })
    })
 });

    