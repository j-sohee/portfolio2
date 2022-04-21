$(function(){
    main.swiperSlide();
    main.mouseEffect();
    main.productionSlide();
    main.borad();
    main.pinEffect();
    main.fixedLocation();
    
})

var main = function(){
    return{
        init:function(){
            
        },
        mouseEffect:function(){
            $(window).on('mousemove',function(e){
                gsap.to('.cursor',{
                    x:e.clientX -50,
                    y:e.clientY - 50,
                })
            });
            $('.welcome').hover(function(){
                $('.cursor').addClass("on");
            },function(){
                $('.cursor').removeClass("on");
            });
        },
        swiperSlide:function(){
            var swiper = new Swiper("main .welcome .swiper", {
                loop : false,
                slidesPerView : "auto",
                centeredSlides:true,
                spaceBetween:50,
            });
        },
        productionSlide:function(){
            var swiper = new Swiper("main .production .swiper", {
                loop : false,
                slidesPerView : "auto",
                centeredSlides:true,
                spaceBetween:50,
            });
        },
        borad:function(){
            $('.tech .board dt').on("click",function(e){
                e.preventDefault();

                var isOn = $(this).hasClass("on");
                $(this).removeClass("on");
                $('.tech .board dd').slideUp(500);

                if(isOn){
                    $(this).removeClass("on");
                    $(this).next().slideUp(500);
                }else{
                    $(this).addClass("on");
                    $(this).next().slideDown(500);
                }
            })
        },
        pinEffect:function(){

            var fadeEffect01 = gsap.fromTo('.main_txt, .performance .sub_txt ul li' ,1,{
                opacity:0,
                yPercent:50,
            },{
                delay:0.5,
                ease:"none",
                opacity:1,
                stagger:0.05,
                yPercent:0
            })
            fadeEffect01.pause();

           var videoMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:".performance",
                    start:"top top",
                    end:"+=250%",
                    // markers:true,
                    scrub:0,
                    pin:true,
                    onEnter:function(){
                        fadeEffect01.play();
                    }
                },
           })
           videoMotion.addLabel('motion01')
           .fromTo('.performance .wrap',{
                yPercent:40,
            },{
                ease:"none",
                yPercent:-70
            })
            
            var carMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:".motors",
                    start:"top top",
                    end:"+=300%",
                    // markers:true,
                    scrub:0,
                    pin:true,
                },
           })
           carMotion.to('.motors .visual_bg .bg01',{opacity:0})
           .addLabel('motion01')
           .to('.motors .content_wrap .left',{yPercent:-100}, 'motion01')
           .to('.motors .content_wrap .right',{yPercent:-100}, 'motion01')


  
           var sectArr = ['.driving','.design','.engineering'];
           sectArr.forEach(el => {
               gsap.fromTo(el+' .wrap',{
                yPercent:0,
            },{
                //to
                scrollTrigger:{
                    trigger:el,
                    start:"top top",
                    end:"bottom top",
                    scrub:0,
                    pin:true,
                },
                ease:"none",
                yPercent:-70
            })
           });


           gsap.utils.toArray(".technology .txt01").forEach(section => {
            gsap.to(section, {
              scrollTrigger: {
                    trigger: section,
                    start:"30% top",
                    end:"50% top",
                    markers:true,
                    scrub:1,
                },
                opacity:0
            })
          });
           
        },
        fixedLocation:function(){
            
            var locaArr = ['INTRO','INSPIRES','PERFORMANCE','MOTORS','ELECTRIC','DESIGN','TECHNOLOGY','ENGINEERING'];
            
            $('.section').each(function(index,item){                
                var num = index +1;

                ScrollTrigger.create({
                    trigger:item,
                    start:"top top", //[트리거의 시작지점, 윈도우의 시작점]
                    end:"bottom top", //[트리거의 시작지점, 윈도우의 시작점]
                    // markers:true,
                    onEnter:function(){
                        
                        (index < 10) ? '0'+num : num;
                        $('.pagination span').text('0'+num);
                        $('.pagination p').text(locaArr[index]);

                    },
                    onEnterBack:function(){
                        $('.pagination span').text('0'+num);
                        $('.pagination p').text(locaArr[index]);
                    }
                })

                gsap.to('.bar',{    
                    scrollTrigger:{
                        trigger:"body",
                        start:"top top",
                        end:"bottom bottom",
                        // markers:true,
                        scrub:0
                    },
                    height:100+'%'
                })
            })
        }
    }
}();
