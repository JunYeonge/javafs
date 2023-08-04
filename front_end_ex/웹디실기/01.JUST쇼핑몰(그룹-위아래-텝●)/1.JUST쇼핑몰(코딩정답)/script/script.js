$(function(){

	// ===================== 그룹메뉴
	
				
					$('nav>ul>li').mouseenter(function(){
						$('ul.submenu').stop().slideDown(400);
					});
					$('nav>ul>li').mouseleave(function(){
						$('ul.submenu').stop().slideUp(400);
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

	// ===================== 텝메뉴

				$("h2").on("click",function(){
					$(this).addClass('on')
					.siblings('h2').removeClass('on');
				});
		
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
				// x * (-300)+"px"; 
					// 0 * -300 = 0
					// 1 * -300 = -300 
					// 2 * -300 = -600 
					
				// setInterval : 일정시간동안 반복하여 실행	
				// .on 이벤트 등록 메서드
				// .addClass 선택한 요소에 새클래스 생성
				// .removeClass 선택한 요소에 지정한 클래스 삭제
				// .siblings 선택한 요소를 기준으로 형제 요소들 모두 선택
				