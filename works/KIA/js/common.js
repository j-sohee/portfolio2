$(function(){
    common.menu();
    common.speedEffect();
})

var common = function(){
    return{
        init:function(){

        },
        header:function(){
            
        },
        menu:function(){

            var menuMotion = gsap.timeline({
                onReverseComplete:()=>{
                    $('.btnCall').removeClass("on");
                    $('.header .menu').removeClass("on");
                }
            });

            menuMotion.fromTo('.menu li',1,{
                opacity:0,
                xPercent:-20
            },{
                delay:.5,
                opacity:1,
                stagger:.05,
                xPercent:0
            })
            menuMotion.pause();

            $('.btnCall').on("click", function(e){
                e.preventDefault();

                if($(this).hasClass('on')){
                    menuMotion.reverse();

                }else{
                    $('.btnCall').addClass("on");
                    $('.header .menu').addClass("on");
                    menuMotion.play();
                }
            })
        },
        speedEffect:function(){

           ani =  gsap.to('.curr_speed',0.1,{
                repeat:-11,
                yoyo:true,
                x:10,
                paused:true,
            })

            $(window).scroll(function(){
                a = $(window).scrollTop()+$(window).height();
                b = $('body').height();
                console.log(a+'//'+b);

                result = Math.floor(a / b * 100);

                if(result >= 50){
                    ani.restart();
                }

                $('.speed').text(result);
            })

            // gsap.to('.speed',{    
            //     scrollTrigger:{
            //         trigger:"body",
            //         start:"top top",
            //         end:"bottom bottom",
            //         markers:true,
            //         scrub:0
            //     },
            //     // height:100+'%'
            // })

            // $('body').on('mousewheel',function(e){
            //     // var wheel = (e.originalEvent.wheelDelta);
            //     // var result = Math.abs(wheel)
            //     // wheel < 0 ? wheel*-1 : wheel;
            //     // $('.speed').text(result);

            //     // gsap.from('.speed',{
            //     //     textContent: 0,
            //     //     duration: 4,
            //     //     ease: "power1.in",
            //     // })
            // })
        }
    }
}();