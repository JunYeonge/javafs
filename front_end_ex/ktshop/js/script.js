$(function(){
	
	
/*상단 버튼 영역*/	
	$(".kt_shop ul").hide();
	
	$(".kt_shop p").click(function(){
		var p = $(".kt_shop ul").css("display");
		if(p=="none"){
			$(".kt_shop ul").stop().slideDown();
		}else{
			$(".kt_shop ul").stop().slideUp();
		}
	});
	
	/*gnb menu 영역*/
	
	$(".next").click(function(){
		$(".side ul").stop().animate({
			"left":"-25%"
		});
	});
	
	$(".prev").click(function(){
		$(".side ul").stop().animate({
			"left":"0"
		});
	});

/*BX 슬라이드 영역*/	
	
	$(".bximg").bxSlider({
		auto:true,
		speed:1000,
		pause:4000,
		autoHover:true,
		infiniteLoop:true,
		pager:true,
		controls:true,
		hideControlOnEnd:true
	});
	
/*보류 모바일 메뉴*/	
	$(".week ul li").click(function(){
		var i = $(this).index();
		
		$(".week ul li").removeClass("on");
		$(this).addClass("on");
		
		$(".mobile_cover .phone").hide();
		$(".mobile_cover #phone_tab"+i).show();
		
		return false;
	});
	
/*유툽 영역*/

	var k=2;
	$(".bbtn").click(function(){
		var h = $(".tip_left > ul > li").height();
		
		k++;
		if(k==5){
			k=4;
		}
		
		
		$(".tip_left ul").stop().animate({
			"top":"-"+(k*h)-40+"px"
		},500);
		console.log(k);
		//console.log(position);
		
		return false;
	});
	
	$(".tbtn").click(function(){		
		var h = $(".tip_left > ul > li").height();
		
		k--;
		if(k==2){
			k=0;
			$(".tip_left ul").stop().animate({
				"top":"40px"
			},500, function(){
				k=2;
			});
			console.log(k);
		} 
		if(k<0){
			k=0;
			$(".tip_left ul").stop().animate({
				"top":"40px"
			},500, function(){
				k=2;
			});
			console.log(k);
		}
		if(k==3 || k==4){
		
			$(".tip_left ul").stop().animate({
				"top":"-"+(k*h)-40+"px"
			},500);
			console.log(k);
		}
			
			return false;
		
		//console.log(position);
	});
	
	/*홈서비스*/ /*on class 순서 (html)*/
	
	$(".home_top ul li").click(function(){
		
		var a = $(this).index();
	
		$(".home_top ul li").removeClass("on");
		$(this).addClass("on");
		
		$(".ser_cover").hide();
		$("#ser_tap"+a).show();
		
		return false;
	});
	
	$(".tip_cover .tip_left > ul > li").click(function(){
		var tip = $(this).index();
		
		$(".tip_cover .tip_left > ul > li").css("color","#333");
		$(this).css("color","crimson");
		
		$(".tip_cover .tip_left > ul > li").find("p").css("display","block");	
		$(this).find("p").css("display","none");
	
		$(".tip_cover .tip_left > ul > li").find("span").css("display","none");
		$(this).find("span").css("display","block");
		
	$(".tip_right iframe").hide();
	$(".tip_right iframe").eq(tip).show();
		
	});

/*악세사리 슬라이드 영역*/

	var n = 0;

	$(".glt .gt").click(function(){
		 n++;
		 if(n==3){
			 n=0;
		 }
		 
		$(".right_top > ul > li").eq(n).css("left","100%").animate({
			"left":"0"
		});
		
		$(".right_top > ul > li").eq(n-1).css("left","0").animate({
			"left":"-100%"
		});
		
		$(".circle > ul > li").removeClass("on");
		$(".circle > ul > li").eq(n).addClass("on");
	});
	
	$(".glt .lt").click(function(){
		
		 n--;
		 if(n==-3){
			 n=0;
		 }
		 
		$(".right_top > ul > li").eq(n).css("left","-100%").animate({
			"left":"0"
		});
		
		$(".right_top > ul > li").eq(n+1).css("left","0").animate({
			"left":"100%"
		});
		$(".circle > ul > li").removeClass("on");
		$(".circle > ul > li").eq(n).addClass("on");
	});
	
	/*엑세서리 동그라미 클릭했을때 원하는 선택자로 이동하기.*/
	/*동영상 크기 맞추기*/
	
/*footer 보류*/
	
	$(".fam > ul").show();
	
	$(".fam").click(function(){
		$(".fam.onclick > ul").toggleClass("on");
		return false;
	});
	
	/*fixed bot 영역*/
	
	$(".talk_top > a").click(function(){
			$("#talk_about").toggleClass("toggle");
			
			return false;
	});
	
	/*right menu 영역*/
	
	$(".right_search").hide();
	
	$(".menu_right li").eq(0).click(function(){
		var search = $(".right_search").css("display");
		
	if(search=="none"){
		$(".right_search").stop().slideDown(600);
	}else{
		$(".right_search").stop().slideUp(600);
	}
		
		
	});
	
	$(".close_cover a").click(function(){
		$(".right_search").stop().slideUp(600);
	});
	
	/*bar menu 영역*/
	
	
	
	$("#bar_full").hide();
	
	
	$(".menu_right li").eq(1).click(function(){
		var barf = $("#bar_full").css("display");
		
		if(barf=="none"){	
			$("#bar_full").stop().slideDown(600);
		}else{
		$("#bar_full").stop().slideUp(600);
		}
	});
		
		$(".down_cover a").click(function(){
			$("#bar_full").stop().slideUp(600);
		});
	
		
	
		/*아코디언*/
		
		$(".bar_cover dl dt").click(function(){
			var d = $(this).next("dd").css("display");
		
		if(d=="none"){
			$(this).next("dd").stop().slideDown();
		}else{
			$(this).next("dd").stop().slideUp();
		}
		

		
	});
	
	
});