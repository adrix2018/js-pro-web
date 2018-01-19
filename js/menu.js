$(document).ready(function() {
	$('.mobile').click(function() {
		$('ul').toggleClass('active');
	})
})

// Scroll
$(document).ready(function() {

  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
  });

});

// Dropdown

$(function(){
    $('ul > li').hover(function(){
        //$('#drop' , this).css('display','block');
         $(this).children('ul').delay(20).slideDown(200);
    }, function(){
         $(this).children('ul').delay(20).slideUp(200);
    });
});
