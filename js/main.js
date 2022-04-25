$(function() {

    ScrollTrigger.saveStyles(".container");
    const secCnt = $('.section').length*100 - 100;
    gsap.to('.wrap',{
        scrollTrigger:{
            trigger:".container",
            start:"top top",
            end:"+=3000%",
            // markers:true,
            pin:true,
            scrub:1,
        },
        x:-secCnt+'%',
    })


    var particleHtml = "<span class=\"particle\"></span>";
    for (let index = 0; index < 10; index++) {
        $('body').append(particleHtml);
    }

     gsap.fromTo('.particle',1,
        {
            top:"random(0, 100)%",
            left:"random(0, 100)%",
            //scale:0
            opacity:0,
        },{
            opacity:1,
            // scale:"random(0.3, 2)",
            top:"random(30%, 100)%",
            left:"random(0, 100)%",
            filter:"blur(random(0, 3)px)",
            rotation:"random(0, 360)",
            // 'zIndex':"random(1, 10)",
            // repeat:-1,
            delay:1
    })

    part = gsap.to('.particle',{
        ease:'none',
        x:"random(-2000, 200)",
        y:"random(-2000, 200)",
        rotation:"random(0, 360)",
    })

    ScrollTrigger.create({
        trigger:"body",
        start:"top top",
        end:"+=3000%",
        scrub:1,
        animation:part,
    })
   
})