$(function(){
    main.init();
    main.swiperSlide();
    main.scrollEvt();
})

var main = function(){
    return{
        init:function(){

        },
        swiperSlide:function(){
            //메인슬라이드
            var mainSlide = new Swiper(".sc_visual .swiper", {
                effect:"fade",
                pagination: {
                    el: ".sc_visual .swiper-pagination",
                    clickable : true
                },
                autoplay : {
                    delay:5000,
                    disableOnInteraction: false,
                }
            });

            var txtMotion = gsap.from(".main_txt *", {
                delay:0.2,
                duration:1,
                yPercent:100,
                opacity:0,
                stagger:0.2,
            });

            txtMotion.pause();
            txtMotion.play();
            mainSlide.on("slideChange", function(){
                txtMotion.restart();
            })

            $('.btn_wrap').on("click", function(e){
                e.preventDefault();
                if(!$('.pause').hasClass("on")){
                    //재생
                    mainSlide.autoplay.start();
                    $('.pause').addClass("on").siblings().removeClass("on");
                }else{
                    //정지
                    mainSlide.autoplay.stop();
                    $(".play").addClass("on").siblings().removeClass("on");
                }
            })

            $('.scroll_btn .down_btn').on("click",function(){
               var scroll =  $('.brand').offset().top - 200;
               console.log(scroll);
               $('html,body').animate({scrollTop : scroll},500)
            })
        },
        scrollEvt:function(){
            //business
            gsap.utils.toArray(".scroll").forEach(scroll => {
                yVal = scroll.dataset.y;
                gsap.to(scroll, {
                    scrollTrigger: {
                      trigger: scroll,
                      start:"top 100%", // [엘리먼트,윈도우]
                      end:"bottom top",// [엘리먼트,윈도우]
                      markers:false,
                      scrub:1
                    },
                    yPercent:yVal
                })
            });
            gsap.from(".sc_intro li",{
                scrollTrigger:{
                    trigger:".sc_intro", //기준엘리먼트
                    start:"top 80%",
                    end:"bottom top",
                },
                delay:0.2,
                duration:1,
                yPercent:20,
                opacity:0,
                stagger:0.2
            })
        }
    }
}();