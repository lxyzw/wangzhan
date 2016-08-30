$(function() {
     $(".little-banner>li").mouseenter(function(){
         $(this).find(".little-banner-gray").fadeIn();
     });
     $(".little-banner>li").mouseleave(function(){
         $(this).find(".little-banner-gray").fadeOut();
     });
 });
