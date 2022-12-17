

function CheckName(){
  var name= document.getElementById('name');
   if(name.value=='' || name.value.length < 2){
   	name.style="border-color:red;";
   }else{
   	name.style= "border-color:green;";
   }
}

function CheckEmail(){
   var email= document.getElementById('email');
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
     email.style ="border-color:green;";
  } else {

  email.style= "border-color:red;";
  }
}

function CheckPhone(){
	var phone=document.getElementById('phone');
    if(phone.value==''|| phone.value.length<10){
    	phone.style="border-color:red";
    }else{
     phone.style="border-color:green";
    }
}

function Submit(){
   var name= document.getElementById('name');
   var email= document.getElementById('email');
   var phone=document.getElementById('phone');
   var subject=document.getElementById('subject');
   var message=document.getElementById('message');

   
   if(phone.value==''|| phone.value.length<10){
   	document.getElementById('empty_notice').innerHTML="<span>Please check phone lenght</span>";
   	document.getElementsByClassName('returnmessage').style="display:none; ";
   	document.getElementById('empty_notice').style="display:block; color:red";
   	return false;
   }
   else if(name.value=='' || name.value.length<2){
   	document.getElementById('empty_notice').innerHTML="<span>Please check name lenght</span>";
   	document.getElementsByClassName('returnmessage').style="display:none; ";
   	document.getElementById('empty_notice').style="display:block";
   	return false;
   }else if(email.value==''){
   	document.getElementById('empty_notice').innerHTML="<span>Please check email</span>";
   	document.getElementById('empty_notice').style="display:block";
   	document.getElementsByClassName('returnmessage').style="display:none; ";
   	return false;

   } else if(subject.value==''|| message.value==''){
   	document.getElementById('empty_notice').innerHTML="<span>subject and message can not be null</span>";
   	document.getElementById('empty_notice').style="display:block";
   	document.getElementsByClassName('returnmessage').style="display:none; ";
   }else{
   	document.getElementById('empty_notice').style="display:none";
   	document.getElementById('returnmessage').innerHTML="<span>your message has been received please check your inbox for our confirmation email</span>";
   	document.getElementById('returnmessage').style="display:block; color:green;";
   	 
   }
   
}

jQuery(document).ready(function(){
	"use strict";
	navigationbg();
	menus();
	progress(); 
	portfolio()
	cursor();
	owl_carousel();
	topslider();
	down();
	jQuery(window).on('scroll', function(){
		topsliderline();
	});
	
});


function navigationbg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.header');
		var progress	 	= jQuery('.progressbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
			progress.addClass('animate');
		}else{
			menu.removeClass('animate');
			progress.removeClass('animate');
		}
	});
}


function menus(){
	
	"use strict";

	var hamburger 		= jQuery('.trigger .hamburger');
	var mobileMenu		= jQuery('.mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}




function mainProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		var number 			= progress.find('.number');
		var label 			= progress.find('.label');
		number.css({right:(100 - pValue)+'%'});
		setTimeout(function(){label.addClass('opened');},500);
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}
function progress(wrapper){
	
	"use strict";
	
	var element;
	if(wrapper){
		element = wrapper.find('.progress');
	}else{
		element = jQuery('.progress');
	}
	element.each(function() {
		var pWrap = jQuery(this);
		pWrap.find('.number').css({right:'100%'});
		console.log(pWrap.find('.number').length);
		pWrap.waypoint({handler: function(){mainProgress(pWrap);},offset:'90%'});	
	});
}



function cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inside"),
            t = document.querySelector(".cursor-outside");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};



function owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.testimonials .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}

	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: true,
		rtl:rtlMode,
		nav: false,
		navSpeed: false
	});
	
	var carousel2 = jQuery('.companies .owl-carousel');

	carousel2.owlCarousel({
		loop: true,
		items: 3,
		lazyLoad: false,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive:{
			0:{items:2},
			480:{items:3},
			768:{items:3},
			1300:{items:5},
		}
	});
}


function topsliderline(){
	
	"use strict";
	
	var line			= jQuery('.progressbar .line');
	var documentHeight 	= jQuery(document).height();
	var windowHeight 	= jQuery(window).height();
	var winScroll 		= jQuery(window).scrollTop();
	var value 			= (winScroll/(documentHeight-windowHeight))*100;
	var position 		= value;

	line.css('height',position+"%");
}


function topslider(){
  
	"use strict";
	
	var text = $('.progressbar .text');
	text.css({bottom: 105 + text.width()});
	$(".progressbar a").on('click', function(e) {
		e.preventDefault();    
		$("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
	
}


jQuery('.anchor_nav').onePageNav();

function down(){
	
	"use strict";
	
	var topbar	= jQuery('.header').outerHeight();
	
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar-50
			}, 800);
		}
		
		return false;
	});
}

function portfolio(){

	"use strict";

	if(jQuery().isotope) {
		var filter		 = jQuery('.portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var element		= jQuery(this);
				var selector 	= element.attr('data-filter');
				var list		= element.closest('.portfolio').find('.portfolio_list').children('ul');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});	
		}
	}
}
var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".viewmodal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);