 $(document).ready(function () {

            var hh = $(window).height();
            $("section>div").height(hh);

            $(window).resize(function () {
                $("section>div").height(hh);
            });

            //재원올라가기 
            $("#number").animate({ top: "200px", opacity:"1" }, 1000);

            $("section>div").on("mousewheel", function (event, delta) {
                //마우스 휠을 올렸을때	
                if (delta > 0) {
                    var prev = $(this).prev().offset().top;
                    $("html,body").stop().animate({ "scrollTop": prev }, 300);
                    //마우스 휠을 내렸을때	 
                } else if (delta < 0) {
                    var next = $(this).next().offset().top;
                    $("html,body").stop().animate({ "scrollTop": next }, 300);
                }
            });

            // 스크롤 시 gnb 자동 이동
            $(window).scroll(function () {
                var top = $(window).scrollTop();
                var hh = $(window).height();

                for (t = 0; t < 7; t++)
                    if (top >= hh * t && top < hh * (t + 1)) {
                        $("nav li").removeClass("on");
                        $("nav li").eq(t).addClass("on");
                    };
            });

            //GNB 클릭하면 해당 페이지 이동
            $("nav li").click(function () {
                var ii = $(this).index();
                var move = hh * ii;
                $("html").stop().animate({ scrollTop: move }, 300);
                $("nav li").removeClass("on");
                $(this).addClass("on");
            });

            // GNB닫기
            $(".navbtn01").click(function () {
                $(this).hide();
                $(".navbtn02").show();
                $("nav").stop().animate({ top: "-50px" }, 200);
            });
            // GNB열기    
            $(".navbtn02").click(function () {
                $(this).hide();
                $(".navbtn01").show();
                $("nav").stop().animate({ top: "0" }, 200);
            });

            // 메인 삼각형 
            $("#reserve").hover(function () {
                $("#reserve").stop().animate({ right: "-400px" }, 800);
                $("#reserve p").stop().animate({ left: "40%" }, 800);
            },
            function () {
                false;
            });


            // DESIGN 호버 이벤트
            $("#interior").hover(function () {
                $("#interior img").css({ transform: "scale(1.1)" });
                $("#interior p").css({ opacity: "0" });
                $("#exterior p").css({ opacity: "0.8" });
            },
            function () {
                $("#interior img").css({ transform: "scale(1)" });
                $("#interior p").css({ opacity: "0.5" });
                $("#exterior p").css({ opacity: "0.5" });
            });

            $("#exterior").hover(function () {
                $("#exterior img").css({ transform: "scale(1.1) skewX(-57deg)" });
                $("#exterior p").css({ opacity: "0" });
                $("#interior p").css({ opacity: "0.8" });
            },
            function () {
                $("#exterior img").css({ transform: "scale(1) skewX(-57deg)" });
                $("#exterior p").css({ opacity: "0.5" });
                $("#interior p").css({ opacity: "0.5" });
            });

            ///////////////////////// 360 돌리기 (white) ////////////////////////////////
            var imgs = "";
            //imgs변수에 36개의 이미지를 추가
            for (var j = 0; j < 36; j++) {
                imgs += '<img src="./images/color360/snow/white' + j + '.jpg" alt="흰컬러01" title="white1.jpg" />'
            }
            //#car상자에 36개의 이미지를 입력
            $(".white").html(imgs);

            $(".white").mousemove(function (e) {
                var wid = $(".white").width();
                var xx = e.pageX;
                var i = Math.floor((xx / wid) * 35 - 33);
                //초기에는 이미지를 숨김
                $(".white img").hide();
                $(".white img").eq(i).show();
            });

            ///////////////////////// 360 돌리기 (red) ////////////////////////////////
            var imgs = "";
            //imgs변수에 36개의 이미지를 추가
            for (var j = 0; j < 36; j++) {
                imgs += '<img src="./images/color360/wine/red' + j + '.jpg" alt="와인컬러01" title="red1.jpg" />'
            }
            //#car상자에 36개의 이미지를 입력
            $(".red").html(imgs);

            $(".red").mousemove(function (e) {
                var wid = $(".red").width();
                var xx = e.pageX;
                var i = Math.floor((xx / wid) * 35 - 33);
                //초기에는 이미지를 숨김
                $(".red img").hide();
                $(".red img").eq(i).show();
            });

            ///////////////////////// 360 돌리기 (aqua) ////////////////////////////////
            var imgs = "";
            //imgs변수에 36개의 이미지를 추가
            for (var j = 0; j < 36; j++) {
                imgs += '<img src="./images/color360/micro/aqua' + j + '.jpg" alt="아쿠아컬러" title="aqua1.jpg" />'
            }
            //#car상자에 36개의 이미지를 입력
            $(".aqua").html(imgs);

            $(".aqua").mousemove(function (e) {
                var wid = $(".aqua").width();
                var xx = e.pageX;
                var i = Math.floor((xx / wid) * 35 - 33);
                //초기에는 이미지를 숨김
                $(".aqua img").hide();
                $(".aqua img").eq(i).show();

                $(".value").text(i);
            });

            ///////////////////////// 360 돌리기 (aqua) ////////////////////////////////
            var imgs = "";
            //imgs변수에 36개의 이미지를 추가
            for (var j = 0; j < 36; j++) {
                imgs += '<img src="./images/color360/metal/gray' + j + '.jpg" alt="그레이컬러" title="gray1.jpg" />'
            }
            //#car상자에 36개의 이미지를 입력
            $(".gray").html(imgs);

            $(".gray").mousemove(function (e) {
                var wid = $(".gray").width();
                var xx = e.pageX;
                var i = Math.floor((xx / wid) * 35 - 33);
                //초기에는 이미지를 숨김
                $(".gray img").hide();
                $(".gray img").eq(i).show();

                $(".value").text(i);
            });

            ///////////////////////// 360 돌리기 (blue) ////////////////////////////////
            var imgs = "";
            //imgs변수에 36개의 이미지를 추가
            for (var j = 0; j < 36; j++) {
                imgs += '<img src="./images/color360/deep/blue' + j + '.jpg" alt="블루컬러01" title="blue1.jpg" />'
            }
            //#car상자에 36개의 이미지를 입력
            $(".blue").html(imgs);

            $(".blue").mousemove(function (e) {
                var wid = $(".blue").width();
                var xx = e.pageX;
                var i = Math.floor((xx / wid) * 35 - 33);
                //초기에는 이미지를 숨김
                $(".blue img").hide();
                $(".blue img").eq(i).show();
            });

            ///////////////////////// 360 돌리기 (black) ////////////////////////////////
            var imgs = "";
            //imgs변수에 36개의 이미지를 추가
            for (var j = 0; j < 36; j++) {
                imgs += '<img src="./images/color360/dark/bk' + j + '.jpg" alt="블랙컬러01" title="bk1.jpg" />'
            }
            //#car상자에 36개의 이미지를 입력
            $(".bk").html(imgs);

            $(".bk").mousemove(function (e) {
                var wid = $(".bk").width();
                var xx = e.pageX;
                var i = Math.floor((xx / wid) * 35 - 33);
                //초기에는 이미지를 숨김
                $(".bk img").hide();
                $(".bk img").eq(i).show();
            });

            // color 선택 이벤트
            $("#colors span").click(function () {
                var c = $(this).index();
                $("#colors span").removeClass("on");
                $(this).addClass("on");
                $("#color_name span").hide();
                $("#color_name span").eq(c).show();
                $(".vr").hide();
                $(".vr").eq(c).show();
            });

            // color rotate
            $("#color_rotate i").click(function () {
                $("#color_rotate").hide();
            });

            // performance 클릭 이벤트
            $("#per_green img").click(function () {
                var gg = $(this).index();
                $("#per_line img").eq(gg).css({ opacity: "1" });
                $("#per_pic img").eq(gg).stop().animate({ marginTop: "-20px", opacity: "1" }, 500);
                $("#per_text p").eq(gg).stop().delay(300).animate({ marginTop: "-20px", opacity: "1" }, 500);
            });

            // con 이미지 1개씩 이동 ( 수동 캐러셀 )
            var i = 0;
            var num = $("#conup_wrap img").length;
            $("#conb02").click(function () {
                if (i < num - 2) {
                    i++;
                    var y=$("#conup_wrap").width();
                    var move = -(y * 0.0956) * i;
                    $("#conup_wrap").stop().animate({ marginLeft: move }, 500, function () {
                        $("#conup_wrap img").removeClass("on")
                        $("#conup_wrap img").eq(i + 1).addClass("on")
                        $("#con_text p").removeClass("on");
                        $("#con_text p").eq(i + 1).addClass("on");
                    });
                } else {
                    false;
                }
            });

            $("#conb01").click(function () {
                if (i > -1) {
                    i--;
                    var y = $("#conup_wrap").width();
                    var move = -(y * 0.0956) * i;
                    $("#conup_wrap").stop().animate({ marginLeft: move }, 500, function () {
                        $("#conup_wrap img").removeClass("on")
                        $("#conup_wrap img").eq(i + 1).addClass("on")
                        $("#con_text p").removeClass("on");
                        $("#con_text p").eq(i + 1).addClass("on");
                    });
                } else {
                    false;
                }
            });

            // con 작은 이미지 클릭 시, 수동캐러셀 위치 이동
            $("#condown_wrap img").click(function () {
                var iii = $(this).index()-1;
                var y = $("#conup_wrap").width();
                var move = -(y * 0.0956) * iii;
                $("#conup_wrap").stop().animate({ marginLeft: move }, 500);
                $("#conup_wrap img").removeClass("on")
                $("#conup_wrap img").eq(iii + 1).addClass("on")
                $("#con_text p").removeClass("on");
                $("#con_text p").eq(iii + 1).addClass("on");
            });

            // toun 버튼 누르기
            $("#toun_green img").click(function () {
                var f = $(this).index();
                $("#toun_pic img").removeClass("on");
                $("#toun_pic img").eq(f).addClass("on");
                $("#toun_text p").removeClass("on");
                $("#toun_text p").eq(f).addClass("on");
            });

            // 탑버튼 스크롤

            $(window).scroll(function () {

                var s_top = $(window).scrollTop();
                if (s_top > 100) {
                    $("div#top").css({ 'display': 'block' });
                } else {
                    $("div#top").css({ 'display': 'none' });
                }
                
                
                //탑버튼 상단으로 올리기
                $("div#top").click(function () {
                    $("html").stop().animate({ scrollTop: "0" }, 300);
                });

                //$(".val").text(s_top);    
            });

            ///////////////////////// 시승예약 보이기 ////////////////////////////////
            $("#reserve p").click(function () {
                $("#reser_modal,#reser").show();
            });
            $(".etc04").click(function () {
                $("#reser_modal,#reser").show();
            });
            $(".ok1").click(function () {
                $("#reser_modal,#reser").hide();
            });
            $(".ok2").click(function () {
                $("#reser_modal,#reser").hide();
            });

        });