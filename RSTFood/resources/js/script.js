$(document).ready(function(){

    /*--------------sticky-nav bar-------------*/
   $('.js-get-details').waypoint(function(direction){

    if(direction=='down'){
        $('nav').addClass('sticky-nav');
    }
    else{
        $('nav').removeClass('sticky-nav');
    }
   }
    ,{ offset: '60px;'

   }); 
});


 /*--------------making-button work-------------*/
$('.js-scroll-to-plan').click(function(){
    $('html,body').animate({scrollTop: $('.js-section-plan').offset().top},1000)

});

$('.js-scroll-to-start').click(function(){
    $('html,body').animate({scrollTop: $('.js-get-details').offset().top}, 1000)

});

// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })