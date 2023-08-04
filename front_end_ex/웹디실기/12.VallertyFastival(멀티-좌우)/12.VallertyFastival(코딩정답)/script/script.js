$(function(){
	// ===================== 멀티메뉴
    
				$('ul.mainmenu>li').hover(function(){
						$(this).find('.submenu').stop().show();
					},
					function(){
						$(this).find('.submenu').stop().hide();
					});

	// ===================== 좌우슬라이딩
				
				var x = 0;
				setInterval (function(){ 
					if(x < 2) {
						x++;
					} else {
						x = 0;
					} 
					var sliderPosition = x * (-800)+"px"; 									  
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

			// console.log(x); -> 콘솔창에서 확인 
			// setInterval : 일정시간동안 반복하여 실행
			// var sliderPosition = x * (-800)+"px"; 
										// 0 * -800 = 0
										// 1 * -800 = -800 
										// 2 * -800 = -1600   
			// .fadeOut(); 서서히 사라짐
			// .fadeIn(); 서서히 나타짐	
			// .show(); -> 보기 
			// .hide(); -> 가리기 			
			// .on 이벤트 등록 메서드			
			// e.preventDefault(); -> 링크차단메서드 
			// $(this).find -> 이벤트가 일어난 요소에서 찾기 