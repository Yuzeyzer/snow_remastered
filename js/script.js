
    $('.mobile__btn').on('click', function(){
        $(this).toggleClass('mobile__btn_active');
        $('.nav-list').toggleClass('menu__active');
    });
    $('.nav-list li').on('click',function(){
        $('.nav-list').removeClass('menu__active');
        $('.mobile__btn').removeClass('mobile__btn_active');
    })
    // $('.lang-items a').on('click', function(e){
    //     e.preventDefault();
    // })
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [599, 1],
        pagination: false,
        autoplay: true,
        loop: true,
        responsive: {
            1024: {
                items: 3
            },
            768: {
                items: 2
            },
            596: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    $(".facilities__carousel").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [599, 1],
        pagination: false,
        autoplay: true,
        loop: true,
        responsive: {
            1366: {
                items:2
            },
            1024: {
                items: 2
            },
            768: {
                items: 2
            },
            596: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    $(".hostel__info_carousel").owlCarousel({
        items: 4,
        pagination: false,
        autoplay: true,
        loop: true,
        responsive: {
            1366: {
                items:5
            },
            1024: {
                items: 4
            },
            768: {
                items: 3
            },
            596: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    $(".rooms__slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [599, 1],
        pagination: false,
        autoplay: true,
        loop: true,
        responsive: {
            1366: {
                items:4
            },
            1024: {
                items: 3
            },
            768: {
                items: 3
            },
            596: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky")
            $(".toggle-wrap").addClass("sticky_2");
            $(".menu").addClass("sticky_2");
            $(".contact-info").addClass("none");
            $(".logo, .bars, .logo-img,.logo-text,.Vertical,.social-info").addClass("none");
    
        } else {
            $(".nav").removeClass("sticky");
            $(".toggle-wrap").removeClass("sticky_2");
            $(".menu").removeClass("sticky_2");
            $(".contact-info").removeClass("none");
            $(".logo, .bars, .logo-img,.logo-text,.Vertical,.social-info").removeClass("none");
        }
    });

    TweenMax.to('.hero__content_items',1.8, {
        delay:0.5,
        scale:1,
        right:"0",
        ease:Power2.easeInOut
    })
TweenMax.to('.hero__content_img',1.7, {
    delay:0.4,
    right:"0",
    width:"45%",
    ease:Power2.easeInOut
})
TweenMax.to('.black__block',1.3, {
    delay:0.3,
    right:"150%",
    width:"100%",
    ease:Power2.easeInOut
})
TweenMax.to('.blue__block',1.9, {
    delay:0.3,
    right:"150%",
    width:"300%",
    ease:Power2.easeInOut
})
TweenMax.from('.hero__content_items h1',2.2, {
    delay:2.6,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
})
TweenMax.from('.hero__content_items p',1.1, {
    delay:2.4,
    y:60,
    opacity:0,
    ease:Power2.easeInOut
})
TweenMax.to('.hero__content_img',1.6, {
    delay:1.3,
    scale:1.1,
    ease:Power2.easeInOut
})
TweenMax.to('.hero__content_img_item',1.2, {
    delay:2.2,
    scale:1,
    width:'35%',
    transform:'translateX(-20%)',
    opacity:1,
    ease:Power2.easeInOut
})
TweenMax.to('.nav-bottom',1, {
    delay:2,
    opacity:1,
    padding: '2rem 0',
    height:'6rem',
    ease:Power2.easeInOut
})
TweenMax.from('.logo',1.6,{
    delay:1.4,
    opacity:0,
    x:-20
},3)
TweenMax.from('.order',0.8,{
    delay:3.1,
    opacity:0,
    y:20
})
TweenMax.staggerFrom('.nav-list li',1, {
    delay:2.3,
    y:-40,
    opacity:0,
},0.2)
TweenMax.staggerFrom('.lang-items',1, {
    delay:3.6,
    y:-40,
    opacity:0,
},0.1)
TweenMax.staggerFrom('.social-icons li',1, {
    delay:1.6,
    x:-80,
    opacity:0,
},0.2)
    // let language = {
    //     RuTr: {
    //         Main:"Главная",
    //         Main2:"О нас",
    //         Main3:"Комнаты",
    //         Main4:"Сервис",
    //         Main5:"Отзывы",
    //         Main6:"Забронировать",
    //         Consult:"Консультация",
    //         type1:"Введите ваше имя",
    //         type2:"Введите ваш номер телефона",
    //         type3:"Введите вашу почту",
    //     },
    //     EngTr: {
    //         Main:"home",
    //         Main2:"about",
    //         Main3:"rooms",
    //         Main4:"service",
    //         Main5:"testimonials",
    //         Main6:"booking",
    //         Consult:"Consultation",
    //         type1:"Type your name",
    //         type2:"Type your phone number",
    //         type3:"Type your email",
    //         Send:"Send"
    //     }
    // };

    // if (window.location.hash) {
    //     if (window.location.hash === "#Eng"){
    //         nav.textContent = language.EngTr.Main;
    //         nav2.textContent = language.EngTr.Main2;
    //         nav3.textContent = language.EngTr.Main3;
    //         nav4.textContent = language.EngTr.Main4;
    //         nav5.textContent = language.EngTr.Main5;
    //         nav6.textContent = language.EngTr.Main6;
    //         Consult.textContent = language.EngTr.Consult;
    //         type1.placeholder = language.EngTr.type1;
    //         type2.placeholder = language.EngTr.type2;
    //         type3.placeholder = language.EngTr.type3;
    //         send.textContent = language.EngTr.Send;
    //     }
    // };
    // let dataReload = document.querySelectorAll("[data-reload]");
    // for (let i = 0; i <= dataReload.length; i++) {
    //     dataReload[i].onclick = function () {
    //         location.reload(true);
    //     }
    // }
