$(function(){
	
	// ===================== 풀메뉴
	
				$("nav>ul>li").mouseenter(function(){
					$('.submenu, .background').stop().slideDown();
				});
				$("nav>ul>li").mouseleave(function(){
					$('.submenu, .background').stop().slideUp();
				});
    
	// ===================== 좌우슬라이딩

				var x = 0;
				setInterval (function(){ 
					if(x < 2) {
						x++;
					} else {
						x = 0;
					} 
					var sliderPosition = x * (-1200)+"px"; 
									 
					$(".sliderList").animate({left:sliderPosition},400); // 0.4초 					
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


				// console.log(x);  -> 콘솔창에서 확인 
				// setInterval : 일정시간동안 반복하여 실행				
				// x * (-1200)+"px"; 
										// 0 * -1200 = 0
										// 1 * -1200 = -1200
										// 2 * -1200 = -2400  
				// .fadeOut(); 서서히 사라짐
				// .fadeIn(); 서서히 나타짐		
				