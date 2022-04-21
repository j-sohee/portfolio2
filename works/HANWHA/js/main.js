$(function(){
    main.mainVisual();
    main.scrollEvt();
})

var main = function(){
    return{
        init:function(){

        },
        mainVisual:function(){
            var visualSlide = new Swiper(".visual_wrap", {
                speed:1000,
                parallax: true,
                loop:true,
                touchRatio: 0,
                pagination: {
                   el: '.count',
                   clickable: true,
                   type: 'custom',
                         renderCustom: function (swiper, current, total) {
                           $('.current').text(current);
                           $('.total').text(total);
                         }
                }
            });

            //스크롤버튼
            $('.scrollBtn').on("click",function(){
                var scroll = $('.business').offset().top;
                $('html,body').animate({scrollTop : scroll},500)
            })

            visualSlide.on('slideChange',function(){
                // console.log(visualSlide.realIndex)
                $('.visual .bar li').eq(visualSlide.realIndex).addClass("on").siblings().removeClass("on");
                gauge.restart();
            })


            //게이지버튼
            var gauge = gsap.to('.visual .circle',5,{
                strokeDashoffset:0,
                ease:'none',
                onComplete:function(){
                    visualSlide.slideNext();
                }
           })

           //prev,next버튼
           $(".prev").click(function(){
               visualSlide.slidePrev();
               gauge.restart();
           });
           $(".next").click(function(){
               visualSlide.slideNext();
               gauge.restart();
           })

           //재생,멈춤버튼
           $('.btn').on("click",function(e){
               e.preventDefault();
               if(!$('.pause').hasClass("on")){
                    $('.pause').addClass("on").siblings().removeClass("on");
                    gauge.restart();
                    
               }else{
                    $('.play').addClass("on").siblings().removeClass("on");
                    gauge.pause();
               }
           })

        
        },
        scrollEvt:function(){
            
            $('.btn_top button').click(function(){
                $('html, body').animate({scrollTop:0},500)
            })

            gsap.from(".tvcm .inner",{
                scrollTrigger:{
                    trigger:".tvcm", //기준엘리먼트
                    start:"top 80%",
                    end:"bottom top",
                },
                delay:0.2,
                duration:1,
                yPercent:20,
                opacity:0,
                stagger:0.2
            })

            var sectArr = ['.business','.news','.tvcm','.recruit','.company'];
            sectArr.forEach(el => {
                gsap.fromTo(el+' .fadeup',{
                    yPercent:20,
                    opacity:0,
                },{
                    scrollTrigger:{
                        trigger:el,
                        start:"top 80%",
                        // end:"top 50% ",
                        // markers:true
                    },
                    delay:0.2,
                    duration:0.6,
                    yPercent:0,
                    stagger:0.2,
                    opacity:1
                })
            })
        }
    }
}();