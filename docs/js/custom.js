"use strict";$(function(){$("main section");$(".nav_trigger").on("click",function(){$("header").toggleClass("nav-is-visible")}),$(function(){var i,s,o;if($(".nav ul li a[href*=#]").click(function(){var i,s;if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&(i=$(this.hash),(i=i.length&&i||$("[name="+this.hash.slice(1)+"]")).length))return s=i.offset().top-80,$("html,body").animate({scrollTop:s},1e3),!1}),o=window.location.href.split("#"),window.location.href[1]&&(i=$("#"+o[1])).length)return s=i.offset().top-80,$("html,body").animate({scrollTop:s},1e3),!1}),$(".slider").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear"}),$(".multi-item").slick({infinite:!0,slidesToShow:4,slidesToScroll:4,dots:!1,arrows:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".promo-item").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,arrows:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".quality-item").slick({infinite:!0,slidesToShow:5,slidesToScroll:5,arrows:!1,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,arrows:!0}},{breakpoint:950,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})});
//# sourceMappingURL=custom.js.map