//初始化 swiper
var mySw = new Swiper('.swiper-container', {
	autoplay: 2000, //两秒切换一次
	autoplayDisableOnInteraction: false, //滑动以后继续轮播(在触摸的时候不能自动切换，为false之后 可以自动切换)
	nextButton: '.swiper-button-next', //前后按钮
	prevButton: '.swiper-button-prev',
	pagination: '.swiper-pagination', //圆点
	speed: 1000,
	effect: "fade"
})

$(".shop-empty").hide()
$(".shop").hover(function() {
	$(".shop-empty").stop().slideToggle()
})

$(".nav-down,.nav-down ul").hide()
$("#nav>ul>li").hover(function() {
	$(this).find(".nav-down,.nav-down ul").stop().slideToggle()
})
$(".phone-show,.phone-show>ul").hide()
$(".tou>li").hover(function() {
	$(this).find(".phone-show,.phone-show ul").stop().toggle()
})

$(".hua").hide()
$(".jiadian_right>ul>li").hover(function() {
	$(this).find(".hua").stop().slideToggle()
})

$(".bgm").hover(function() {
	$(this).addClass("bgm_shadow")
}, function() {
	$(this).removeClass("bgm_shadow")
})

$(".jiadian_right>ul>li").hover(function() {
	$(this).addClass("bgm_shadow")
	$(".jiadian_right>ul:last-child>li:last-child").removeClass("bgm_shadow")
}, function() {
	$(this).removeClass("bgm_shadow")
})
$(".jiadian_left>img").hover(function() {
	$(this).addClass("bgm_shadow")
}, function() {
	$(this).removeClass("bgm_shadow")
})
$("#content>ul>li").hover(function() {
	$(this).addClass("bgm_shadow")
}, function() {
	$(this).removeClass("bgm_shadow")
})



//小米明星单品   （滑动动画）
$(".l").css("color", "lightgray")
$(".l").click(function() {
	$(".l").css("color", "lightgray")
	$(".r").css("color", "black")

	$(".dong").animate({
		"left": "0"
	})
})
$(".r").click(function() {
	$(".r").css("color", "lightgray")
	$(".l").css("color", "black")

	$(".dong").animate({
		"left": "-1226px"
	})
})