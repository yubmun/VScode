$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
}) ///저기서 this 는 .menu li 

$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})