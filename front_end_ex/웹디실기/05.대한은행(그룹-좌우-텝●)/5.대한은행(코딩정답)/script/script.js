$(function(){

	// ===================== 그룹메뉴
	
				$(function(){
					$('nav>ul>li').mouseenter(function(){
						$('ul.submenu').stop().slideDown(400);
					});
					$('nav>ul>li').mouseleave(function(){
						$('ul.submenu').stop().slideUp(400);
					});
				});
				
	// ===================== 좌우슬라이딩
				// setInterval : 일정시간동안 반복하여 실행
				var x = 0;
				setInterval (function(){ 
					if(x < 2) {
						x++;
					} else {
						x = 0;					} 
					var sliderPosition = x * (-1200)+"px"; 
										 
					$(".sliderList").animate({left:sliderPosition},400); // 0.4초 
					console.log(x); 
				},3000); // 3초	

	// ===================== 텝메뉴				

				$("h2").on("click",function(){
					$(this).addClass('on')
					.siblings('h2').removeClass('on');
				});				
						
	// ===================== 레이어 팝업
	
				$(".layerPopup").on("click",function(){						
						$("#popup").fadeIn();
				});
				$(".close").on("click",function(){      
						$("#popup").fadeOut();
				});	
				
				
				
				
});

					// console.log(x); -> 콘솔창에서 확인 
					// var sliderPosition = x * (-1200)+"px"; 
										// 0 * -1200 = 0
										// 1 * -1200 = -1200
										// 2 * -1200 = -2400   
					// .on 이벤트 등록 메서드
					// .addClass 선택한 요소에 새클래스 생성
					// .removeClass 선택한 요소에 지정한 클래스 삭제
					// .siblings 선택한 요소를 기준으로 형제 요소들 모두 선택
					// .slideDown > 선택 요소를 말아내리듯 노출
					// .slideUp > 선택 요소를 말아올리듯 숨김
					// .mouseenter > 마우스가 선택한 요소에 들어왔을때
					// .mouseleave > 마우스가 선택한 요소에서 나갔을때 
					
					
					