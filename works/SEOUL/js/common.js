$(function(){
    common.init();
})

var common = function(){
    return{
        init:function(){
            $(".skip").on("focusin", function(){
                $(this).addClass("on"); 
            })
            $(".skip").on("focusout", function(){
                $(this).removeClass("on"); 
            })
        }
    }
}();