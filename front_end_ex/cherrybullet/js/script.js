$(function(){
	

	$(window).ready(function(){
		$("#fullpage").fullpage({
			verticalCentered: false, 
			navigation: true,
			navigationTooltips: ['HOME', 'PROFILE', 'PHOTO', 'VIDEO', 'TRACK', 'PLAN'],
			showActiveTooltip: true,
			afterLoad: function(origin, destination, direction){
				
				 $(".bullet p").stop().animate({
					"transform":"rotate("+(destination.index*45)+"deg)"
					},200);
					
				if(destination.index == 0){
					$(".fixmenu ul li").removeClass("on");
					$(".fixmenu ul li").eq(0).addClass("on");
					
					$(".ct_button").css("background-image","url(./images/nav_icon01.png)");
				}	
					
				//section 2
				if(destination.index == 1){
				  bullet_ani();

				$(".profile_cover ul li.num1").css({
					"opacity":0,
					"top":"-10px",
					"left":"-10px"
				}).animate({
					"opacity":1,
					"top":0,
					"left":0
				},400);
				
				$(".profile_cover ul li.num2").css({
					"opacity":0,
					"top":"-10px",
					"left":"-10px"
				}).delay(400).animate({
					"opacity":1,
					"top":0,
					"left":0
				},400);
				
				$(".profile_cover ul li.num3").css({
					"opacity":0,
					"top":"-10px",
					"left":"-10px"
				}).delay(800).animate({
					"opacity":1,
					"top":0,
					"left":0
				},400);
				
				$(".profile_cover ul li.num4").css({
					"opacity":0,
					"top":"-10px",
					"left":"-10px"
				}).delay(1200).animate({
					"opacity":1,
					"top":0,
					"left":0
				},400);
				
				$(".profile_cover ul li.num5").css({
					"opacity":0,
					"top":"-10px",
					"left":"-10px"
				}).delay(1600).animate({
					"opacity":1,
					"top":0,
					"left":0
				},400);
				
				$(".profile_cover ul li.num6").css({
					"opacity":0,
					"top":"-10px",
					"right":"-10px"
				}).delay(1600).animate({
					"opacity":1,
					"top":0,
					"right":0
				},400);
				
				$(".profile_cover ul li.num7").css({
					"opacity":0,
					"top":"-10px",
					"right":"-10px"
				}).delay(1200).animate({
					"opacity":1,
					"top":0,
					"right":0
				},400);
				
				$(".profile_cover ul li.num8").css({
					"opacity":0,
					"top":"-10px",
					"right":"-10px"
				}).delay(800).animate({
					"opacity":1,
					"top":0,
					"right":0
				},400);
				
				$(".profile_cover ul li.num9").css({
					"opacity":0,
					"top":"-10px",
					"right":"-10px"
				}).delay(400).animate({
					"opacity":1,
					"top":0,
					"right":0
				});
				
				$(".profile_cover ul li.num10").css({
					"opacity":0,
					"top":"-10px",
					"right":"-10px"
				}).animate({
					"opacity":1,
					"top":0,
					"right":0
				},400);
				
				$(".fixmenu ul li").removeClass("on");
				$(".fixmenu ul li").eq(1).addClass("on");
				$(".ct_button").css("background-image","url(./images/nav_icon02.png)");
			}

				//section 3
				
				if(destination.index == 2){
					bullet_ani2();
					
					$(".title_poster p").css({
						"right":"30%",
						"opacity":"0"
					}).animate({
						"right":"0",
						"opacity":"1"
					},1000);
					
					$(".jacket_photo p").css({
						"left":"30%",
						"opacity":"0"
					}).animate({
						"left":"0",
						"opacity":"1"
					},1000);
					
					$(".fixmenu ul li").removeClass("on");
					$(".fixmenu ul li").eq(2).addClass("on");
					$(".ct_button").css("background-image","url(./images/nav_icon03.png)");
				}
				
				//section 4
				
				if(destination.index == 3){
					$(".fixmenu ul li").removeClass("on");
					$(".fixmenu ul li").eq(3).addClass("on");
					$(".ct_button").css("background-image","url(./images/nav_icon04.png)");
				}
				
				//section 5
				
				if(destination.index == 4){
					$(".notice_box.ivory").css({
						"bottom":"50px",
						"left":"30px",
						"opacity":"0"
					}).animate({
						"bottom":"30px",
						"left":"50px",
						"opacity":1
					},400);
					
					$(".notice_box.pinkcolor").css({
						"bottom":"10px",
						"left":"30px",
						"opacity":"0"
					}).animate({
						"bottom":"30px",
						"left":"50px",
						"opacity":"1"
					},400);
					
					$(".notice_box.skyblue").css({
						"bottom":"10px",
						"left":"70px",
						"opacity":"0"
					}).animate({
						"bottom":"30px",
						"left":"50px",
						"opacity":"1"
					},400);
					
					$(".fixmenu ul li").removeClass("on");
					$(".fixmenu ul li").eq(4).addClass("on");
					$(".ct_button").css("background-image","url(./images/nav_icon05.png)");
					
					bullet_ani4();
				}
				
				// section 6
				
				if(destination.index == 5){
					$("#section5 p.main6_left").css({
						"opacity":"0",
						"left":"-60px"
					}).animate({
						"opacity":"1",
						"left":"60px"
					});

					$("#section5 .main6_center li").eq(0).css({
						"top":"-30px",
						"left":"-30px",
						"opacity":"0"
						}).animate({
						"opacity":"1",
						"top":"0",
						"left":"0"
					},400);
					
					$(".main6_center li").eq(2).css({"top":"-30px","left":"-30px","opacity":"0"}).animate({
						"opacity":"1",
						"top":"0",
						"left":"0"
					},600);
					
					$(".main6_center li").eq(4).css({"top":"-30px","left":"-30px","opacity":"0"}).animate({
						"opacity":"1",
						"top":"0",
						"left":"0"
					},800);
					
					$(".main6_center li").eq(6).css({"top":"-30px","left":"-30px","opacity":"0"}).animate({
						"opacity":"1",
						"top":"0",
						"left":"0"
					},1000);
					
					$(".main6_center li").eq(1).css({
						"right":"-30px",
						"top":"0",
						"opacity":"0"
					}).stop().animate({
						"right":"0",
						"top":"-30px",
						"opacity":"1"
					},400);
					
					$(".main6_center li").eq(3).css({
						"right":"-30px",
						"top":"0",
						"opacity":"0"
					}).stop().animate({
						"right":"0",
						"top":"-30px",
						"opacity":"1"
					},600);
					
					$(".main6_center li").eq(5).css({
						"right":"-30px",
						"bottom":"-60px",
						"opacity":"0"
					}).stop().animate({
						"right":"0",
						"bottom":"-30px",
						"opacity":"1"
					},800);
					
					$(".main6_center li").eq(7).css({
						"right":"-30px",
						"bottom":"-60px",
						"opacity":"0"
					}).stop().animate({
						"right":"0",
						"bottom":"-30px",
						"opacity":"1"
					},1000);
					
					$(".fixmenu ul li").removeClass("on");
					$(".fixmenu ul li").eq(5).addClass("on");
					$(".ct_button").css("background-image","url(./images/nav_icon06.png)");
				}
			}
		});
	});

	
///////////////////////////////////////////////////////////////////////////////
	
	function bullet_ani(){
		$(".cherry_bullet2").css("top","100%").animate({
			"top":"195%"
		},2000);
	}
	
	function bullet_ani2(){
		$(".cherry_bullet3").css("top","200%").animate({
			"top":"295%"
		},2000);
	}
	
	function bullet_ani3(){
		$(".cherry_bullet4").css("top","300%").animate({
			"top":"395%"
		},2000);
	}
	
	function bullet_ani4(){
		$(".cherry_bullet5").css("top","400%").animate({
			"top":"495%"
		},2000);
	}
	
	//section 2 영역
	//profile 1
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".yu"+i).css("zIndex","31").stop().fadeIn();
		$(".yu"+i).siblings(".yu").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover1").hide();
	$(".num1").click(function(){
		$("#pop_cover1").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover1").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 2
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".chae"+i).css("zIndex","31").stop().fadeIn();
		$(".chae"+i).siblings(".chae").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover2").hide();
	$(".num2").click(function(){
		$("#pop_cover2").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover2").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 3
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".ji"+i).css("zIndex","31").stop().fadeIn();
		$(".ji"+i).siblings(".ji").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover3").hide();
	$(".num3").click(function(){
		$("#pop_cover3").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover3").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 4
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".re"+i).css("zIndex","31").stop().fadeIn();
		$(".re"+i).siblings(".re").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover4").hide();
	$(".num4").click(function(){
		$("#pop_cover4").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover4").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	//profile 5
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".lin"+i).css("zIndex","31").stop().fadeIn();
		$(".lin"+i).siblings(".lin").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover5").hide();
	$(".num5").click(function(){
		$("#pop_cover5").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover5").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 6
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".may"+i).css("zIndex","31").stop().fadeIn();
		$(".may"+i).siblings(".may").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover6").hide();
	$(".num6").click(function(){
		$("#pop_cover6").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover6").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 7
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".kokoro"+i).css("zIndex","31").stop().fadeIn();
		$(".kokoro"+i).siblings(".kokoro").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover7").hide();
	$(".num7").click(function(){
		$("#pop_cover7").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover7").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 8
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".hae"+i).css("zIndex","31").stop().fadeIn();
		$(".hae"+i).siblings(".hae").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover8").hide();
	$(".num8").click(function(){
		$("#pop_cover8").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover8").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 9
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".bo"+i).css("zIndex","31").stop().fadeIn();
		$(".bo"+i).siblings(".bo").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover9").hide();
	$(".num9").click(function(){
		$("#pop_cover9").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover9").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	//profile 10
	
	$(".img_more li").click(function(){
		var i = $(this).index();
		
		$(".mi"+i).css("zIndex","31").stop().fadeIn();
		$(".mi"+i).siblings(".mi").css("zIndex","30").fadeOut();
		
		console.log(i);
	});

	$("#pop_cover10").hide();
	$(".num10").click(function(){
		$("#pop_cover10").fadeIn();
		$(".bullet").css("zIndex","10");
		$(".sns").css("zIndex","10");
		$(".fixmenu").css("zIndex","10");
	});
	$(".member").click(function(){
		$("#pop_cover10").fadeOut();
		$(".bullet").css("zIndex","21");
		$(".sns").css("zIndex","21");
		$(".fixmenu").css("zIndex","21");
	});
	
	/*section 3 영역*/
	
	var random = Math.ceil(Math.random()*5);
	$(".jacket_photo p").css("background-image","url(./images/sec03_img"+random+".png)");
	
	$(".title_popup").hide();
	$(".title_poster").click(function(){
		$(".title_popup").fadeIn();
	});
	
	$(".title_menu li").eq(2).click(function(){
		$(".title_popup").fadeOut();
	});
	
	$(".title_menu li").eq(0).click(function(){
		$(".title_popup img").eq(0).fadeIn();;
		$(".title_popup img").eq(1).fadeOut();
	});
	
	$(".title_menu li").eq(1).click(function(){
		$(".title_popup img").eq(0).fadeOut();
		$(".title_popup img").eq(1).fadeIn();
	});
	
	// 오른쪽
	
	var ind = 0;
	
	$(".btn .btn_l").click(function(){
		ind++;
		
		if(ind==6){ind=0;}
		$(".jacket_left ul.on li").eq(ind).css("left","100%").stop().animate({"left":"0"});
		$(".jacket_left ul.on li").eq(ind-1).css("left","0").stop().animate({"left":"-100%"});
		
	});
	
	$(".btn .btn_r").click(function(){
		ind--;
		
		if(ind==-6){ind=0;}
		$(".jacket_left ul.on li").eq(ind).css("left","-100%").stop().animate({"left":"0"});
		$(".jacket_left ul.on li").eq(ind+1).css("left","0").stop().animate({"left":"100%"});
	});
	
	$(".thumnail li").click(function(){
		var index = $(this).index();
		
		$(".jacket_left ul").eq(index).addClass("on").fadeIn();
		$(".jacket_left ul").eq(index).siblings("ul").removeClass("on").fadeOut();
	});
	
	$(".jacket_popup").hide();
	
	$(".jacket_photo").click(function(){
		$(".jacket_popup").fadeIn();
	});
	
	$("#x").click(function(){
		$(".jacket_popup").fadeOut();
	});
	
	/*section 4*/
	
	$("#section3 .left_mv").click(function(){
		$("#section3 .right_mv").css({
			"right":"-5%",
			"left":"auto",
			"top":"50%",
			"transform":"translateY(-50%) translateZ(-150px)",
			"zIndex":"5"
		});
		
		$(this).stop().css({
			"top":"50%",
			"left":"50%",
			"transform":"translate(-50%, -50%) translateZ(0)",
			"zIndex":"10",
			"border":"2px solid #19B1FF",
			"box-shadow":"1px 1px 100px #19B1FF"		
		});
		
		$("#section3 .center_mv").css({
			"left":"20%",
			"transform":"translate(-50%, -50%) translateZ(-150px)",
			"zIndex":"5",
			"box-shadow":"1px 1px 100px #C61049",
			"border":"2px solid #C61049"
		});
		
		$("#section3 .curtain").show();
		$(this).children(".curtain").hide();
	});
	
	$("#section3 .center_mv").click(function(){
		$(this).css({
			"top":"50%",
			"left":"50%",
			"transform":"translate(-50%, -50%) translateZ(0)",
			"zIndex":"10",
			"border":"2px solid #19B1FF",
			"box-shadow":"1px 1px 100px #19B1FF"	
		});
		
		$("#section3 .left_mv").css({
			"left":"20%",
			"transform":"translate(-50%, -50%) translateZ(-150px)",
			"zIndex":"5",
			"box-shadow":"1px 1px 100px #C61049",
			"border":"2px solid #C61049"
		});
		
		$("#section3 .right_mv").css({
			"right":"-5%",
			"left":"auto",
			"top":"50%",
			"transform":"translateY(-50%) translateZ(-150px)",
			"zIndex":"5"
		});
		
		$("#section3 .curtain").show();
		$(this).children(".curtain").hide();
	});
	
	$("#section3 .right_mv").click(function(){
		$("#section3 .right_mv").css({
			"top":"50%",
			"left":"50%",
			"transform":"translate(-50%, -50%) translateZ(0)",
			"zIndex":"10",
			"border":"2px solid #19B1FF",
			"box-shadow":"1px 1px 100px #19B1FF"	
		});
		
		$("#section3 .left_mv").css({
			"left":"20%",
			"transform":"translate(-50%, -50%) translateZ(-150px)",
			"zIndex":"5",
			"box-shadow":"1px 1px 100px #C61049",
			"border":"2px solid #C61049"
		});
		
		$("#section3 .center_mv").css({
			"right":"-5%",
			"left":"auto",
			"top":"50%",
			"transform":"translateY(-50%) translateZ(-150px)",
			"zIndex":"5"
		});
		
		$("#section3 .curtain").show();
		$(this).children(".curtain").hide();
	});
	
	
	
	
	
	
	
	
	
	
	
	
});