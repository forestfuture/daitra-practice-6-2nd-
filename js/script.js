// slick
$(document).ready(function () {
    $('.results-slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false
    });
});

// navScroll
jQuery('a[href^="#"]').on("click", function() {
    var header = jQuery(".header").innerHeight();
    var id = jQuery(this).attr("href");
    var position = 0;

    if( id != "#"){
        var position = jQuery(id).offset().top - header;   
    }
    
    jQuery("html, body").animate({
        scrollTop:position
    },
    1000);
});

// mobileNav
$(function() {
    
    $(".nav-list-item-link").on("click", function(){
        if(window.matchMedia("(max-width:767px)").matches) {
            $(".header-nav-list").removeClass("open-now");

            if($(".header-nav-list").hasClass("open-now")){
                $("body").css("overflow", "hidden");
                $(".header-logo").fadeOut();
                $(".nav-bg").fadeIn();
                $(".nav-toggle").css("right", "300px");
            }else{
                $("body").css("overflow", "auto");
                $(".header-logo").fadeIn();
                $(".nav-bg").fadeOut();
                $(".nav-toggle").css("right", "17px");
            }                
        }
    });

    $(".nav-toggle").on("click", function(){
        $(".header-nav-list").toggleClass("open-now");  

        if($(".header-nav-list").hasClass("open-now")){
            $("body").css("overflow", "hidden");
            $(".header-logo").fadeOut();
            $(".nav-bg").fadeIn();
            $(".nav-toggle").css("right", "300px");
        }else{
            $("body").css("overflow", "auto");
            $(".header-logo").fadeIn();
            $(".nav-bg").fadeOut();
            $(".nav-toggle").css("right", "17px");
        }                
    });    
});

// faqs
$(function() {
    $(".open-now").next().slideToggle(); 

    $(".faqs-box-q").on("click", function(){
        $(this).toggleClass("open-now");
        $(this).next().slideToggle();
    })  
})

// formの入力確認
let $submit = $("#js-submit")
$( "#js-form input, #js-form textarea" ).on("change", function(){
    if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[name="privacy"]').prop("checked") === true
    ) {
        // 全て入力されたとき
        $submit.prop("disabled", false)
        $submit.addClass("-active")
    } else
    {
        // 入力されていないとき
        $submit.prop("disabled", true)
        $submit.removeClass("-active")
    }
})

// to-top
$(".to-top").fadeOut();
$(window).on("scroll", function(){

    if($(this).scrollTop() > 300){
        $(".to-top").fadeIn();
    }else{
        $(".to-top").fadeOut();
    }
})


