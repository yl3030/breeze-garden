AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

var swiperBeauty = new Swiper(".beauty_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".beauty_swiper-next",
        prevEl: ".beauty_swiper-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

var swiperVVIP = new Swiper(".vvip_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

var swiperSunSmall = new Swiper(".sun_swiper-small", {
    slidesPerView: 3,
    spaceBetween: 10,
})

var swiperSun = new Swiper(".sun_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiperSunSmall,
    },
})

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "zhulixdesign@gmail.com, zhuli705098@gmail.com, isly52033@gmail.com, yl301114@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "微風莊園預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>手機:" + document.getElementById("phone").value
                + "<br>信箱:" + document.getElementById("email").value
                + "<br>居住地區:" + document.getElementById("area").value
                + "<br>留言:" + document.getElementById("remark").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}

$(".life_pic").click(function(){
    $(".map-popup").fadeIn(300).css("display","flex");
})

$(".map-popup").click(function(){
    $(this).fadeOut(300);
})
