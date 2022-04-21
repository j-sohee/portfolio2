$(function(){
    common.scrollEvt();
    common.pcMenu();
})

var common = function(){
    return{
        pcMenu:function(){
            $('.btnCall').on("click",function(e){
                e.preventDefault();
                $('.btnCall,.pc_menu').toggleClass("on");
                $('body').toggleClass("hidden"); 
            });
        },

        scrollEvt:function(){

            $(window).on("scroll",function(){
                var curr = $(this).scrollTop();
                // console.log(curr);
                if(curr > 0){
                    $("header").addClass("on");
                    $(".gnb>ul>li").on("mouseenter",function(){
                        // $("header").addClass("active");
                        $(this).find('.depth1').show();
                    })
                    $(".gnb>ul>li").on("mouseleave",function(){
                        $(this).find(".depth1").hide();
                        $("header").addClass("on");
                    })
                    
                }else{
                    $("header").removeClass("on");
                    $(".gnb>ul>li").on("mouseenter",function(){
                        $("header").addClass("on");
                        $(this).find('.depth1').show();
                    })
                    $(".gnb>ul>li").on("mouseleave",function(){
                        $(this).find(".depth1").hide();
                        $("header").removeClass("on"); 
                    })
                }
                
            }); $(window).trigger("scroll");
        }
    }
}();