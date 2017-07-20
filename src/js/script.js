var navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toogle'),
    aside = document.querySelector('.aside'),
    asideToggle = document.querySelector('.aside__toogle' ),
    slideItemMinReply = document.querySelectorAll('.main-info__comments-reply'),
    singup = navMain.querySelector('.main-nav__item--signup'),
    popup = document.querySelector('.popup-form'),
    overlay = document.querySelector('.popup-overlay')
    popupClose = popup.querySelector('.popup-form--close');

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

popupClose.addEventListener('click', function (e) {
	if(overlay.classList.contains('popup-overlay--show')) {
			overlay.classList.remove('popup-overlay--show');
			popup.classList.remove('popup-form--show');
		}
});

window.addEventListener('keydown', function (e) {
	if(e.keyCode === 27) {
		if(overlay.classList.contains('popup-overlay--show')) {
			overlay.classList.remove('popup-overlay--show');
			popup.classList.remove('popup-form--show');
			sliderLarge.removeClass('slider__large--show');
		}
	}
});

overlay.addEventListener('click', function (e) {
	if(overlay.classList.contains('popup-overlay--show')) {
			overlay.classList.remove('popup-overlay--show');
			popup.classList.remove('popup-form--show');
			sliderLarge.removeClass('slider__large--show');
		}
});

singup.addEventListener('click', function () {
	popupShow();
});

function popupShow () {
	overlay.classList.add('popup-overlay--show');
	popup.classList.add('popup-form--show');
}


//--Slider

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

	slideItemMin.click(function() {
		slideActive.removeClass('slider-min__item--active');
		$(this).addClass('slider-min__item--active');
		slideActive = $(this);
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -sliderItemImg.width() * (navBtnId);
            $('.slider__item').css(
                'transform', 'translate(' + translateWidth + 'px, 0)'
            );
            slideNow = navBtnId + 1;
        }
    });

    sliderMin.click(function () {
    		sliderLarge.addClass('slider__large--show');
    		overlay.classList.add('popup-overlay--show');
    	});

    getFullWidth(slideItemMin);
})	

function nextSlide () {
	slideActive.removeClass('slider-min__item--active');
	if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
		sliderItem.css('transform', 'translate(0, 0)');
		slideNow = 1;
		navBtnId = slideNow -1;
		slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
		slideActive = slideItemMin.eq(navBtnId);
		if (getFullWidth > sliderMin) {
			slideItemMin.css('transform', 'translate(0, 0)');
		}
		
	} else {
		translateWidth = -sliderItemImg.width() * (slideNow);
		sliderItem.css(
			'transform', 'translate(' + translateWidth + 'px, 0)');
		slideNow++;
		navBtnId = slideNow -1;
		slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
		slideActive = slideItemMin.eq(navBtnId);
		if (getFullWidth > sliderMin) {
			translateWidthMin = -sliderItemImgMin.width()/2 * (slideNow);
			slideItemMin.css(
			'transform', 'translate(' + translateWidthMin + 'px, 0)');
		}
	}
}

function prevSlide () {
	slideActive.removeClass('slider-min__item--active');
	if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
		translateWidth = -sliderItemImg.width() * (slideCount - 1);
		sliderItem.css(
			'transform', 'translate(' + translateWidth + 'px, 0)');
		slideNow = slideCount;
		navBtnId = slideNow -1;
		slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
		slideActive = slideItemMin.eq(navBtnId);
		if (getFullWidth > sliderMin) {
			translateWidthMin = -sliderItemImgMin.width()/2 * (slideCount-1);
			slideItemMin.css(
			'transform', 'translate(' + translateWidthMin + 'px, 0)');
		}
	} else {
		translateWidth = -sliderItemImg.width() * (slideNow - 2);
		sliderItem.css(
			'transform', 'translate(' + translateWidth + 'px, 0)');
		slideNow--;
		navBtnId = slideNow -1;
		slideItemMin.eq(navBtnId).addClass('slider-min__item--active');
		slideActive = slideItemMin.eq(navBtnId);
		if (getFullWidth > sliderMin) {
			translateWidthMin = -sliderItemImgMin.width()/2 * (slideNow-2);
			slideItemMin.css(
			'transform', 'translate(' + translateWidthMin + 'px, 0)');
		}
	}
}