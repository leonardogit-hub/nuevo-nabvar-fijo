let elementTop = $('.nav').offset().top;

$(window).scroll(function(){
	if( $(window).scrollTop() >= elementTop){
		$('body').addClass('nav_fixed'); 
	}else{
		$('body').removeClass('nav_fixed');
	}
});




document.addEventListener('scroll', () => {
const header =document.querySelector('header');

if (window.scroll > 0) {
header.classlist.add('scrolled');
} else {
header.classlist.remove('scrolled');
}
}); 