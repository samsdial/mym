"use strict";$(function(){$("main section");$(".nav_trigger").on("click",function(){$("header").toggleClass("nav-is-visible")}),$(".slider").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear"}),$(".multi-item").slick({infinite:!0,slidesToShow:5,slidesToScroll:5,dots:!0,arrows:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".promo-item").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,arrows:!1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:950,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})});
//# sourceMappingURL=custom.js.map
