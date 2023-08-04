$(function(){
	// ===================== 풀메뉴
				$("nav>ul>li, .background").mouseenter(function(){
					$('.submenu, .background').stop().slideDown();
				});
				$("nav>ul>li, .background").mouseleave(function(){
					$('.submenu, .background').stop().slideUp();
				});
    
	// ===================== 페이드 인아웃 슬라이딩

		$(".sliderList").children("div:gt(0)").hide();
		var x = 0;
		setInterval(function(){
					var next = (x + 1) % 3;
						 $(".sliderList").find("div").eq(x).fadeOut();
						 $(".sliderList").find("div").eq(next).fadeIn();
					x = next;							
		 },3000); // 3초
		 
	// ===================== 레이어 팝업
	
				$(".layerPopup").on("click",function(e){
						e.preventDefault();
						$("#popup").fadeIn();
				});
				$(".close").on("click",function(){      
						$("#popup").fadeOut();
				});	
});

			// console.log(x); -> 콘솔창에서 확인 
			// var next = (x + 1) % 3;
					// 0 + 1 = 1 
					// 1 + 1 = 2
					// 2 + 1 = 3/0
			// .gt(0) -> 첫번째 요소 이후 요소 선택 
			// .eq(변수) -> 지정한 변수만 선택 
			// .fadeOut(); 서서히 사라짐
			// .fadeIn(); 서서히 나타짐	
			
			