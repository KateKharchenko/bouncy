'use strict';
// (function() {
// })();

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: "../img/favicon.png"
        });
      }
      

      $('.slider').slick({
		  
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 300,
	});
	var gallery = $('.images').isotope({
	  itemSelector: '.images__column',
	  layoutMode: 'masonry'
	});


$('.tags li a').on( 'click', function(e) {
	e.preventDefault();
	$('.tags li a').removeClass('active');
	$(this).addClass('active');
	var filter = $(this).attr('data-filter');
	if (filter == '*') {
		gallery.isotope({ filter: filter });

	} else {
		gallery.isotope({ filter: '.' + filter });
		
	}
	console.log(gallery);
});

$(".anchor").click(function(e) {
    		e.preventDefault();
    		// $('.header-nav').removeClass('open');
    		$('.header-toggler input').prop('checked',false).trigger('change');
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1000,
         easing: "swing"
      });
      
   });

// $(document).ready(function(){
// 	$("body").on("click","a", function (event) {
//  	event.preventDefault();
// 	var id  = $(this).attr('href'),
// 	top = $(id).offset().top;
// 	$('body,html').animate({scrollTop: top}, 6500);
//  	});
// });