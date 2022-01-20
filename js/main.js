$(document).ready(function(){
    $('.list-product').slick({
        slidesToShow: 3,
        rows:2,
        variableWidth: false,
        infinite: false ,
        slidesToScroll: 1.6
    });
    $('.list-combo').slick({
        slidesToShow: 3,
        variableWidth: false,
        infinite: false ,
        slidesToScroll: 1.6
    });
   
});