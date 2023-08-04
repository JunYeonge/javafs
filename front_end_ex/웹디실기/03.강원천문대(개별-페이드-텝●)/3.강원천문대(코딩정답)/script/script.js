$(function(){

	// ===================== 개별메뉴 

			$('nav>ul>li').mouseenter(function(){
				$('.submenu').slideDown(100); 
			});

			$('nav>ul>li').mouseleave(function(){
				$('.submenu').slideUp(100);
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
			// .fadeOut(); 서서히 사라짐
			// .fadeIn(); 서서히 나타짐	
			//.mouseenter -> 마우스가 선택한 요소에 들어왔을때
			//.slideDown -> 선택 요소를 말아내리듯 노출 
			// .gt(0) -> 첫번째 요소 이후 요소 선택 
			// .eq(변수) -> 지정한 변수만 선택 
			// var next = (x + 1) % 3;
						// 0 + 1 = 1 
						// 1 + 1 = 2
						// 2 + 1 = 3/0
										
			// .on 이벤트 등록 메서드
			// .addClass 선택한 요소에 새클래스 생성
			// .removeClass 선택한 요소에 지정한 클래스 삭제
			// .siblings 선택한 요소를 기준으로 형제 요소들 모두 선택
			
			
			
			
			
