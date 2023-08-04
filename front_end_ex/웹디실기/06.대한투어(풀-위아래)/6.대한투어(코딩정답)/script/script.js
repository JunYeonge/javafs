$(function(){
		
	// ===================== 풀메뉴
	
				$("nav>ul>li, .background").mouseenter(function(){
					$('.submenu, .background').stop().slideDown();
				});
				$("nav>ul>li, .background").mouseleave(function(){
					$('.submenu, .background').stop().slideUp();
				});
				
	// ===================== 위아래슬라이딩	
				
				var x = 0;
				setInterval (function(){ 
					if(x < 2) {
						x++;
					} else {
						x = 0;
					} 
					var sliderPosition = x * (-300)+"px"; 									 
					$(".sliderList").animate({top:sliderPosition},400); // 0.4초 
					
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
				// var sliderPosition = x * (-300)+"px"; 
									// 0 * -300 = 0
									// 1 * -300 = -300 
									// 2 * -300 = -600 
				// .on 이벤트 등록 메서드
				// .slideDown > 선택 요소를 말아내리듯 노출
				// .slideUp > 선택 요소를 말아올리듯 숨김
				// .mouseenter > 마우스가 선택한 요소에 들어왔을때
				// .mouseleave > 마우스가 선택한 요소에서 나갔을때 
				// .fadeOut(); 서서히 사라짐
				// .fadeIn(); 서서히 나타짐	