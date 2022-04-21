$(function(){
    $('.slide h3').on("click focuse",function(){
        $(this).parent('.cont').addClass("active").siblings().removeClass("active");
    })
})

$(function(){
    main.newsSlide();
    main.siteMenu();
    main.ciSlide();
    main.slideBanner();
})

var main = function(){
    return{
        init:function(){

        },
        newsSlide:function(){
            var mainSlide01 = new Swiper(".main .banner01", {
                loop : true,
                touchRatio: 0,//드래그 금지
                navigation: {
                    nextEl: ".news_control>.news_next",
                    prevEl: ".news_control>.news_prev",
                    clickable : true,
                },
                autoplay : {
                    delay:3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.news_pi',
                    clickable: true,
                    type: 'custom',
                          renderCustom: function (swiper, current, total) {
                            $('.news_pi>.count').text(current);
                            $('.news_pi>.total').text(total);
                          }
                 },
            });

            //news banner play,stop버튼
            $('.news_btn').on("click",function(e){
                e.preventDefault();
                if($('.news_btn .pause').hasClass("on")){
                    mainSlide01.autoplay.stop();
                    $('.news_btn .pause').removeClass("on").siblings().addClass("on");
                }else{
                    mainSlide01.autoplay.start();
                    $('.news_btn .play').removeClass("on").siblings().addClass("on");
                }
            })
        },
        ciSlide:function(){
            var mainSlide02 = new Swiper(".main .banner02", {
                loop : true,
                touchRatio: 0,//드래그 금지
                navigation: {
                    nextEl: ".ci_control>.ci_next",
                    prevEl: ".ci_control>.ci_prev",
                    clickable : true,
                },
                autoplay : {
                    delay:3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.ci_pi',
                    clickable: true,
                    type: 'custom',
                          renderCustom: function (swiper, current, total) {
                            $('.ci_pi>.count').text(current);
                            $('.ci_pi>.total').text(total);
                          }
                 },
            });

            //citizen banner play,stop버튼
            $('.ci_btn').on("click",function(e){
                e.preventDefault();
                if($('.ci_btn .pause').hasClass("on")){
                    mainSlide02.autoplay.stop();
                    $('.pause').removeClass("on").siblings().addClass("on");
                }else{
                    mainSlide02.autoplay.start();
                    $('.play').removeClass("on").siblings().addClass("on");
                }
            })
        },
        slideBanner:function(){
            var isuSlide = new Swiper(".isu_swiper", {
                loop : true,
                slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	            spaceBetween : 50,
                slidesPerGroup : 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
                // touchRatio: 0,//드래그 금지
                autoplay : {
                    delay:3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".isu_next",
                    prevEl: ".isu_prev",
                    clickable : true,
                },
                a11y: {
                    prevSlideMessage: '이전 슬라이드',
                    nextSlideMessage: '다음 슬라이드',
                    slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
                },
                pagination: {
                    el: '.isu_count',
                    clickable: true,
                    type: 'custom',
                          renderCustom: function (swiper, current, total) {
                            $('.isu_count>.curr').text(current);
                            $('.isu_count>.total').text(total);
                          }
                 },
            });
            //banner play,stop버튼
            $('.isu_btn').on("click",function(e){
                e.preventDefault();
                if($('.isu_pause').hasClass("on")){
                    isuSlide.autoplay.stop();
                    $('.isu_pause').removeClass("on").siblings().addClass("on");
                }else{
                    isuSlide.autoplay.start();
                    $('.isu_play').removeClass("on").siblings().addClass("on");
                }
            })
        },
        siteMenu:function(){
            $('.site .menu>li').on("click", function(e){
                e.preventDefault();
                var isOn = $(this).hasClass("on");
                
                $('.site .menu>li').removeClass("on");
                $('.site .menu>li>.sub_menu').hide();

                if(isOn){ 
                    $(this).removeClass("on");
                    $(this).find('.sub_menu').slideUp(100);
                }else{
                    $(this).addClass("on");
                    $(this).find('.sub_menu').slideDown(100);
                    
                }
            })

            $('.sub_menu li:first-child').keydown(function(e){
                var keyCode = event.keyCode || event.which;
                if(keyCode == 9){
                    if(event.shiftKey){
                        $('.site .menu>li').removeClass("on");
                        $('.site .menu>li>.sub_menu').hide();
                    }
                }
            })

            $('.sub_menu li:last-child').keydown(function(e){
                var keyCode = event.keyCode || event.which;
                if(keyCode == 9){
                    if(!event.shiftKey){
                        $('.site .menu>li').removeClass("on");
                        $('.site .menu>li>.sub_menu').hide();
                    }
                }
            })
        }
    }
}();