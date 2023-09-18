// JavaScript source code
$(document).ready(function () {
    ////////////////////// 로고 변경 //////////////////////
    $("#logo").mouseenter(function () {
        $("#logo img").attr({ src: "./image/nori_logo02.jpg" });
    });
    $("#logo").mouseleave(function () {
        $("#logo img").attr({ src: "./image/nori_logo01.jpg" });
    });


    ////////////////////// 아이콘 글자 변경 //////////////////////
    $("#icon ul li a").eq(0).mouseenter(function () {
        $("#icon ul li a").eq(0).text("로그인");
    });
    $("#icon ul li a").eq(0).mouseleave(function () {
        $("#icon ul li a").eq(0).html("<i class='fas fa-key'></i>");
    });

    $("#icon ul li a").eq(1).mouseenter(function () {
        $("#icon ul li a").eq(1).text("마이페이지");
    });
    $("#icon ul li a").eq(1).mouseleave(function () {
        $("#icon ul li a").eq(1).html('<i class="far fa-user"></i>');
    });

    $("#icon ul li a").eq(2).mouseenter(function () {
        $("#icon ul li a").eq(2).text("관심상품");
    });
    $("#icon ul li a").eq(2).mouseleave(function () {
        $("#icon ul li a").eq(2).html('<i class="far fa-heart"></i>');
    });

    $("#icon ul li a").eq(3).mouseenter(function () {
        $("#icon ul li a").eq(3).text("장바구니");
    });
    $("#icon ul li a").eq(3).mouseleave(function () {
        $("#icon ul li a").eq(3).html('<i class="fas fa-shopping-bag"></i>');
    });


    ////////////////////// gnb navigation bar //////////////////////
    $("nav ul li").mouseenter(function () {
        $(this).find(".sub").css({ display: "block" });
    });
    $("nav ul li").mouseleave(function () {
        $(this).find(".sub").css({ display: "none" });
    });
    $("nav> ul> li").mouseenter(function () {
        $(this).children("a").stop().animate({ color: "#fbb0d0", fontWeight: "500" }, 100);
    });
    $("nav> ul> li").mouseleave(function () {
        $(this).children("a").stop().animate({ color: "#000", fontWeight: "normal" }, 100);
    });
    $(".sub a").mouseenter(function () {
        $(this).stop().animate({ color: "#aaa", fontWeight: "500" }, 100);
    });
    $(".sub a").mouseleave(function () {
        $(this).stop().animate({ color: "#000", fontWeight: "normal" }, 100);
    });

    ////////////////////// slide 오른쪽 메뉴 설정 //////////////////////
    $("#slide_btn01").click(function () {
        $(this).css("display", "none");
        $("#slide_btn02").css("display", "block");
        $("#slide").animate({ right: "0px" }, 500);
    });
    $("#slide_btn02").click(function () {
        $(this).css("display", "none");
        $("#slide_btn01").css("display", "block");
        $("#slide").animate({ right: "-200px" }, 500);
    });


    ////////////////////// slide box 마우스 오버//////////////////////
    $("#slide_wrap p").mouseenter(function () {
        $(this).animate({ backgroundColor: "#555", color: "#fff" }, 200);
    });
    $("#slide_wrap p").mouseleave(function () {
        $(this).stop().animate({ backgroundColor: "#eee", color: "#000" }, 100);
    });


    ////////////////////// 상단 navigation bar 설정 //////////////////////
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $("nav").css({ position: "fixed", top: "0px", backgroundColor: "pink" });
        } else {
            $("nav").css({ position: "relative", backgroundColor: "white" });
        }

        if (scroll >= 200 && scroll <= 1000) {          // new title
            $("#new h1").css({ position: "fixed", top: "20px", left: "50%", marginLeft: "-70px" });
        } else {
            $("#new h1").css({ position: "absolute", top: "10px", left: "50%", marginLeft: "-70px" });
        }

        if (scroll >= 1200 && scroll <= 2100) {          // best title
            $("#best h1").css({ position: "fixed", top: "40px", left: "50%", marginLeft: "-70px" });
        } else {
            $("#best h1").css({ position: "absolute", top: "10px", left: "50%", marginLeft: "-70px" });
        }

        if (scroll >= 2300 && scroll <= 3100) {          // event title
            $("#event h1").css({ position: "fixed", top: "40px", left: "50%", marginLeft: "-90px" });
        } else {
            $("#event h1").css({ position: "absolute", top: "10px", left: "50%", marginLeft: "-90px" });
        }

        if (scroll >= 3300 && scroll <= 4000) {          // insta title
            $("#insta h1").css({ position: "fixed", top: "40px", left: "50%", marginLeft: "-150px" });
        } else {
            $("#insta h1").css({ position: "absolute", top: "10px", left: "50%", marginLeft: "-150px" });
        }
    });


    ////////////////////// top down scroll 버튼 //////////////////////
    $(".top").click(function () {
        $("html, body").stop().animate({ scrollTop: "0" }, 500);
    });
    $(".down").click(function () {
        $("html, body").stop().animate({ scrollTop: "5000" }, 500);
    });


    ////////////////////// top down 버튼 마우스 오버 //////////////////////
    $("#scroll p").mouseenter(function () {
        $(this).css({ backgroundColor: "#000", color: "#fff" });
    });
    $("#scroll p").mouseleave(function () {
        $(this).css({ backgroundColor: "initial", color: "#000" });
    });

});