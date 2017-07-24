var navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toogle'),
    aside = document.querySelector('.aside'),
    asideToggle = document.querySelector('.aside__toogle' ),
    slideItemMinReply = document.querySelectorAll('.main-info__comments-reply'),
    singup = navMain.querySelector('.main-nav__item--signup'),
    popup = document.querySelector('.popup-form'),
    overlay = document.querySelector('.popup-overlay')
    popupClose = popup.querySelector('.popup-form--close'),
    body = document.querySelector('body');

 var   body = document.querySelector('body');

navToggle.addEventListener('click', function (e) {
		navMain.classList.toggle('main-nav--opened');
		navToggle.classList.toggle('main-nav__toogle--opened');
});

asideToggle.addEventListener('click', function (e) {
		aside.classList.toggle('aside--opened');
		asideToggle.classList.toggle('aside__toogle--opened');
});

(function () {
	if (slideItemMinReply.length >= 4) {
  		for (var i = 3; i < slideItemMinReply.length; i++) {
    		slideItemMinReply[i].classList.add('main-info__comments-reply--last');
  		}
	}
}());




// popupClose.addEventListener('click', function (e) {
// 	if(overlay.classList.contains('popup-overlay--show')) {
// 			overlay.classList.remove('popup-overlay--show');
// 			//popup.classList.remove('popup-form--show');
// 		}
// });

// window.addEventListener('keydown', function (e) {
// 	if(e.keyCode === 27) {
// 		if(overlay.classList.contains('popup-overlay--show')) {
// 			overlay.classList.remove('popup-overlay--show');
// 			//popup.classList.remove('popup-form--show');
// 			sliderLarge.removeClass('slider__large--show');
// 			body.classList.remove('prevent-scroll');
// 		}
// 	}
// });

// // overlay.addEventListener('click', function (e) {
// // 	if(overlay.classList.contains('popup-overlay--show')) {
// // 			overlay.classList.remove('popup-overlay--show');
// // 			//popup.classList.remove('popup-form--show');
// // 			sliderLarge.removeClass('slider__large--show');
// // 			body.classList.remove('prevent-scroll');
// // 		}
// // });

// singup.addEventListener('click', function () {
// 	popupShow();
// 	// if (navMain.classList.contains('main-nav--opened')) {
// 	// 		navMain.classList.remove('main-nav--opened');
// 	// 		navToggle.classList.remove('main-nav__toogle--opened');
// 	// }
// });

// function popupShow () {
// 	overlay.classList.add('popup-overlay--show');
// 	//popup.classList.add('popup-form--show');
// 	body.classList.add('prevent-scroll');

// }


$(document).ready(function() {

	popupClose.addEventListener('click', function (e) {
		if(overlay.classList.contains('popup-overlay--show')) {
				overlay.classList.remove('popup-overlay--show');
				//popup.classList.remove('popup-form--show');
				body.classList.remove('prevent-scroll');
			}
	});

	window.addEventListener('keydown', function (e) {
		if(e.keyCode === 27) {
			if(overlay.classList.contains('popup-overlay--show')) {
				overlay.classList.remove('popup-overlay--show');
				//popup.classList.remove('popup-form--show');
				sliderLarge.removeClass('slider__large--show');
				body.classList.remove('prevent-scroll');
			}
		}
	});

	singup.addEventListener('click', function () {
		popupShow();
		// if (navMain.classList.contains('main-nav--opened')) {
		// 		navMain.classList.remove('main-nav--opened');
		// 		navToggle.classList.remove('main-nav__toogle--opened');
		// }
	});

	function popupShow () {
		overlay.classList.add('popup-overlay--show');
		//popup.classList.add('popup-form--show');
		body.classList.add('prevent-scroll');
	}
});


// --Slider

var slideNow = 1,
	slideCount = $('.slider__items').children().length,
	translateWidth = 0,
	translateWidthMin = 0,
	slideActive = $('.slider-min__item--active'),
	sliderItem = $('.slider__item'),
	sliderItemImg = $('.slider__item img'),
	sliderItemImgMin = $('.slider-min__item img'),
	nextBtn = $('.next-btn'),
	prevBtn = $('.prev-btn'),
	slideItemMin = $('.slider-min__item'),
	sliderMin = $('.slider-min__items'),
	navBtnId = 0,
	sliderLarge = $('.slider__large'),
	width = 0;


function getFullWidth (arr) {
	for (var i = 0; i < arr.length; i++) {
		width += arr.eq(i).width();
	}
	return width
}

$(document).ready(function () {

	nextBtn.click(function () {
		nextSlide();
	});

	prevBtn.click(function () {
		prevSlide();
	});


	// slideItemMin.click(function() {
	// 	slideActive.removeClass('slider-min__item--active');
	// 	$(this).addClass('slider-min__item--active');
	// 	slideActive = $(this);
 //        navBtnId = $(this).index();
 //        if (navBtnId + 1 != slideNow) {
 //            translateWidth = -sliderItemImg.width() * (navBtnId);
 //            $('.slider__item').css(
 //                'transform', 'translate(' + translateWidth + 'px, 0)'
 //            );
 //            slideNow = navBtnId + 1;
 //        }
 //    });

 //    sliderMin.click(function () {
 //    		sliderLarge.addClass('slider__large--show');
 //    		overlay.classList.add('popup-overlay--show');
 //    	});

    getFullWidth(slideItemMin);
})	


function nextSlide () {
	if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
		slideNow = 1;
		slideItemMin.css('transform', 'translate(0, 0)');
		
	} else {

		slideNow++;
		translateWidthMin = -sliderItemImgMin.width() * (slideNow);
		slideItemMin.css(
			'transform', 'translate(' + translateWidthMin + 'px, 0)');
	}
}

function prevSlide () {
	if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
		slideNow = slideCount;
		translateWidthMin = -sliderItemImgMin.width() * (slideCount-1);
		slideItemMin.css(
			'transform', 'translate(' + translateWidthMin + 'px, 0)');
	} else {

		slideNow--;
		translateWidthMin = -sliderItemImgMin.width() * (slideNow-2);
		slideItemMin.css(
			'transform', 'translate(' + translateWidthMin + 'px, 0)');
	}
}
































// function nextSlide () {
// 	//slideActive.removeClass('slider-min__item--active');
// 	if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
// 		//sliderItem.css('transform', 'translate(0, 0)');
// 		slideNow = 1;
// 		//navBtnId = slideNow -1;
// 		//slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
// 		//slideActive = slideItemMin.eq(navBtnId);
// 		if (getFullWidth > sliderMin) {
// 			slideItemMin.css('transform', 'translate(0, 0)');
// 		}
		
// 	} else {
// 		//translateWidth = -sliderItemImg.width() * (slideNow);
// 		//sliderItem.css(
// 		//	'transform', 'translate(' + translateWidth + 'px, 0)');
// 		slideNow++;
// 		//navBtnId = slideNow -1;
// 		//slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
// 		//slideActive = slideItemMin.eq(navBtnId);
// 		if (getFullWidth > sliderMin) {
// 			translateWidthMin = -sliderItemImgMin.width() * (slideNow);
// 			slideItemMin.css(
// 			'transform', 'translate(' + translateWidthMin + 'px, 0)');
// 		}
// 	}
// }

// function prevSlide () {
// 	//slideActive.removeClass('slider-min__item--active');
// 	if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
// 		//translateWidth = -sliderItemImg.width() * (slideCount - 1);
// 		//sliderItem.css(
// 		//	'transform', 'translate(' + translateWidth + 'px, 0)');
// 		slideNow = slideCount;
// 		//navBtnId = slideNow -1;
// 		//slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
// 		//slideActive = slideItemMin.eq(navBtnId);
// 		if (getFullWidth > sliderMin) {
// 			translateWidthMin = -sliderItemImgMin.width() * (slideCount-1);
// 			slideItemMin.css(
// 			'transform', 'translate(' + translateWidthMin + 'px, 0)');
// 		}
// 	} else {
// 		//translateWidth = -sliderItemImg.width() * (slideNow - 2);
// 		//sliderItem.css(
// 		//	'transform', 'translate(' + translateWidth + 'px, 0)');
// 		slideNow--;
// 		//navBtnId = slideNow -1;
// 		//slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
// 		//slideActive = slideItemMin.eq(navBtnId);
// 		if (getFullWidth > sliderMin) {
// 			translateWidthMin = -sliderItemImgMin.width() * (slideNow-2);
// 			slideItemMin.css(
// 			'transform', 'translate(' + translateWidthMin + 'px, 0)');
// 		}
// 	}
// }


$(document).ready(function() {

	// $('.popup-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',

	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [1, 2] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 		titleSrc: function(item) {
	// 			return item.el.attr('title');
	// 		}
	// 	}
	// });


	// $('.open-popup-link').magnificPopup({
	// 	type: 'inline',
	// 	overflowY: 'scroll'
	// });

	$('.slider__items').slick({
    	slidesToShow: 6,
  		slidesToScroll: 3,
  		infinite: false,
  		responsive: [
  			{
  				breakpoint: 800,
  				settings: {
  					slidesToShow: 4,
  					slidesToScroll: 1,
  				}
  			},
  			{
  				breakpoint: 500,
  				settings: {
  					slidesToShow: 3,
  					slidesToScroll: 1,
  				}
  			},
  		]
  	});


	mainInfo.css('margin-top', sticky.height() + 'px');
});

var sticky = $('.page-header');
var mainInfo = $('.main-info');


// $(window).resize(function () {
// 	mainInfo.css('margin-top', sticky.height() + 'px');
// });

// $(window).scroll(function () {
// 	mainInfo.css('margin-top', sticky.height() + 'px');
// });






function callBack () {
    var _overlay = document.querySelector('.mfp-bg');
    var _clientY = null; // remember Y position on touch start

    _overlay.addEventListener('touchstart', function (event) {
        if (event.targetTouches.length === 1) {
            // detect single touch
            _clientY = event.targetTouches[0].clientY;
        }
    }, false);

    _overlay.addEventListener('touchmove', function (event) {
        if (event.targetTouches.length === 1) {
            // detect single touch
            disableRubberBand(event);
        }
    }, false);

    function disableRubberBand(event) {
        var clientY = event.targetTouches[0].clientY - _clientY;

        if (_overlay.scrollTop === 0 && clientY > 0) {
            // element is at the top of its scroll
            event.preventDefault();
        }

        if (isOverlayTotallyScrolled() && clientY < 0) {
            //element is at the top of its scroll
            event.preventDefault();
        }
    }

    function isOverlayTotallyScrolled() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
        return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
    }
};

	// singup.addEventListener ('click', function () {
	// 	//var lay = document.querySelectorAll('.mfp-bg');
	// 	//console.log(lay);

	// 	$(document).ready(function () {
	// 		callBack ();
	// 	});
 		
 // 	});


// (function() {
//   /* Define a variável que dá swipe no lightbox */
//   var magnificPopup = $.magnificPopup.instance;

//   /* Carrega a função quando clica no lightbox (senão não pega a classe utilizada) */
//   $(".popup-gallery a").click(function(e) {

//     /* Espera carregar o lightbox */
//     setTimeout(function() {
//         /* Swipe para a esquerda - Próximo */
//         $(".mfp-container").swipe( {
//           swipeLeft:function(event, direction, distance, duration, fingerCount) {
//             console.log("swipe right");
//             magnificPopup.next();
//           },

//         /* Swipe para a direita - Anterior */
//         swipeRight:function(event, direction, distance, duration, fingerCount) {
//           console.log("swipe left");
//           magnificPopup.prev();
//         },
//         });
//     }, 500);
//   });

// }).call(this);


(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.popup-gallery').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = [1000, 667],
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'a', function(event) {
            event.preventDefault();
            
            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true,
                closeOnScroll: false,
                arrowKeys: true,
                shareEl: false,
                showHideOpacity: true,
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);