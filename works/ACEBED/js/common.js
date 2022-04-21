$(function(){
    common.init();
    common.header();
    common.scrollEvt();
})

var common = function(){
    return{
        init:function(){

        },
        header:function(){
            //메뉴
            $("#gnb").hover(function(){
                $("#gnb .depth1, .menu_bg").stop().slideDown();
            },function(){
                $("#gnb .depth1, .menu_bg").stop().slideUp();
            })
        },
        scrollEvt:function(){
            $(window).on("scroll", function(){
                var curr = $(this).scrollTop();
                var ht = $('.brand').offset().top;
                console.log(ht);

                curr > 0 ? $("header").addClass("on") : $("header").removeClass("on");

                curr > ht ? $("header").addClass("navi-up") : $("header").removeClass("navi-up");

                
            }); $(window).trigger("scroll");
        }
    }
}();