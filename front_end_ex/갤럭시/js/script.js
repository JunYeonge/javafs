  $(document).ready(function () {
            var hwt = $(window).width();
            var hst = $(window).scrollTop();
            
            
            /*1366이상일때*/
            if (hwt >= 1366) {
                $("#img02").stop().animate({ left: "15%", opacity:"1" },500, function () {
                    $("#img01").stop().animate({ left: "25%", opacity: "1" }, 500, function () {
                        $("#sec01_txt").stop().animate({ width: "900px" }, 800, function () {
                            $("#sec01_bg").css({transform:"scale(0.9)"})
                        })
                    });
                });
                //nav
                $("#menu li:nth-child(1)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "0px" }, 500)
                })
                $("#menu li:nth-child(2)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "969px" }, 500)
                })
                $("#menu li:nth-child(3)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "4938px" }, 500)
                })
                $("#menu li:nth-child(4)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "6238px" }, 500)
                })
                $("#menu li:nth-child(5)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "7138px" }, 500)
                })
                $("#menu li:nth-child(6)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "8338px" }, 500)
                })
                

                $(window).scroll(function () {
                    var hst = $(window).scrollTop();
                    //nav
                    var navht = $(window).scrollTop();
                    if (navht >= 969 && navht < 1969) {
                        $("#menu li:nth-child(2)").css({ color: "#0457a2" })
                    }
                    else {
                        $("#menu li:nth-child(2)").css({ color: "#fff" })
                        
                    }
                    if (navht >= 4938 && navht < 6238) {
                        $("#menu li:nth-child(3)").css({ color: "#0457a2" })
                    }
                    else {
                        
                        $("#menu li:nth-child(3)").css({ color: "#fff" })
                        
                    }
                    if (navht >= 6238 && navht < 7138) {
                        $("#menu li:nth-child(4)").css({ color: "#0457a2" })
                    }
                    else {
                        
                        $("#menu li:nth-child(4)").css({ color: "#fff" })
                        
                    }
                    if (navht >= 7138 && navht < 8338) {
                        $("#menu li:nth-child(5)").css({ color: "#0457a2" })
                    }
                    else {
                        
                        $("#menu li:nth-child(5)").css({ color: "#fff" })
                        
                    }
                    if (navht >= 8338 && navht < 10038) {
                        $("#menu li:nth-child(6)").css({ color: "#0457a2" })
                    }
                    else {
                        
                        $("#menu li:nth-child(6)").css({ color: "#fff" })
                    }

                    //sec02
                    if (hst >= 600 && hst < 1800) {
                        $("#sec02_txt01").css({ marginTop: "400px", opacity: "1" }, 800);
                    }
                    else {
                        $("#sec02_txt01").css({ marginTop: "450px", opacity: "0" });
                    }
                    if (hst >= 800 && hst <= 1800) {
                        $("#sec02_txt02").css({ marginTop: "30px", opacity: "1" }, 800);
                    }
                    else {
                        $("#sec02_txt02").css({ marginTop: "130px", opacity: "0" });
                    }
                    //sec03
                    if (hst < 1600) {
                        $("#sec03_img01").css({ left: "50%" });
                        $("#sec03_img02").css({ left: "50%" });
                        $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                        $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                    }
                    else if (hst >= 1600 && hst < 1700) {
                        $("#sec03_img01").css({ left: "44%" });
                        $("#sec03_img02").css({ left: "56%" });
                        $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                        $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                    }
                    else if (hst >= 1700 && hst < 1800) {
                        $("#sec03_img01").css({ left: "38%" });
                        $("#sec03_img02").css({ left: "62%" });
                        $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                        $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                    }
                    else if (hst >= 1800 && hst < 1900) {
                        $("#sec03_img01").css({ left: "32%" });
                        $("#sec03_img02").css({ left: "68%" });
                        $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                        $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                        $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                    }
                    else if (hst >= 1900 && hst < 2000) {
                        $("#sec03_img01").css({ left: "24%" });
                        $("#sec03_img02").css({ left: "74%" });
                        $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                        $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                        $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                    }
                    else if (hst >= 2000 && hst < 2100) {
                        $("#sec03_img01").css({ left: "19%" });
                        $("#sec03_img02").css({ left: "81%" });
                        $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                        $("#sec03_txt03").css({ top: "950px", opacity: "1" });
                        $("#sec03_txt04").css({ top: "950px", opacity: "1" });
                    }
                    //sec04
                    //sec04_bg
                    if (hst < 3138) {
                        $("#sec04_bg").css({ position: "absolute", top: "3138px" })
                    }
                    else if (hst >= 3138 && hst < 3738) {
                        $("#sec04_bg").css({ position: "fixed", top: "0" })
                    }
                    else if (hst >= 3738) {
                        $("#sec04_bg").css({ position: "absolute", top: "3738px" })
                    }
                    

                    //seco4 contents
                    var hstt = $(window).scrollTop();
                    if (hstt < 3200) {
                        $("#sec04_img02").css({ left:"50%" });
                        $("#sec04_img03").css({ left: "50%" });
                        $("#sec04_txt02").css({ top: "450px", opacity:"0" });
                        $("#sec04_txt03").css({ top: "650px", opacity: "0" });
                        $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                    }
                    else if (hstt >= 3200 && hstt <3300 ) {
                        $("#sec04_img02").css({ left: "45%" });
                        $("#sec04_img03").css({ left: "55%" });
                        $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                        $("#sec04_txt03").css({ top: "650px", opacity: "0" });
                        $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                    }
                    else if (hstt >= 3300 && hstt < 3400) {
                        $("#sec04_img02").css({ left: "40%" });
                        $("#sec04_img03").css({ left: "60%" });
                        $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                        $("#sec04_txt03").css({ top: "650px", opacity: "0" });
                        $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                    }
                    else if (hstt >= 3400 && hstt < 3500) {
                        $("#sec04_img02").css({ left: "35%" });
                        $("#sec04_img03").css({ left: "65%" });
                        $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                        $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                        $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                    }
                    else if (hstt >= 3500 && hstt < 3600) {
                        $("#sec04_img02").css({ left: "30%" });
                        $("#sec04_img03").css({ left: "70%" });
                        $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                        $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                        $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                    }
                    else if (hstt >= 3600 && hstt < 3700) {
                        $("#sec04_img02").css({ left: "25%" });
                        $("#sec04_img03").css({ left: "75%" });
                        $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                        $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                        $("#sec04_txt04").css({ top: "750px", opacity: "1" });
                    }
                    else if (hstt >= 3700 ) {
                        $("#sec04_img02").css({ left: "15%" });
                        $("#sec04_img03").css({ left: "85%" });
                        $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                        $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                        $("#sec04_txt04").css({ top: "750px", opacity: "1" });
                    }

                    //sec05
                    if (hst < 4938) {
                        $("#sec05_img_wrap").css({ position: "absolute", top: "4938px" })
                    }
                    else if (hst >= 4938 && hst < 7269) {
                        $("#sec05_img_wrap").css({ position: "fixed", top: "0" })
                    }
                    else if (hst >= 7269) {
                        $("#sec05_img_wrap").css({ position: "absolute", top: "7269px" })
                    }

                    
                    var hstt = $(window).scrollTop();
                    if (hstt < 5000) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "-100px" });
                        $("#sec05_img02").css({ left: "-500px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5000 && hstt < 5100) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "100px" });
                        $("#sec05_img02").css({ left: "-500px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5100 && hstt < 5200) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "300px" });
                        $("#sec05_img02").css({ left: "-500px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5200 && hstt < 5300) {
                        $("#sec05_bg01").css({ opacity: "0.8" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "500px" });
                        $("#sec05_img02").css({ left: "-445px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5300 && hstt < 5400) {
                        $("#sec05_bg01").css({ opacity: "0.6" })
                        $("#sec05_bg02").css({ opacity: "0.2" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-390px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5400 && hstt < 5500) {
                        $("#sec05_bg01").css({ opacity: "0.4" })
                        $("#sec05_bg02").css({ opacity: "0.4" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-335px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5500 && hstt < 5600) {
                        $("#sec05_bg01").css({ opacity: "0.2" })
                        $("#sec05_bg02").css({ opacity: "0.6" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-280px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5600 && hstt < 5700) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.8" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-225px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5700 && hstt < 5800) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-170px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5800 && hstt < 5900) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-115px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 5900 && hstt < 6000) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-60px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6000 && hstt < 6100) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "-5px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6100 && hstt < 6200) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "50px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6200 && hstt < 6300) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "115px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6300 && hstt < 6400) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "180px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6400 && hstt < 6500) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.8" })
                        $("#sec05_bg03").css({ opacity: "0.2" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "245px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6500 && hstt < 6600) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.6" })
                        $("#sec05_bg03").css({ opacity: "0.4" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "310px" });
                        $("#sec05_img01").css({ left: "-300px" });
                    }
                    else if (hstt >= 6600 && hstt < 6700) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.4" })
                        $("#sec05_bg03").css({ opacity: "0.6" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "375px" });
                        $("#sec05_img01").css({ left: "-220px" });
                    }
                    else if (hstt >= 6700 && hstt < 6800) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.2" })
                        $("#sec05_bg03").css({ opacity: "0.8" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "440px" });
                        $("#sec05_img01").css({ left: "-140px" });
                    }
                    else if (hstt >= 6800 && hstt < 6900) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "505px" });
                        $("#sec05_img01").css({ left: "-60px" });
                    }
                    else if (hstt >= 6900 && hstt < 7000) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "570px" });
                        $("#sec05_img01").css({ left: "20px" });
                    }
                    else if (hstt >= 7000 && hstt < 7100) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "635px" });
                        $("#sec05_img01").css({ left: "100px" });
                    }
                    else if (hstt >= 7100 && hstt < 7200) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "700px" });
                        $("#sec05_img01").css({ left: "180px" });
                    }
                    else if (hstt >= 7200 && hstt < 7300) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "700px" });
                        $("#sec05_img02").css({ left: "765px" });
                        $("#sec05_img01").css({ left: "260px" });
                    }
                    //sec06
                    if (hst < 8000) {
                        $("#sec06_txt01").css({ left: "600px", opacity: "0" })
                    }
                    else if (hst >= 8000) {
                        $("#sec06_txt01").css({ left: "700px", opacity: "1" })
                    }
                    var hstt = $(window).scrollTop();
                    if (hstt < 8900) {
                        $("#sec06_txt02").css({ opacity: "0" });
                    }
                    else if (hstt >= 8900) {
                        $("#sec06_txt02").css({ opacity: "1" });
                    }
                  
                    //sec07
                    if (hst < 9700) {
                        $("#sec07_img02").css({ left: "50%", opacity:"0" })
                        $("#sec07_img03").css({ left: "50%", opacity: "0" })
                    }
                    else {
                        $("#sec07_img02").css({ left: "19%", opacity: "1" })
                        $("#sec07_img03").css({ left: "81%", opacity: "1" })
                    }

                });
                
                //sec08
                $("#drag_img").draggable({containment: "#drag_wrap", axis: "x"});
                $("#drag_img").draggable( {
                    start: function(){
                        var hstr = $("#drag_img").offset().left;
                        if (hstr <=803 && hstr > 643) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= 543 && hstr > 188) {
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= 23 && hstr > -273) {
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= -374 && hstr > -730) {
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= -866) {
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    },
                    drag: function () {
                        var hstr = $("#drag_img").offset().left;
                        if (hstr <= 803 && hstr > 643) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= 543 && hstr > 188) {
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= 23 && hstr > -273) {
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= -374 && hstr > -730) {
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= -866 ) {
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    },
                    stop: function () {
                        var hstr = $("#drag_img").offset().left;
                        if (hstr <= 803 && hstr > 643) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= 543 && hstr > 188) {
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= 23 && hstr > -273) {
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= -374 && hstr > -730) {
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= -866) {
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    }
                });
                $("#color_pic li").click(function () {
                    $("#color_pic li").css({ border: "1px solid #fff", animation: "none" })
                    $(this).css({ animation: "ani01 linear 0.5s" })
                    $(this).delay(500).css({ border: "5px solid #fff" })
                });
                $("#color_pic li:nth-child(1)").click(function () {
                    $("#sec08_color").text("미드나잇 블랙");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/b0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/b1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/b2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/b3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/b4.png" })
                });
                $("#color_pic li:nth-child(2)").click(function () {
                    $("#sec08_color").text("오키드 그레이");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/o0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/o1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/o2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/o3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/o4.png" })
                });
                $("#color_pic li:nth-child(3)").click(function () {
                    $("#sec08_color").text("코랄 블루");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/c0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/c1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/c2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/c3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/c4.png" })
                });
                $("#color_pic li:nth-child(4)").click(function () {
                    $("#sec08_color").text("아크틱 실버");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/a0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/a1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/a2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/a3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/a4.png" })
                });
                $("#color_pic li:nth-child(5)").click(function () {
                    $("#sec08_color").text("로즈 핑크");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/r0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/r1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/r2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/r3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/r4.png" })
                });
                $("#color_pic li:nth-child(6)").click(function () {
                    $("#sec08_color").text("버건디 레드");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/br0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/br1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/br2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/br3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/br4.png" })
                });

            }

                //////////////////////////////////////////////////테블릿////////////////////////////////////////////////////////////
            else if ( hwt >= 769 && hwt < 1366 ) {
                $("#img02").stop().animate({ left: "45%", opacity: "1" }, 500, function () {
                    $("#img01").stop().animate({ left: "55%", opacity: "1" }, 500, function () {
                        $("#sec01_txt").stop().animate({ width: "560px" }, 800, function () {
                            $("#sec01_bg").css({ transform: "scale(0.9)" })
                        })
                    });
                });
                
                $("#menu li:nth-child(1)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "0px" }, 500)
                })
                $("#menu li:nth-child(2)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "969px" }, 500)
                })
                $("#menu li:nth-child(3)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "6100px" }, 500)
                })
                $("#menu li:nth-child(4)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "6900px" }, 500)
                })
                $("#menu li:nth-child(5)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "7900px" }, 500)
                })
                $("#menu li:nth-child(6)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "9100px" }, 500)
                })

                //sec02
                $(window).scroll(function () {
                    var hst = $(window).scrollTop();

                    //nav
                    var navht = $(window).scrollTop();
                    if (navht >= 969 && navht < 1969) {
                        $("#menu li:nth-child(2)").css({ color: "#0457a2" })
                    }
                    else {
                        $("#menu li:nth-child(2)").css({ color: "#fff" })

                    }
                    if (navht >= 4938 && navht < 6238) {
                        $("#menu li:nth-child(3)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(3)").css({ color: "#fff" })

                    }
                    if (navht >= 6238 && navht < 7138) {
                        $("#menu li:nth-child(4)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(4)").css({ color: "#fff" })

                    }
                    if (navht >= 7138 && navht < 8338) {
                        $("#menu li:nth-child(5)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(5)").css({ color: "#fff" })

                    }
                    if (navht >= 8338 && navht < 10038) {
                        $("#menu li:nth-child(6)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(6)").css({ color: "#fff" })
                    }
                    if (hst >= 400 && hst < 1800) {
                        $("#sec02_txt01").css({ marginTop: "400px", opacity: "1" }, 800);
                    }
                    else {
                        $("#sec02_txt01").css({ marginTop: "450px", opacity: "0" });
                    }
                    if (hst >= 600 && hst < 1800) {
                        $("#sec02_txt02").css({ marginTop: "30px", opacity: "1" }, 800);
                    }
                    else {
                        $("#sec02_txt02").css({ marginTop: "130px", opacity: "0" });
                    }

                    //sec03
                    if (hst >= 1600) {
                        $("#sec03_img01").css({ left: "20%" });
                        $("#sec03_img02").css({ left: "80%" });
                        $("#sec03_txt02").css({ top: "600px", opacity:"1" });
                    }
                    else {
                        $("#sec03_img01").css({ left: "50%" });
                        $("#sec03_img02").css({ left: "50%" });
                        $("#sec03_txt02").css({ top: "700px", opacity:"0" });
                    }

                    //sec04
                    if (hst < 3138 ) {
                        $("#sec04_bg").css({ position: "absolute", top: "3138px" })
                    }
                    else if (hst >= 3138 && hst <4800) {
                        $("#sec04_bg").css({ position:"fixed", top:"0"})
                    }
                    else if (hst >= 4800) {
                        $("#sec04_bg").css({ position: "absolute", top: "4800px" })
                    }

                    //sec04 txt
                    var hstt = $(window).scrollTop();
                    if (hstt < 3300) {
                        $("#sec04_img02").css({ left: "50%", opacity:"1" })
                        $("#sec04_img03").css({ left: "50%", opacity: "1" })
                        $("#sec04_txt02").css({ top: "550px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "750px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                    }
                    else if (hstt >= 3300  && hstt<3600) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                        $("#sec04_txt02").css({ top: "550px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "750px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                    }
                    else if (hstt >= 3600 && hstt < 4000) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                        $("#sec04_txt02").css({ top: "250px", opacity: "1" })
                        $("#sec04_txt03").css({ top: "750px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                    }
                    else if (hstt >= 4000 && hstt < 4400) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                        $("#sec04_txt02").css({ top: "250px", opacity: "1" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "1" })
                        $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                    }
                    else if (hstt >= 4400 && hstt < 4800) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                        $("#sec04_txt02").css({ top: "250px", opacity: "1" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "1" })
                        $("#sec04_txt04").css({ top: "650px", opacity: "1" })
                    }
                    //sec05
                    if (hst < 5700) {
                        $("#sec05_img_wrap").css({ position: "absolute", top: "5700px" })
                    }
                    else if (hst >= 5700 && hst < 8000 ) {
                        $("#sec05_img_wrap").css({ position: "fixed", top: "0px" })
                    }
                    else if ( hst >= 8000) {
                        $("#sec05_img_wrap").css({ position: "absolute", top: "8000px" })
                    }

                    //sec05 contents
                    var hstt = $(window).scrollTop();
                    if (hstt < 5800) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "-10%" })
                        $("#sec05_img02").css({ left: "-100%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 5800 && hstt < 6000) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "20%" })
                        $("#sec05_img02").css({ left: "-100%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 6000 && hstt < 6200) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "50%" })
                        $("#sec05_img02").css({ left: "-100%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 6200 && hstt < 6400) {
                        $("#sec05_bg01").css({ opacity: "0.8" })
                        $("#sec05_bg02").css({ opacity: "0.2" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "100%" })
                        $("#sec05_img02").css({ left: "-100%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 6400 && hstt < 6600) {
                        $("#sec05_bg01").css({ opacity: "0.6" })
                        $("#sec05_bg02").css({ opacity: "0.4" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "100%" })
                        $("#sec05_img02").css({ left: "-70%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 6600 && hstt < 6800) {
                        $("#sec05_bg01").css({ opacity: "0.4" })
                        $("#sec05_bg02").css({ opacity: "0.6" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "800px" })
                        $("#sec05_img02").css({ left: "-40%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 6800 && hstt < 7000) {
                        $("#sec05_bg01").css({ opacity: "0.2" })
                        $("#sec05_bg02").css({ opacity: "0.8" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "100%" })
                        $("#sec05_img02").css({ left: "-10%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 7000 && hstt < 7200) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0.2" })
                        $("#sec05_img03").css({ left: "100%" })
                        $("#sec05_img02").css({ left: "20%" })
                        $("#sec05_img01").css({ left: "-100%" })
                    }
                    else if (hstt >= 7200 && hstt < 7400) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.8" })
                        $("#sec05_bg03").css({ opacity: "0.3" })
                        $("#sec05_img03").css({ left: "800px" })
                        $("#sec05_img02").css({ left: "50%" })
                        $("#sec05_img01").css({ left: "-50%" })
                    }
                    else if (hstt >= 7400 && hstt < 7600) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.6" })
                        $("#sec05_bg03").css({ opacity: "0.6" })
                        $("#sec05_img03").css({ left: "800px" })
                        $("#sec05_img02").css({ left: "80%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    else if (hstt >= 7600 && hstt < 7800) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.3" })
                        $("#sec05_bg03").css({ opacity: "0.8" })
                        $("#sec05_img03").css({ left: "800px" })
                        $("#sec05_img02").css({ left: "110%" })
                        $("#sec05_img01").css({ left: "10%" })
                    }
                    else if (hstt >= 7800 && hstt < 8000) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0.9" })
                        $("#sec05_img03").css({ left: "800px" })
                        $("#sec05_img02").css({ left: "120%" })
                        $("#sec05_img01").css({ left: "50%" })
                    }
                    else if (hstt >= 8000 && hstt < 8200) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "800px" })
                        $("#sec05_img02").css({ left: "700px" })
                        $("#sec05_img01").css({ left: "80%" })
                    }

                    //sec06
                    if (hst < 8800) {
                        $("#sec06_txt01").css({ left: "50%", opacity: "0" })
                    }
                    else if (hst >= 8800) {
                        $("#sec06_txt01").css({ left: "55%", opacity: "1" })
                    }
                    var hstt = $(window).scrollTop();
                    if (hstt < 9400) {
                        $("#sec06_txt02").css({ opacity: "0" })
                    }
                    else if (hstt >= 9400) {
                        $("#sec06_txt02").css({ opacity: "1" })
                    }

                    //sec07
                    if (hst < 10300) {
                        $("#sec07_img02").css({ left: "50%" })
                        $("#sec07_img03").css({ left: "50%" })
                    }
                    else if (hst >= 10300) {
                        $("#sec07_img02").css({ left: "15%" })
                        $("#sec07_img03").css({ left: "80%" })
                    }
                });
                $("#drag_img").draggable({ containment: "#drag_wrap", axis: "x" });
                $("#drag_img").draggable({
                    start: function () {
                        var hstr = $("#drag_img").offset().left;
                        var wth = $(window).width();
                        var hwth = wth/2
                        if (hstr <= hwth && hstr > hwth - 200) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth-350 && hstr > hwth - 200-350) {
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 750 && hstr > hwth - 200 - 750) {
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 1150 && hstr > hwth - 200 - 1150) {
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 1500 && hstr > hwth - 500 - 1500) {
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    },
                    drag: function () {
                        var hstr = $("#drag_img").offset().left;
                        var wth = $(window).width();
                        var hwth = wth / 2
                        if (hstr <= hwth && hstr > hwth - 200) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 350 && hstr > hwth - 200 - 350) {
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 750 && hstr > hwth - 200 - 750) {
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 1150 && hstr > hwth - 200 - 1150) {
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 1500 && hstr > hwth - 500 - 1500) {
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    },
                    stop: function () {
                        var hstr = $("#drag_img").offset().left;
                        var wth = $(window).width();
                        var hwth = wth / 2
                        if (hstr <= hwth && hstr > hwth - 200) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 350 && hstr > hwth - 200 - 350) {
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 750 && hstr > hwth - 200 - 750) {
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 1150 && hstr > hwth - 200 - 1150) {
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else if (hstr <= hwth - 1500 && hstr > hwth - 500 - 1500) {
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    }
                });
                $("#color_pic li").click(function () {
                    $("#color_pic li").css({ border: "1px solid #fff", animation: "none" })
                    $(this).css({ animation: "ani01 linear 0.5s" })
                    $(this).delay(500).css({ border: "5px solid #fff" })
                });
                $("#color_pic li:nth-child(1)").click(function () {
                    $("#sec08_color").text("미드나잇 블랙");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/b0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/b1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/b2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/b3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/b4.png" })
                });
                $("#color_pic li:nth-child(2)").click(function () {
                    $("#sec08_color").text("오키드 그레이");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/o0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/o1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/o2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/o3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/o4.png" })
                });
                $("#color_pic li:nth-child(3)").click(function () {
                    $("#sec08_color").text("코랄 블루");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/c0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/c1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/c2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/c3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/c4.png" })
                });
                $("#color_pic li:nth-child(4)").click(function () {
                    $("#sec08_color").text("아크틱 실버");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/a0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/a1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/a2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/a3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/a4.png" })
                });
                $("#color_pic li:nth-child(5)").click(function () {
                    $("#sec08_color").text("로즈 핑크");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/r0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/r1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/r2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/r3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/r4.png" })
                });
                $("#color_pic li:nth-child(6)").click(function () {
                    $("#sec08_color").text("버건디 레드");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/br0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/br1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/br2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/br3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/br4.png" })
                });

            }
                //////////////////////////////////////////////////모바일///////////////////////////////////
            else if (hwt < 769 ) {
                $("#img01").stop().animate({ left: "50%", opacity: "1" }, 500, function () {
                    $("#sec01_txt").stop().animate({ width: "270px" }, 800, function () {
                        $("#sec01_bg").css({ transform: "scale(0.9)" })
                    })
                });
                //nav
                $("#menu li:nth-child(1)").click(function () {
                    $("html, body").stop().animate({ scrollTop: "0px" }, 500)
                })
                $("#ham02 ul li:nth-child(1)").click(function () {
                    $("#ham01").show();
                    $("#ham02").hide();
                    $("html, body").stop().animate({ scrollTop: "850px" }, 500)
                })
                $("#ham02 ul li:nth-child(2)").click(function () {
                    $("#ham01").show();
                    $("#ham02").hide();
                    $("html, body").stop().animate({ scrollTop: "4650px" }, 500)
                })
                $("#ham02 ul li:nth-child(3)").click(function () {
                    $("#ham01").show();
                    $("#ham02").hide();
                    $("html, body").stop().animate({ scrollTop: "5400px" }, 500)
                })
                $("#ham02 ul li:nth-child(4)").click(function () {
                    $("#ham01").show();
                    $("#ham02").hide();
                    $("html, body").stop().animate({ scrollTop: "5800px" }, 500)
                })
                $("#ham02 ul li:nth-child(5)").click(function () {
                    $("#ham01").show();
                    $("#ham02").hide();
                    $("html, body").stop().animate({ scrollTop: "6750px" }, 500)
                })


                $(window).scroll(function () {
                    var hst = $(window).scrollTop();
                    //nav
                    var navht = $(window).scrollTop();
                    if (navht >= 969 && navht < 1969) {
                        $("#menu li:nth-child(2)").css({ color: "#0457a2" })
                    }
                    else {
                        $("#menu li:nth-child(2)").css({ color: "#fff" })

                    }
                    if (navht >= 4938 && navht < 6238) {
                        $("#menu li:nth-child(3)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(3)").css({ color: "#fff" })

                    }
                    if (navht >= 6238 && navht < 7138) {
                        $("#menu li:nth-child(4)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(4)").css({ color: "#fff" })

                    }
                    if (navht >= 7138 && navht < 8338) {
                        $("#menu li:nth-child(5)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(5)").css({ color: "#fff" })

                    }
                    if (navht >= 8338 && navht < 10038) {
                        $("#menu li:nth-child(6)").css({ color: "#0457a2" })
                    }
                    else {

                        $("#menu li:nth-child(6)").css({ color: "#fff" })
                    }
                    //2
                    if (hst >= 500 && hst < 1800) {
                        $("#sec02_txt01").css({ top: "300px", opacity: "1" }, 800);
                    }
                    else {
                        $("#sec02_txt01").css({ top: "400px", opacity: "0" });
                    }
                    if (hst >= 700 && hst < 1800) {
                        $("#sec02_txt02").css({ top: "400px", opacity: "1" }, 800);
                    }
                    else {
                        $("#sec02_txt02").css({ top: "500px", opacity: "0" });
                    }

                    //3
                    if (hst < 1400) {
                        $("#sec03_img01").css({ left: "50%" });
                        $("#sec03_img02").css({ left: "50%" });
                        $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                    }
                    else if (hst >= 1400 && hst <1800) {
                        $("#sec03_img01").css({ left: "20%" });
                        $("#sec03_img02").css({ left: "75%" });
                        $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                    }
                    else if (hst >= 1800 && hst < 2600) {
                        $("#sec03_img01").css({ left: "20%" });
                        $("#sec03_img02").css({ left: "75%" });
                        $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                    }
                    else if (hst >= 2600) {
                        $("#sec03_img01").css({ left: "50%" });
                        $("#sec03_img02").css({ left: "50%" });
                        $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                    }

                    //4
                    if (hst < 2569) {
                        $("#sec04_bg").css({ position: "absolute", top: "2569px" })
                    }
                    else if (hst >= 2569 && hst <3800 ) {
                        $("#sec04_bg").css({ position: "fixed", top: "0" })
                    }
                    else if (hst >= 3800) {
                        $("#sec04_bg").css({ position: "absolute", top: "3800px" })
                    }
                    //sec04 txt
                    var hstt = $(window).scrollTop();
                    if (hstt < 2600) {
                        $("#sec04_img02").css({ left: "50%", opacity: "1" })
                        $("#sec04_img03").css({ left: "50%", opacity: "1" })
                        $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 2600 && hstt < 2700) {
                        $("#sec04_img02").css({ left: "40%", opacity: "1" })
                        $("#sec04_img03").css({ left: "60%", opacity: "1" })
                        $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 2700 && hstt <2800) {
                        $("#sec04_img02").css({ left: "30%", opacity: "0.8" })
                        $("#sec04_img03").css({ left: "70%", opacity: "0.8" })
                        $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 2800 && hstt < 2900) {
                        $("#sec04_img02").css({ left: "20%", opacity: "0.6" })
                        $("#sec04_img03").css({ left: "80%", opacity: "0.6" })
                        $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 2900 && hstt < 3000) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.4" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.4" })
                        $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 3000 && hstt < 3100) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                        $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 3100 && hstt < 3300) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                        $("#sec04_txt02").css({ top: "220px", opacity: "1" })
                        $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 3300 && hstt < 3500) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                        $("#sec04_txt02").css({ top: "220px", opacity: "1" })
                        $("#sec04_txt03").css({ top: "370px", opacity: "1" })
                        $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                    }
                    else if (hstt >= 3500 && hstt < 3600) {
                        $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                        $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                        $("#sec04_txt02").css({ top: "220px", opacity: "1" })
                        $("#sec04_txt03").css({ top: "370px", opacity: "1" })
                        $("#sec04_txt04").css({ top: "520px", opacity: "1" })
                    }
                    //5
                    if (hst < 4650) {
                        $("#sec05_img_wrap").css({ position: "absolute", top: "4650px" })
                    }
                    else if (hst >= 4650 && hst < 5900 ) {
                        $("#sec05_img_wrap").css({ position: "fixed", top: "0px" })
                    }
                    else if (hst > 5900) {
                        $("#sec05_img_wrap").css({ position: "absolute", top: "5900px" })
                    }

                    //sec05 contents
                    var hstt = $(window).scrollTop();
                    if (hstt < 4700) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "-10%" })
                        $("#sec05_img02").css({ left: "-50%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 4700 && hstt <4800) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "20%" })
                        $("#sec05_img02").css({ left: "-50%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 4800 && hstt < 4900) {
                        $("#sec05_bg01").css({ opacity: "1" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "50%" })
                        $("#sec05_img02").css({ left: "-50%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 4900 && hstt < 5000) {
                        $("#sec05_bg01").css({ opacity: "0.8" })
                        $("#sec05_bg02").css({ opacity: "0.2" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "80%" })
                        $("#sec05_img02").css({ left: "-30%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 5000 && hstt < 5100) {
                        $("#sec05_bg01").css({ opacity: "0.6" })
                        $("#sec05_bg02").css({ opacity: "0.4" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "110%" })
                        $("#sec05_img02").css({ left: "-10%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 5100 && hstt < 5200) {
                        $("#sec05_bg01").css({ opacity: "0.4" })
                        $("#sec05_bg02").css({ opacity: "0.6" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "10%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 5200 && hstt < 5300) {
                        $("#sec05_bg01").css({ opacity: "0.2" })
                        $("#sec05_bg02").css({ opacity: "0.8" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "30%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 5300 && hstt < 5400) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "1" })
                        $("#sec05_bg03").css({ opacity: "0" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "50%" })
                        $("#sec05_img01").css({ left: "-20%" })
                    }
                    if (hstt >= 5400 && hstt < 5500) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.8" })
                        $("#sec05_bg03").css({ opacity: "0.2" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "70%" })
                        $("#sec05_img01").css({ left: "-6%" })
                    }
                    if (hstt >= 5500 && hstt < 5600) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.6" })
                        $("#sec05_bg03").css({ opacity: "0.4" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "90%" })
                        $("#sec05_img01").css({ left: "8%" })
                    }
                    if (hstt >= 5600 && hstt < 5700) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.4" })
                        $("#sec05_bg03").css({ opacity: "0.6" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "100%" })
                        $("#sec05_img01").css({ left: "22%" })
                    }
                    if (hstt >= 5700 && hstt < 5800) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0.2" })
                        $("#sec05_bg03").css({ opacity: "0.8" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "120%" })
                        $("#sec05_img01").css({ left: "36%" })
                    }
                    if (hstt >= 5800 && hstt < 5900) {
                        $("#sec05_bg01").css({ opacity: "0" })
                        $("#sec05_bg02").css({ opacity: "0" })
                        $("#sec05_bg03").css({ opacity: "1" })
                        $("#sec05_img03").css({ left: "140%" })
                        $("#sec05_img02").css({ left: "140%" })
                        $("#sec05_img01").css({ left: "50%" })
                    }
                    //6
                    if (hst < 6700) {
                        $("#sec06_txt01").css({ top: "750px", opacity: "0" })
                    }
                    else if (hst >= 6700) {
                        $("#sec06_txt01").css({ top: "650px", opacity:"1" })
                    }
                });

                //sec08
                $("#drag_img").draggable({ containment: "#drag_wrap", axis: "x" });
                $("#drag_img").draggable({
                    start: function () {
                        var hstr = $("#drag_img").offset().left;
                        var wth = $(window).width();
                        var hwth = wth / 2
                        if (hstr <= hwth) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }

                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    },
                    drag: function () {
                        var hstr = $("#drag_img").offset().left;
                        var wth = $(window).width();
                        var hwth = wth / 2
                           
                        $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            
                    },
                    stop: function () {
                        var hstr = $("#drag_img").offset().left;
                        var wth = $(window).width();
                        var hwth = wth / 2
                        if (hstr <= hwth) {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                        }
                            
                        else {
                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                        }
                    }
                });
                //컬러 픽
                $("#color_pic li").click(function () {
                    $("#color_pic li").css({ border: "1px solid #fff", animation: "none" })
                    $(this).css({ animation: "ani01 linear 0.5s" })
                    $(this).delay(500).css({ border: "5px solid #fff" })
                });
                $("#color_pic li:nth-child(1)").click(function () {
                    $("#sec08_color").text("미드나잇 블랙");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/b0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/b1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/b2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/b3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/b4.png" })
                });
                $("#color_pic li:nth-child(2)").click(function () {
                    $("#sec08_color").text("오키드 그레이");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/o0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/o1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/o2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/o3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/o4.png" })
                });
                $("#color_pic li:nth-child(3)").click(function () {
                    $("#sec08_color").text("코랄 블루");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/c0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/c1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/c2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/c3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/c4.png" })
                });
                $("#color_pic li:nth-child(4)").click(function () {
                    $("#sec08_color").text("아크틱 실버");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/a0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/a1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/a2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/a3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/a4.png" })
                });
                $("#color_pic li:nth-child(5)").click(function () {
                    $("#sec08_color").text("로즈 핑크");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/r0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/r1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/r2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/r3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/r4.png" })
                });
                $("#color_pic li:nth-child(6)").click(function () {
                    $("#sec08_color").text("버건디 레드");
                    $("#drag_img li:nth-child(1) img").attr({ src: "./image/br0.png" })
                    $("#drag_img li:nth-child(2) img").attr({ src: "./image/br1.png" })
                    $("#drag_img li:nth-child(3) img").attr({ src: "./image/br2.png" })
                    $("#drag_img li:nth-child(4) img").attr({ src: "./image/br3.png" })
                    $("#drag_img li:nth-child(5) img").attr({ src: "./image/br4.png" })
                });
                //menu
                $("#ham01").click(function () {
                    $(this).hide();
                    $("#ham02").slideDown()
                })
                $("#clo").click(function () {
                    $("#ham02").slideUp()
                    $("#ham01").show();
                })
                    

            }
            
            
            var wiwi = $(window).width();
            $(window).resize(function () {
                var wiwi = $(window).width();
                var hwt = $(window).width();
                var hst = $(window).scrollTop();
                if (wiwi >= 1366) {
                    $("#img02").stop().animate({ left: "15%", opacity: "1" }, 500, function () {
                        $("#img01").stop().animate({ left: "25%", opacity: "1" }, 500, function () {
                            $("#sec01_txt").stop().animate({ width: "900px" }, 800, function () {
                                $("#sec01_bg").css({ transform: "scale(0.9)" })
                            })
                        });
                    });
                    $("#menu li:nth-child(1)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "0px" }, 500)
                    })
                    $("#menu li:nth-child(2)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "969px" }, 500)
                    })
                    $("#menu li:nth-child(3)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "4938px" }, 500)
                    })
                    $("#menu li:nth-child(4)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "6238px" }, 500)
                    })
                    $("#menu li:nth-child(5)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "7138px" }, 500)
                    })
                    $("#menu li:nth-child(6)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "8338px" }, 500)
                    })
                    $(window).scroll(function () {
                        var hst = $(window).scrollTop();



                        //sec02
                        if (hst >= 600 && hst < 1800) {
                            $("#sec02_txt01").css({ marginTop: "400px", opacity: "1" }, 800);
                        }
                        else {
                            $("#sec02_txt01").css({ marginTop: "450px", opacity: "0" });
                        }
                        if (hst >= 800 && hst <= 1800) {
                            $("#sec02_txt02").css({ marginTop: "30px", opacity: "1" }, 800);
                        }
                        else {
                            $("#sec02_txt02").css({ marginTop: "130px", opacity: "0" });
                        }
                        //sec03
                        if (hst < 1600) {
                            $("#sec03_img01").css({ left: "50%" });
                            $("#sec03_img02").css({ left: "50%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                            $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                            $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                        }
                        else if (hst >= 1600 && hst < 1700) {
                            $("#sec03_img01").css({ left: "44%" });
                            $("#sec03_img02").css({ left: "56%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                            $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                            $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                        }
                        else if (hst >= 1700 && hst < 1800) {
                            $("#sec03_img01").css({ left: "38%" });
                            $("#sec03_img02").css({ left: "62%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                            $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                            $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                        }
                        else if (hst >= 1800 && hst < 1900) {
                            $("#sec03_img01").css({ left: "32%" });
                            $("#sec03_img02").css({ left: "68%" });
                            $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                            $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                            $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                        }
                        else if (hst >= 1900 && hst < 2000) {
                            $("#sec03_img01").css({ left: "24%" });
                            $("#sec03_img02").css({ left: "74%" });
                            $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                            $("#sec03_txt03").css({ top: "1000px", opacity: "0" });
                            $("#sec03_txt04").css({ top: "1000px", opacity: "0" });
                        }
                        else if (hst >= 2000 && hst < 2100) {
                            $("#sec03_img01").css({ left: "19%" });
                            $("#sec03_img02").css({ left: "81%" });
                            $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                            $("#sec03_txt03").css({ top: "950px", opacity: "1" });
                            $("#sec03_txt04").css({ top: "950px", opacity: "1" });
                        }
                        //sec04
                        //sec04_bg
                        if (hst < 3138) {
                            $("#sec04_bg").css({ position: "absolute", top: "3138px" })
                        }
                        else if (hst >= 3138 && hst < 3738) {
                            $("#sec04_bg").css({ position: "fixed", top: "0" })
                        }
                        else if (hst >= 3738) {
                            $("#sec04_bg").css({ position: "absolute", top: "3738px" })
                        }


                        //seco4 contents
                        var hstt = $(window).scrollTop();
                        if (hstt < 3200) {
                            $("#sec04_img02").css({ left: "50%" });
                            $("#sec04_img03").css({ left: "50%" });
                            $("#sec04_txt02").css({ top: "450px", opacity: "0" });
                            $("#sec04_txt03").css({ top: "650px", opacity: "0" });
                            $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                        }
                        else if (hstt >= 3200 && hstt < 3300) {
                            $("#sec04_img02").css({ left: "45%" });
                            $("#sec04_img03").css({ left: "55%" });
                            $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                            $("#sec04_txt03").css({ top: "650px", opacity: "0" });
                            $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                        }
                        else if (hstt >= 3300 && hstt < 3400) {
                            $("#sec04_img02").css({ left: "40%" });
                            $("#sec04_img03").css({ left: "60%" });
                            $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                            $("#sec04_txt03").css({ top: "650px", opacity: "0" });
                            $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                        }
                        else if (hstt >= 3400 && hstt < 3500) {
                            $("#sec04_img02").css({ left: "35%" });
                            $("#sec04_img03").css({ left: "65%" });
                            $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                            $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                            $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                        }
                        else if (hstt >= 3500 && hstt < 3600) {
                            $("#sec04_img02").css({ left: "30%" });
                            $("#sec04_img03").css({ left: "70%" });
                            $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                            $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                            $("#sec04_txt04").css({ top: "850px", opacity: "0" });
                        }
                        else if (hstt >= 3600 && hstt < 3700) {
                            $("#sec04_img02").css({ left: "25%" });
                            $("#sec04_img03").css({ left: "75%" });
                            $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                            $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                            $("#sec04_txt04").css({ top: "750px", opacity: "1" });
                        }
                        else if (hstt >= 3700) {
                            $("#sec04_img02").css({ left: "15%" });
                            $("#sec04_img03").css({ left: "85%" });
                            $("#sec04_txt02").css({ top: "350px", opacity: "1" });
                            $("#sec04_txt03").css({ top: "550px", opacity: "1" });
                            $("#sec04_txt04").css({ top: "750px", opacity: "1" });
                        }

                        //sec05
                        if (hst < 4938) {
                            $("#sec05_img_wrap").css({ position: "absolute", top: "4938px" })
                        }
                        else if (hst >= 4938 && hst < 7269) {
                            $("#sec05_img_wrap").css({ position: "fixed", top: "0" })
                        }
                        else if (hst >= 7269) {
                            $("#sec05_img_wrap").css({ position: "absolute", top: "7269px" })
                        }


                        var hstt = $(window).scrollTop();
                        if (hstt < 5000) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "-100px" });
                            $("#sec05_img02").css({ left: "-500px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5000 && hstt < 5100) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "100px" });
                            $("#sec05_img02").css({ left: "-500px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5100 && hstt < 5200) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "300px" });
                            $("#sec05_img02").css({ left: "-500px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5200 && hstt < 5300) {
                            $("#sec05_bg01").css({ opacity: "0.8" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "500px" });
                            $("#sec05_img02").css({ left: "-445px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5300 && hstt < 5400) {
                            $("#sec05_bg01").css({ opacity: "0.6" })
                            $("#sec05_bg02").css({ opacity: "0.2" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-390px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5400 && hstt < 5500) {
                            $("#sec05_bg01").css({ opacity: "0.4" })
                            $("#sec05_bg02").css({ opacity: "0.4" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-335px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5500 && hstt < 5600) {
                            $("#sec05_bg01").css({ opacity: "0.2" })
                            $("#sec05_bg02").css({ opacity: "0.6" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-280px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5600 && hstt < 5700) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.8" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-225px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5700 && hstt < 5800) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-170px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5800 && hstt < 5900) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-115px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 5900 && hstt < 6000) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-60px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6000 && hstt < 6100) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "-5px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6100 && hstt < 6200) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "50px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6200 && hstt < 6300) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "115px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6300 && hstt < 6400) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "180px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6400 && hstt < 6500) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.8" })
                            $("#sec05_bg03").css({ opacity: "0.2" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "245px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6500 && hstt < 6600) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.6" })
                            $("#sec05_bg03").css({ opacity: "0.4" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "310px" });
                            $("#sec05_img01").css({ left: "-300px" });
                        }
                        else if (hstt >= 6600 && hstt < 6700) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.4" })
                            $("#sec05_bg03").css({ opacity: "0.6" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "375px" });
                            $("#sec05_img01").css({ left: "-220px" });
                        }
                        else if (hstt >= 6700 && hstt < 6800) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.2" })
                            $("#sec05_bg03").css({ opacity: "0.8" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "440px" });
                            $("#sec05_img01").css({ left: "-140px" });
                        }
                        else if (hstt >= 6800 && hstt < 6900) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "505px" });
                            $("#sec05_img01").css({ left: "-60px" });
                        }
                        else if (hstt >= 6900 && hstt < 7000) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "570px" });
                            $("#sec05_img01").css({ left: "20px" });
                        }
                        else if (hstt >= 7000 && hstt < 7100) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "635px" });
                            $("#sec05_img01").css({ left: "100px" });
                        }
                        else if (hstt >= 7100 && hstt < 7200) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "700px" });
                            $("#sec05_img01").css({ left: "180px" });
                        }
                        else if (hstt >= 7200 && hstt < 7300) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "700px" });
                            $("#sec05_img02").css({ left: "765px" });
                            $("#sec05_img01").css({ left: "260px" });
                        }
                        //sec06
                        if (hst < 8000) {
                            $("#sec06_txt01").css({ left: "600px", opacity: "0" })
                        }
                        else if (hst >= 8000) {
                            $("#sec06_txt01").css({ left: "700px", opacity: "1" })
                        }
                        var hstt = $(window).scrollTop();
                        if (hstt < 8900) {
                            $("#sec06_txt02").css({ opacity: "0" });
                        }
                        else if (hstt >= 8900) {
                            $("#sec06_txt02").css({ opacity: "1" });
                        }

                        //sec07
                        if (hst < 9700) {
                            $("#sec07_img02").css({ left: "50%", opacity: "0" })
                            $("#sec07_img03").css({ left: "50%", opacity: "0" })
                        }
                        else {
                            $("#sec07_img02").css({ left: "19%", opacity: "1" })
                            $("#sec07_img03").css({ left: "81%", opacity: "1" })
                        }

                    });

                    //sec08
                    $("#drag_img").draggable({ containment: "#drag_wrap", axis: "x" });
                    $("#drag_img").draggable({
                        start: function () {
                            var hstr = $("#drag_img").offset().left;
                            if (hstr <= 803 && hstr > 643) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= 543 && hstr > 188) {
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= 23 && hstr > -273) {
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= -374 && hstr > -730) {
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= -866) {
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        },
                        drag: function () {
                            var hstr = $("#drag_img").offset().left;
                            if (hstr <= 803 && hstr > 643) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= 543 && hstr > 188) {
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= 23 && hstr > -273) {
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= -374 && hstr > -730) {
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= -866) {
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        },
                        stop: function () {
                            var hstr = $("#drag_img").offset().left;
                            if (hstr <= 803 && hstr > 643) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= 543 && hstr > 188) {
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= 23 && hstr > -273) {
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= -374 && hstr > -730) {
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= -866) {
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        }
                    });
                    $("#color_pic li").click(function () {
                        $("#color_pic li").css({ border: "1px solid #fff", animation: "none" })
                        $(this).css({ animation: "ani01 linear 0.5s" })
                        $(this).delay(500).css({ border: "5px solid #fff" })
                    });
                    $("#color_pic li:nth-child(1)").click(function () {
                        $("#sec08_color").text("미드나잇 블랙");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/b0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/b1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/b2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/b3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/b4.png" })
                    });
                    $("#color_pic li:nth-child(2)").click(function () {
                        $("#sec08_color").text("오키드 그레이");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/o0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/o1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/o2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/o3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/o4.png" })
                    });
                    $("#color_pic li:nth-child(3)").click(function () {
                        $("#sec08_color").text("코랄 블루");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/c0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/c1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/c2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/c3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/c4.png" })
                    });
                    $("#color_pic li:nth-child(4)").click(function () {
                        $("#sec08_color").text("아크틱 실버");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/a0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/a1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/a2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/a3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/a4.png" })
                    });
                    $("#color_pic li:nth-child(5)").click(function () {
                        $("#sec08_color").text("로즈 핑크");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/r0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/r1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/r2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/r3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/r4.png" })
                    });
                    $("#color_pic li:nth-child(6)").click(function () {
                        $("#sec08_color").text("버건디 레드");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/br0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/br1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/br2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/br3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/br4.png" })
                    });

                }

                    //////////////////////////////////////////////////테블릿////////////////////////////////////////////////////////////
                else if (wiwi >= 769 && wiwi < 1366) {
                    $("#img02").stop().animate({ left: "45%", opacity: "1" }, 500, function () {
                        $("#img01").stop().animate({ left: "55%", opacity: "1" }, 500, function () {
                            $("#sec01_txt").stop().animate({ width: "560px" }, 800, function () {
                                $("#sec01_bg").css({ transform: "scale(0.9)" })
                            })
                        });
                    });

                    $("#menu li:nth-child(1)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "0px" }, 500)
                    })
                    $("#menu li:nth-child(2)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "969px" }, 500)
                    })
                    $("#menu li:nth-child(3)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "6100px" }, 500)
                    })
                    $("#menu li:nth-child(4)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "6900px" }, 500)
                    })
                    $("#menu li:nth-child(5)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "7900px" }, 500)
                    })
                    $("#menu li:nth-child(6)").click(function () {
                        $("html, body").stop().animate({ scrollTop: "9100px" }, 500)
                    })

                    //sec02
                    $(window).scroll(function () {
                        var hst = $(window).scrollTop();
                        if (hst >= 400 && hst < 1800) {
                            $("#sec02_txt01").css({ marginTop: "400px", opacity: "1" }, 800);
                        }
                        else {
                            $("#sec02_txt01").css({ marginTop: "450px", opacity: "0" });
                        }
                        if (hst >= 600 && hst < 1800) {
                            $("#sec02_txt02").css({ marginTop: "30px", opacity: "1" }, 800);
                        }
                        else {
                            $("#sec02_txt02").css({ marginTop: "130px", opacity: "0" });
                        }

                        //sec03
                        if (hst >= 1600) {
                            $("#sec03_img01").css({ left: "20%" });
                            $("#sec03_img02").css({ left: "80%" });
                            $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                        }
                        else {
                            $("#sec03_img01").css({ left: "50%" });
                            $("#sec03_img02").css({ left: "50%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        }

                        //sec04
                        if (hst < 3138) {
                            $("#sec04_bg").css({ position: "absolute", top: "3138px" })
                        }
                        else if (hst >= 3138 && hst < 4800) {
                            $("#sec04_bg").css({ position: "fixed", top: "0" })
                        }
                        else if (hst >= 4800) {
                            $("#sec04_bg").css({ position: "absolute", top: "4800px" })
                        }

                        //sec04 txt
                        var hstt = $(window).scrollTop();
                        if (hstt < 3300) {
                            $("#sec04_img02").css({ left: "50%", opacity: "1" })
                            $("#sec04_img03").css({ left: "50%", opacity: "1" })
                            $("#sec04_txt02").css({ top: "550px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "750px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                        }
                        else if (hstt >= 3300 && hstt < 3600) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                            $("#sec04_txt02").css({ top: "550px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "750px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                        }
                        else if (hstt >= 3600 && hstt < 4000) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                            $("#sec04_txt02").css({ top: "250px", opacity: "1" })
                            $("#sec04_txt03").css({ top: "750px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                        }
                        else if (hstt >= 4000 && hstt < 4400) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                            $("#sec04_txt02").css({ top: "250px", opacity: "1" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "1" })
                            $("#sec04_txt04").css({ top: "950px", opacity: "0" })
                        }
                        else if (hstt >= 4400 && hstt < 4800) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.3" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.3" })
                            $("#sec04_txt02").css({ top: "250px", opacity: "1" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "1" })
                            $("#sec04_txt04").css({ top: "650px", opacity: "1" })
                        }
                        //sec05
                        if (hst < 5700) {
                            $("#sec05_img_wrap").css({ position: "absolute", top: "5700px" })
                        }
                        else if (hst >= 5700 && hst < 8000) {
                            $("#sec05_img_wrap").css({ position: "fixed", top: "0px" })
                        }
                        else if (hst >= 8000) {
                            $("#sec05_img_wrap").css({ position: "absolute", top: "8000px" })
                        }

                        //sec05 contents
                        var hstt = $(window).scrollTop();
                        if (hstt < 5800) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "-10%" })
                            $("#sec05_img02").css({ left: "-100%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 5800 && hstt < 6000) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "20%" })
                            $("#sec05_img02").css({ left: "-100%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 6000 && hstt < 6200) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "50%" })
                            $("#sec05_img02").css({ left: "-100%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 6200 && hstt < 6400) {
                            $("#sec05_bg01").css({ opacity: "0.8" })
                            $("#sec05_bg02").css({ opacity: "0.2" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "100%" })
                            $("#sec05_img02").css({ left: "-100%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 6400 && hstt < 6600) {
                            $("#sec05_bg01").css({ opacity: "0.6" })
                            $("#sec05_bg02").css({ opacity: "0.4" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "100%" })
                            $("#sec05_img02").css({ left: "-70%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 6600 && hstt < 6800) {
                            $("#sec05_bg01").css({ opacity: "0.4" })
                            $("#sec05_bg02").css({ opacity: "0.6" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "800px" })
                            $("#sec05_img02").css({ left: "-40%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 6800 && hstt < 7000) {
                            $("#sec05_bg01").css({ opacity: "0.2" })
                            $("#sec05_bg02").css({ opacity: "0.8" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "100%" })
                            $("#sec05_img02").css({ left: "-10%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 7000 && hstt < 7200) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0.2" })
                            $("#sec05_img03").css({ left: "100%" })
                            $("#sec05_img02").css({ left: "20%" })
                            $("#sec05_img01").css({ left: "-100%" })
                        }
                        else if (hstt >= 7200 && hstt < 7400) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.8" })
                            $("#sec05_bg03").css({ opacity: "0.3" })
                            $("#sec05_img03").css({ left: "800px" })
                            $("#sec05_img02").css({ left: "50%" })
                            $("#sec05_img01").css({ left: "-50%" })
                        }
                        else if (hstt >= 7400 && hstt < 7600) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.6" })
                            $("#sec05_bg03").css({ opacity: "0.6" })
                            $("#sec05_img03").css({ left: "800px" })
                            $("#sec05_img02").css({ left: "80%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        else if (hstt >= 7600 && hstt < 7800) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.3" })
                            $("#sec05_bg03").css({ opacity: "0.8" })
                            $("#sec05_img03").css({ left: "800px" })
                            $("#sec05_img02").css({ left: "110%" })
                            $("#sec05_img01").css({ left: "10%" })
                        }
                        else if (hstt >= 7800 && hstt < 8000) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0.9" })
                            $("#sec05_img03").css({ left: "800px" })
                            $("#sec05_img02").css({ left: "120%" })
                            $("#sec05_img01").css({ left: "50%" })
                        }
                        else if (hstt >= 8000 && hstt < 8200) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "800px" })
                            $("#sec05_img02").css({ left: "700px" })
                            $("#sec05_img01").css({ left: "80%" })
                        }

                        //sec06
                        if (hst < 8800) {
                            $("#sec06_txt01").css({ left: "50%", opacity: "0" })
                        }
                        else if (hst >= 8800) {
                            $("#sec06_txt01").css({ left: "55%", opacity: "1" })
                        }
                        var hstt = $(window).scrollTop();
                        if (hstt < 9400) {
                            $("#sec06_txt02").css({ opacity: "0" })
                        }
                        else if (hstt >= 9400) {
                            $("#sec06_txt02").css({ opacity: "1" })
                        }

                        //sec07
                        if (hst < 10300) {
                            $("#sec07_img02").css({ left: "50%" })
                            $("#sec07_img03").css({ left: "50%" })
                        }
                        else if (hst >= 10300) {
                            $("#sec07_img02").css({ left: "15%" })
                            $("#sec07_img03").css({ left: "80%" })
                        }
                    });
                    $("#drag_img").draggable({ containment: "#drag_wrap", axis: "x" });
                    $("#drag_img").draggable({
                        start: function () {
                            var hstr = $("#drag_img").offset().left;
                            var wth = $(window).width();
                            var hwth = wth / 2
                            if (hstr <= hwth && hstr > hwth - 200) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 350 && hstr > hwth - 200 - 350) {
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 750 && hstr > hwth - 200 - 750) {
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 1150 && hstr > hwth - 200 - 1150) {
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 1500 && hstr > hwth - 500 - 1500) {
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }

                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        },
                        drag: function () {
                            var hstr = $("#drag_img").offset().left;
                            var wth = $(window).width();
                            var hwth = wth / 2
                            if (hstr <= hwth && hstr > hwth - 200) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 350 && hstr > hwth - 200 - 350) {
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 750 && hstr > hwth - 200 - 750) {
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 1150 && hstr > hwth - 200 - 1150) {
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 1500 && hstr > hwth - 500 - 1500) {
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        },
                        stop: function () {
                            var hstr = $("#drag_img").offset().left;
                            var wth = $(window).width();
                            var hwth = wth / 2
                            if (hstr <= hwth && hstr > hwth - 200) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 350 && hstr > hwth - 200 - 350) {
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 750 && hstr > hwth - 200 - 750) {
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 1150 && hstr > hwth - 200 - 1150) {
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else if (hstr <= hwth - 1500 && hstr > hwth - 500 - 1500) {
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }
                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        }
                    });
                    $("#color_pic li").click(function () {
                        $("#color_pic li").css({ border: "1px solid #fff", animation: "none" })
                        $(this).css({ animation: "ani01 linear 0.5s" })
                        $(this).delay(500).css({ border: "5px solid #fff" })
                    });
                    $("#color_pic li:nth-child(1)").click(function () {
                        $("#sec08_color").text("미드나잇 블랙");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/b0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/b1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/b2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/b3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/b4.png" })
                    });
                    $("#color_pic li:nth-child(2)").click(function () {
                        $("#sec08_color").text("오키드 그레이");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/o0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/o1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/o2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/o3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/o4.png" })
                    });
                    $("#color_pic li:nth-child(3)").click(function () {
                        $("#sec08_color").text("코랄 블루");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/c0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/c1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/c2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/c3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/c4.png" })
                    });
                    $("#color_pic li:nth-child(4)").click(function () {
                        $("#sec08_color").text("아크틱 실버");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/a0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/a1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/a2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/a3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/a4.png" })
                    });
                    $("#color_pic li:nth-child(5)").click(function () {
                        $("#sec08_color").text("로즈 핑크");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/r0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/r1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/r2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/r3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/r4.png" })
                    });
                    $("#color_pic li:nth-child(6)").click(function () {
                        $("#sec08_color").text("버건디 레드");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/br0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/br1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/br2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/br3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/br4.png" })
                    });

                }
                    //////////////////////////////////////////////////모바일///////////////////////////////////
                else if (wiwi < 769) {
                    $("#img01").stop().animate({ left: "50%", opacity: "1" }, 500, function () {
                        $("#sec01_txt").stop().animate({ width: "270px" }, 800, function () {
                            $("#sec01_bg").css({ transform: "scale(0.9)" })
                        })
                    });
                    


                    $(window).scroll(function () {
                        var hst = $(window).scrollTop();
                        //2
                        if (hst >= 500 && hst < 1800) {
                            $("#sec02_txt01").css({ top: "300px", opacity: "1" }, 800);
                        }
                        else {
                            $("#sec02_txt01").css({ top: "400px", opacity: "0" });
                        }
                        if (hst >= 700 && hst < 1800) {
                            $("#sec02_txt02").css({ top: "400px", opacity: "1" }, 800);
                        }
                        else {
                            $("#sec02_txt02").css({ top: "500px", opacity: "0" });
                        }

                        //3
                        if (hst < 1400) {
                            $("#sec03_img01").css({ left: "50%" });
                            $("#sec03_img02").css({ left: "50%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        }
                        else if (hst >= 1400 && hst < 1800) {
                            $("#sec03_img01").css({ left: "20%" });
                            $("#sec03_img02").css({ left: "75%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        }
                        else if (hst >= 1800 && hst < 2600) {
                            $("#sec03_img01").css({ left: "20%" });
                            $("#sec03_img02").css({ left: "75%" });
                            $("#sec03_txt02").css({ top: "600px", opacity: "1" });
                        }
                        else if (hst >= 2600) {
                            $("#sec03_img01").css({ left: "50%" });
                            $("#sec03_img02").css({ left: "50%" });
                            $("#sec03_txt02").css({ top: "700px", opacity: "0" });
                        }

                        //4
                        if (hst < 2569) {
                            $("#sec04_bg").css({ position: "absolute", top: "2569px" })
                        }
                        else if (hst >= 2569 && hst < 3800) {
                            $("#sec04_bg").css({ position: "fixed", top: "0" })
                        }
                        else if (hst >= 3800) {
                            $("#sec04_bg").css({ position: "absolute", top: "3800px" })
                        }
                        //sec04 txt
                        var hstt = $(window).scrollTop();
                        if (hstt < 2600) {
                            $("#sec04_img02").css({ left: "50%", opacity: "1" })
                            $("#sec04_img03").css({ left: "50%", opacity: "1" })
                            $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 2600 && hstt < 2700) {
                            $("#sec04_img02").css({ left: "40%", opacity: "1" })
                            $("#sec04_img03").css({ left: "60%", opacity: "1" })
                            $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 2700 && hstt < 2800) {
                            $("#sec04_img02").css({ left: "30%", opacity: "0.8" })
                            $("#sec04_img03").css({ left: "70%", opacity: "0.8" })
                            $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 2800 && hstt < 2900) {
                            $("#sec04_img02").css({ left: "20%", opacity: "0.6" })
                            $("#sec04_img03").css({ left: "80%", opacity: "0.6" })
                            $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 2900 && hstt < 3000) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.4" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.4" })
                            $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 3000 && hstt < 3100) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                            $("#sec04_txt02").css({ top: "300px", opacity: "0" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 3100 && hstt < 3300) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                            $("#sec04_txt02").css({ top: "220px", opacity: "1" })
                            $("#sec04_txt03").css({ top: "450px", opacity: "0" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 3300 && hstt < 3500) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                            $("#sec04_txt02").css({ top: "220px", opacity: "1" })
                            $("#sec04_txt03").css({ top: "370px", opacity: "1" })
                            $("#sec04_txt04").css({ top: "600px", opacity: "0" })
                        }
                        else if (hstt >= 3500 && hstt < 3600) {
                            $("#sec04_img02").css({ left: "10%", opacity: "0.2" })
                            $("#sec04_img03").css({ left: "90%", opacity: "0.2" })
                            $("#sec04_txt02").css({ top: "220px", opacity: "1" })
                            $("#sec04_txt03").css({ top: "370px", opacity: "1" })
                            $("#sec04_txt04").css({ top: "520px", opacity: "1" })
                        }
                        //5
                        if (hst < 4650) {
                            $("#sec05_img_wrap").css({ position: "absolute", top: "4650px" })
                        }
                        else if (hst >= 4650 && hst < 5900) {
                            $("#sec05_img_wrap").css({ position: "fixed", top: "0px" })
                        }
                        else if (hst > 5900) {
                            $("#sec05_img_wrap").css({ position: "absolute", top: "5900px" })
                        }

                        //sec05 contents
                        var hstt = $(window).scrollTop();
                        if (hstt < 4700) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "-10%" })
                            $("#sec05_img02").css({ left: "-50%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 4700 && hstt < 4800) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "20%" })
                            $("#sec05_img02").css({ left: "-50%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 4800 && hstt < 4900) {
                            $("#sec05_bg01").css({ opacity: "1" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "50%" })
                            $("#sec05_img02").css({ left: "-50%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 4900 && hstt < 5000) {
                            $("#sec05_bg01").css({ opacity: "0.8" })
                            $("#sec05_bg02").css({ opacity: "0.2" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "80%" })
                            $("#sec05_img02").css({ left: "-30%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 5000 && hstt < 5100) {
                            $("#sec05_bg01").css({ opacity: "0.6" })
                            $("#sec05_bg02").css({ opacity: "0.4" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "110%" })
                            $("#sec05_img02").css({ left: "-10%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 5100 && hstt < 5200) {
                            $("#sec05_bg01").css({ opacity: "0.4" })
                            $("#sec05_bg02").css({ opacity: "0.6" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "10%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 5200 && hstt < 5300) {
                            $("#sec05_bg01").css({ opacity: "0.2" })
                            $("#sec05_bg02").css({ opacity: "0.8" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "30%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 5300 && hstt < 5400) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "1" })
                            $("#sec05_bg03").css({ opacity: "0" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "50%" })
                            $("#sec05_img01").css({ left: "-20%" })
                        }
                        if (hstt >= 5400 && hstt < 5500) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.8" })
                            $("#sec05_bg03").css({ opacity: "0.2" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "70%" })
                            $("#sec05_img01").css({ left: "-6%" })
                        }
                        if (hstt >= 5500 && hstt < 5600) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.6" })
                            $("#sec05_bg03").css({ opacity: "0.4" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "90%" })
                            $("#sec05_img01").css({ left: "8%" })
                        }
                        if (hstt >= 5600 && hstt < 5700) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.4" })
                            $("#sec05_bg03").css({ opacity: "0.6" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "100%" })
                            $("#sec05_img01").css({ left: "22%" })
                        }
                        if (hstt >= 5700 && hstt < 5800) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0.2" })
                            $("#sec05_bg03").css({ opacity: "0.8" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "120%" })
                            $("#sec05_img01").css({ left: "36%" })
                        }
                        if (hstt >= 5800 && hstt < 5900) {
                            $("#sec05_bg01").css({ opacity: "0" })
                            $("#sec05_bg02").css({ opacity: "0" })
                            $("#sec05_bg03").css({ opacity: "1" })
                            $("#sec05_img03").css({ left: "140%" })
                            $("#sec05_img02").css({ left: "140%" })
                            $("#sec05_img01").css({ left: "50%" })
                        }
                        //6
                        if (hst < 6700) {
                            $("#sec06_txt01").css({ top: "750px", opacity: "0" })
                        }
                        else if (hst >= 6700) {
                            $("#sec06_txt01").css({ top: "650px", opacity: "1" })
                        }
                    });

                    //sec08
                    $("#drag_img").draggable({ containment: "#drag_wrap", axis: "x" });
                    $("#drag_img").draggable({
                        start: function () {
                            var hstr = $("#drag_img").offset().left;
                            var wth = $(window).width();
                            var hwth = wth / 2
                            if (hstr <= hwth) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }

                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        },
                        drag: function () {
                            var hstr = $("#drag_img").offset().left;
                            var wth = $(window).width();
                            var hwth = wth / 2

                            $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })

                        },
                        stop: function () {
                            var hstr = $("#drag_img").offset().left;
                            var wth = $(window).width();
                            var hwth = wth / 2
                            if (hstr <= hwth) {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1.1)", zIndex: "2", opacity: "1" })
                            }

                            else {
                                $("#drag_img li:nth-child(1)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(2)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(3)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(4)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                                $("#drag_img li:nth-child(5)").css({ transform: "scale(1)", zIndex: "0", opacity: "0.8" })
                            }
                        }
                    });
                    //컬러 픽
                    $("#color_pic li").click(function () {
                        $("#color_pic li").css({ border: "1px solid #fff", animation: "none" })
                        $(this).css({ animation: "ani01 linear 0.5s" })
                        $(this).delay(500).css({ border: "5px solid #fff" })
                    });
                    $("#color_pic li:nth-child(1)").click(function () {
                        $("#sec08_color").text("미드나잇 블랙");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/b0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/b1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/b2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/b3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/b4.png" })
                    });
                    $("#color_pic li:nth-child(2)").click(function () {
                        $("#sec08_color").text("오키드 그레이");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/o0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/o1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/o2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/o3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/o4.png" })
                    });
                    $("#color_pic li:nth-child(3)").click(function () {
                        $("#sec08_color").text("코랄 블루");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/c0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/c1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/c2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/c3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/c4.png" })
                    });
                    $("#color_pic li:nth-child(4)").click(function () {
                        $("#sec08_color").text("아크틱 실버");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/a0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/a1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/a2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/a3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/a4.png" })
                    });
                    $("#color_pic li:nth-child(5)").click(function () {
                        $("#sec08_color").text("로즈 핑크");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/r0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/r1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/r2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/r3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/r4.png" })
                    });
                    $("#color_pic li:nth-child(6)").click(function () {
                        $("#sec08_color").text("버건디 레드");
                        $("#drag_img li:nth-child(1) img").attr({ src: "./image/br0.png" })
                        $("#drag_img li:nth-child(2) img").attr({ src: "./image/br1.png" })
                        $("#drag_img li:nth-child(3) img").attr({ src: "./image/br2.png" })
                        $("#drag_img li:nth-child(4) img").attr({ src: "./image/br3.png" })
                        $("#drag_img li:nth-child(5) img").attr({ src: "./image/br4.png" })
                    });
                    //menu
                    $("#ham01").click(function () {
                        $(this).hide();
                        $("#ham02").slideDown()
                    })
                    $("#clo").click(function () {
                        $("#ham02").slideUp()
                        $("#ham01").show();
                    })


                }


            })
            
                
            
            /*$(window).click(function () {
                var hstr = $("#drag_img").offset().left;
                var wth = $(window).width();
                var hwth = wth / 2
                var lili = $(window).scrollTop()
                alert(lili);
            })*/
        });