$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 470) {
            $('.nav-tabs').addClass('fixed')
        }
        else {
              $('.nav-tabs').removeClass('fixed');
        }
    });


    $('.mobile').click(function(){
    	$('.types').slideToggle()
    })
});