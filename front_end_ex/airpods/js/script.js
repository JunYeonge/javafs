$(function () {
    $("#main_background").stop().delay(500).animate({
        left: "-1920px"
    }, 1500);
    $("#main_img").stop().delay(1000).animate({
        opacity: 0
    }, 1000, function () {
        $("#content_main").children("p").stop().delay(100).animate({
            opacity: "1"
        }, 300, function () {
            $("#main_text01").stop().animate({
                opacity: "1"
            }, 200);
        });
    });
    function move() {
        $("#main_img03").animate({
            top: '250px'
        }, 1000).animate({
            top: '260px'
        }, 1000, move);
    }
    move();
//header
    $(".nav_icon02").click(function () {
        $("nav").animate({
            right: "-220px"
        }, 500);
        $(".nav_icon01").css({
            opacity: "1"
        });
    });
    $(".nav_icon01").click(function () {
        $(".nav_icon01").css({
            opacity: "0"
        });
        $("nav").animate({
            right: "0%"
        }, 500);
        $("nav").css({
            opacity: "1"
        });
    });
    var ii = $(window).width();
    if (ii > 1366) {
        $("#nav_all ul li").eq(0).click(function () {
            $("html, body").stop().animate({
                scrollTop: "0"
            }, 500);
        });
        $("#nav_all ul li").eq(1).click(function () {
            $("html, body").stop().animate({
                scrollTop: "954"
            }, 500);
        });
        $("#nav_all ul li").eq(2).click(function () {
            $("html, body").stop().animate({
                scrollTop: "2354"
            }, 500);
        });
        $("#nav_all ul li").eq(3).click(function () {
            $("html, body").stop().animate({
                scrollTop: "5411"
            }, 500);
        });
        $("#nav_all ul li").eq(4).click(function () {
            $("html, body").stop().animate({
                scrollTop: "7011"
            }, 500);
        });
        $("#nav_all ul li").eq(5).click(function () {
            $("html, body").stop().animate({
                scrollTop: "7960"
            }, 500);
        });
    }
    if (ii >= 768 && ii <= 1365) {
        $("#nav_all ul li").eq(0).click(function () {
            $("html, body").stop().animate({
                scrollTop: "0"
            }, 500);
        });
        $("#nav_all ul li").eq(1).click(function () {
            $("html, body").stop().animate({
                scrollTop: "960"
            }, 500);
        });
        $("#nav_all ul li").eq(2).click(function () {
            $("html, body").stop().animate({
                scrollTop: "2560"
            }, 500);
        });
        $("#nav_all ul li").eq(3).click(function () {
            $("html, body").stop().animate({
                scrollTop: "5660"
            }, 500);
        });
        $("#nav_all ul li").eq(4).click(function () {
            $("html, body").stop().animate({
                scrollTop: "7360"
            }, 500);
        });
        $("#nav_all ul li").eq(5).click(function () {
            $("html, body").stop().animate({
                scrollTop: "8303"
            }, 500);
        });
    }
//window
    $(window).scroll(function () {
        var ww = $(window).width();
        var scroll = $(window).scrollTop();
 //웹

        if (ww > 1366) {
            $("#scrolltop01").text(scroll);
//design01
            if (scroll >= 300 && scroll <= 900) {
                $(".title01").animate({
                    opacity: "1"
                }, 100);
            }

//design03
            if (scroll >= 400 && scroll <= 2000) {

                $(".design_img01").stop().animate({
                    opacity: "1"
                }, 200);
                $("#design_img01").stop().animate({
                    marginRight: "-580px"
                }, 100, function () {
                    $(".design_img02").stop().animate({
                        opacity: "1"
                    }, 100, function () {
                        $(".design_img03").stop().animate({
                            opacity: "1"
                        }, 100, function () {
                            $(".design_img04").stop().animate({
                                opacity: "1"
                            }, 200, function () {
                                $(".design_img05").stop().animate({
                                    opacity: "1"
                                }, 100, function () {
                                    $(".design_img06").stop().animate({
                                        opacity: "1"
                                    }, 100, function () {
                                        $(".design_img07").stop().animate({
                                            opacity: "1"
                                        }, 200, function () {
                                            $(".design_img08").stop().animate({
                                                opacity: "1"
                                            }, 100, function () {
                                                $("#design_txt").stop().animate({
                                                    opacity: "1",
                                                    marginLeft: "-460px"
                                                }, 300);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
 //design04
            if (scroll >= 810 && scroll <= 2300) {
                $("#design_img02 img").eq(0).animate({
                    opacity: "0"
                }, 200, function () {
                    $("#design_img02 img").eq(1).animate({
                        opacity: "1"
                    }, 400, function () {
                        $("#design_detail>div img:nth-child(1)").animate({
                            opacity: "1"
                        }, 200, function () {
                            $("#design_detail>div img:nth-child(2)").animate({
                                opacity: "1"
                            }, 300, function () {
                                $("#design_detail>div img:nth-child(3)").animate({
                                    opacity: "1"
                                }, 200, function () {
                                    $("#design_detail>div img:nth-child(4)").animate({
                                        opacity: "1"
                                    }, 300, function () {
                                        $("#design_detail>div img:nth-child(5)").animate({
                                            opacity: "1"
                                        }, 200)
                                    });
                                });
                            });
                        });
                    });
                });
            }
//design05
            if (scroll >= 1700) {
                $(".title02").animate({
                    opacity: "1"
                }, 500);
            }

//design06
            if (scroll >= 1800) {
                $("#continuous_onetab").animate({
                    marginLeft: "-460px"
                }, 500, function () {
                    $("#continious_animation").animate({
                        opacity: "1"
                    }, 600, function () {
                        $("#continuous_txt").animate({
                            opacity: "1"
                        }, 300, function () {
                            $("#continuous_txt span").animate({
                                width: "400px"
                            }, 200, function () {
                                $("#continuous_img").animate({
                                    marginRight: "100px"
                                }, 400, function () {
                                    $("#continuous_img img:nth-child(2)").animate({
                                        opacity: "1"
                                    }, 200, function () {
                                        $("#continuous_img img:nth-child(3)").animate({
                                            opacity: "1"
                                        }, 200);
                                    });
                                });
                            });
                        });
                    })
                });
            }
//design07
            if (scroll >= 2600) {
                $("#continuous02_img img:nth-child(1)").animate({
                    top: "0px"
                }, 400);
                $("#continuous02_img img:nth-child(2)").animate({
                    top: "100px"
                }, 400);
                $("#continuous02_txt p:nth-child(1)").animate({
                    bottom: "100px"
                }, 500, function () {
                    $("#continuous02_txt p:nth-child(3)").animate({
                        opacity: "1",
                        marginTop: "42px"
                    }, 500);
                });
            }
//design08
            if (scroll >= 3200) {
                $("#content_continuous03").animate({
                    borderRadius: "200px"
                }, 500);
            }
//design09
            if (scroll >= 3200 && scroll <= 3700) {
                $("#continuous02_img").css({
                    position: "fixed",
                    top: "0px",
                    zIndex: "100"
                });
            } else {
                $("#continuous02_img").css({
                    position: "absolute",
                    top: "80px"
                });
            }
 //design10
            if (scroll >= 3400) {
                $(".title03").animate({
                    opacity: "1"
                }, 500);
                $("#siri_img").animate({
                    opacity: "1"
                }, 500);

            }
//design11
            if (scroll > 3500) {
                $("#siri_animation").animate({
                    opacity: "1"
                }, 200, function () {
                    $(".siri01 p:nth-child(1)").animate({
                        opacity: "1"
                    }, 200, function () {
                        $(".siri01 p:nth-child(3)").animate({
                            opacity: "1"
                        }, 100, function () {
                            $(".siri01 p:nth-child(2)").delay(100).animate({
                                width: "1000px"
                            }, 100);
                        });
                    });
                });
            }
//design12
            if (scroll >= 3993) {
                $(".siri_txt01 img").animate({
                    marginLeft: "0px"
                }, 500, function () {
                    $(".siri_txt02 img").animate({
                        marginLeft: "0px"
                    }, 300, function () {
                        $(".siri_txt03 img").animate({
                            marginLeft: "0px"
                        }, 400, function () {
                            $(".siri_txt04 img").animate({
                                marginLeft: "0px"
                            }, 400);
                        });
                    })
                });
                $(".siri_txt01 p").animate({
                    marginRight: "0px"
                }, 500, function () {
                    $(".siri_txt02 p").animate({
                        marginRight: "0px"
                    }, 300, function () {
                        $(".siri_txt03 p").animate({
                            marginRight: "0px"
                        }, 400, function () {
                            $(".siri_txt04 p").animate({
                                marginRight: "0px"
                            }, 400);
                        });
                    })
                });
            }
//design13
            if (scroll >= 4293) {
                $(".battery02 p:nth-child(2)").animate({
                    width: "1400px"
                }, 400, function () {
                    $(".battery02 p:nth-child(1)").animate({
                        opacity: "1"
                    }, 400, function () {
                        $(".battery02 p:nth-child(3)").animate({
                            opacity: "1"
                        }, 400, function () {});
                    });
                });
            }
//design14
            if (scroll >= 4893) {
                $(".title04 p:nth-child(1)").animate({
                    paddingRight: "10px",
                    opacity: "1"
                }, 700);
                $(".title04 p:nth-child(2)").animate({
                    paddingLeft: "0px",
                    opacity: "1"
                }, 700);
            }
//design15
            if (scroll >= 5000) {
                $("#technology_img img:nth-child(2)").animate({
                    opacity: "1"
                }, 200, function () {
                    $("#technology_txt p:nth-child(2)").animate({
                        width: "600px"
                    }, 100, function () {
                        $("#technology_txt p:nth-child(1)").animate({
                            paddingLeft: "520px",
                            opacity: "1"
                        }, 300, function () {
                            $("#technology_txt p:nth-child(3)").animate({
                                opacity: "1"
                            }, 300, function () {
                                $("#technology_img img:nth-child(2)").animate({
                                    opacity: "0"
                                }, 100);
                                $("#technology_img img:nth-child(1)").animate({
                                    opacity: "1"
                                }, 200);
                            });
                        });
                    });
                });
            }
//design16
            if (scroll >= 5406) {
                $(".title05 p:nth-child(1)").animate({
                    paddingTop: "60px",
                    opacity: "1"
                }, 500);
                $(".title05 p:nth-child(2)").animate({
                    paddingTop: "15px",
                    opacity: "1"
                }, 500);
            }
//design17
            if (scroll >= 5700) {
                $(".micro_img01 img:nth-child(2)").animate({
                    opacity: "0"
                }, 500, function () {
                    $(".micro_img01 img:nth-child(3)").animate({
                        opacity: "1"
                    }, 300, function () {});
                });
                $(".micro_img02 img:nth-child(3)").animate({
                    opacity: "0"
                }, 500, function () {
                    $(".micro_img02 img:nth-child(4)").animate({
                        opacity: "1"
                    }, 300, function () {});
                });
                $(".micro_txt01 p:nth-child(2)").delay(300).animate({
                    width: "400px",
                    opacity: "1"
                }, 500);
                $(".micro_txt01 p:nth-child(1)").delay(300).animate({
                    opacity: "1"
                }, 500);
                $(".micro_txt01 p:nth-child(3)").delay(300).animate({
                    opacity: "1"
                }, 500, function () {
                    $("#micro_circle>div").animate({
                        opacity: "1"
                    }, 200, function () {

                        $(".micro_txt02 div:nth-child(1) span").animate({
                            width: "200px"
                        }, 300, function () {
                            $(".micro_txt02 div:nth-child(1) p").animate({
                                opacity: "1",
                                paddingLeft: "160px"
                            }, 200);
                        });
                        $(".micro_txt02 div:nth-child(2) span").delay(800).animate({
                            width: "200px"
                        }, 300, function () {
                            $(".micro_txt02 div:nth-child(2) p").animate({
                                opacity: "1",
                                paddingLeft: "100px"
                            }, 200);
                        });
                        $(".micro_txt02 div:nth-child(3) span").delay(1600).animate({
                            width: "200px"
                        }, 300, function () {
                            $(".micro_txt02 div:nth-child(3) p").animate({
                                opacity: "1",
                                paddingLeft: "110px"
                            }, 200);
                        });
                        $(".micro_txt02 div:nth-child(4) span").delay(2200).animate({
                            width: "200px"
                        }, 300, function () {
                            $(".micro_txt02 div:nth-child(4) p").animate({
                                opacity: "1",
                                paddingLeft: "160px"
                            }, 200);
                        });
                        $(".micro_txt02 div:nth-child(5) span").delay(3000).animate({
                            width: "200px"
                        }, 300, function () {
                            $(".micro_txt02 div:nth-child(5) p").animate({
                                opacity: "1",
                                paddingLeft: "160px"
                            }, 200);
                        });
                    });
                });
            }

//design18
            if (scroll >= 6360) {
                $(".title06").animate({
                    opacity: "1"
                }, 800);
            }
//design19
            if (scroll >= 6860) {
                $("#sound_audio img").animate({
                    opacity: "1"
                }, 1000);
                $("#sound_audio p:nth-child(2)").animate({
                    bottom: "360px"
                }, 800);
            }
//design20
            if (scroll > 6962) {
                $("#sound_audio p:nth-child(3)").animate({
                    opacity: "1"
                }, 800);
            }
//design21
            if (scroll > 7400) {
                $("#sound_music div img").animate({
                    opacity: "1"
                }, 800, function () {
                    $("#sound_music div p").animate({
                        opacity: "1"
                    }, 300);
                });
            }
        }
		
		
		
// ====================================== 태블릿

        if (ww >= 768 && ww <= 1365) {
            $("#scrolltop01").text(scroll);
//design01
            if (scroll >= 300 && scroll <= 900) {
                $(".title01").animate({
                    opacity: "1"
                }, 100);
            }
//design02 + design03
            if (scroll >= 500 && scroll <= 2000) {

                $(".design_img01").stop().animate({
                    opacity: "1"
                }, 300);
                $("#design_img01").stop().animate({
                    marginRight: "-280px"
                }, 200, function () {
                    $(".design_img02").stop().animate({
                        opacity: "1"
                    }, 100, function () {
                        $(".design_img03").stop().animate({
                            opacity: "1"
                        }, 200, function () {
                            $(".design_img04").stop().animate({
                                opacity: "1"
                            }, 100, function () {
                                $(".design_img05").stop().animate({
                                    opacity: "1"
                                }, 200, function () {
                                    $(".design_img06").stop().animate({
                                        opacity: "1"
                                    }, 200, function () {
                                        $(".design_img07").stop().animate({
                                            opacity: "1"
                                        }, 200, function () {
                                            $(".design_img08").stop().animate({
                                                opacity: "1"
                                            }, 100);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
//design03
            if (scroll >= 700 && scroll <= 2000) {
                $("#design_txt").stop().animate({
                    opacity: "1",
                    marginLeft: "-200px"
                }, 500);
            }
//design04
            if (scroll >= 1400 && scroll <= 2300) {
                $("#design_img02 img").eq(0).animate({
                    opacity: "0"
                }, 200, function () {
                    $("#design_img02 img").eq(1).animate({
                        opacity: "1"
                    }, 400, function () {
                        $("#design_detail>div img:nth-child(1)").animate({
                            opacity: "1"
                        }, 200, function () {
                            $("#design_detail>div img:nth-child(2)").animate({
                                opacity: "1"
                            }, 300, function () {
                                $("#design_detail>div img:nth-child(3)").animate({
                                    opacity: "1"
                                }, 200, function () {
                                    $("#design_detail>div img:nth-child(4)").animate({
                                        opacity: "1"
                                    }, 300, function () {
                                        $("#design_detail>div img:nth-child(5)").animate({
                                            opacity: "1"
                                        }, 200)
                                    });
                                });
                            });
                        });
                    });
                });
            }
//design05
            if (scroll >= 1600) {
                $(".title02").animate({
                    opacity: "1"
                }, 500);
            }

//design06
            if (scroll >= 2100) {
                $("#continuous_onetab").animate({
                    marginLeft: "-340px"
                }, 300, function () {
                    $("#continious_animation").animate({
                        opacity: "1"
                    }, 300, function () {
                        $("#continuous_txt").animate({
                            opacity: "1"
                        }, 200, function () {
                            $("#continuous_txt span").animate({
                                width: "400px"
                            }, 200, function () {
                                $("#continuous_img").animate({
                                    marginRight: "100px"
                                }, 200, function () {
                                    $("#continuous_img img:nth-child(2)").animate({
                                        opacity: "1"
                                    }, 300, function () {
                                        $("#continuous_img img:nth-child(3)").animate({
                                            opacity: "1"
                                        }, 200);
                                    });
                                });
                            });
                        });
                    })
                });
            }
//design07
            if (scroll >= 2600) {
                $("#continuous02_img img:nth-child(1)").animate({
                    top: "0px"
                }, 800);
                $("#continuous02_img img:nth-child(2)").animate({
                    top: "100px"
                }, 800);
                $("#continuous02_txt p:nth-child(1)").animate({
                    bottom: "100px"
                }, 800, function () {
                    $("#continuous02_txt p:nth-child(3)").animate({
                        opacity: "1",
                        marginTop: "42px"
                    }, 500);
                });
            }
//design09
            if (scroll >= 3400 && scroll <= 3900) {
                $("#continuous02_img").css({
                    position: "fixed",
                    top: "0px",
                    zIndex: "100"
                });
            } else {
                $("#continuous02_img").css({
                    position: "absolute",
                    top: "80px"
                });
            }
//design10
            if (scroll >= 3600) {
                $(".title03").animate({
                    opacity: "1"
                }, 500);
                $("#siri_img").animate({
                    opacity: "1"
                }, 500);

            }
//design11
            if (scroll > 3700) {
                $("#siri_animation").animate({
                    opacity: "1"
                }, 300, function () {
                    $(".siri01 p:nth-child(1)").animate({
                        opacity: "1"
                    }, 200, function () {
                        $(".siri01 p:nth-child(3)").animate({
                            opacity: "1"
                        }, 300, function () {
                            $(".siri01 p:nth-child(2)").delay(100).animate({
                                width: "1000px"
                            }, 300);
                        });
                    });
                });
            }
//design12
            if (scroll >= 4000) {
                $(".siri_txt01 img").animate({
                    marginLeft: "0px"
                }, 500, function () {
                    $(".siri_txt02 img").animate({
                        marginLeft: "0px"
                    }, 300, function () {
                        $(".siri_txt03 img").animate({
                            marginLeft: "0px"
                        }, 400, function () {
                            $(".siri_txt04 img").animate({
                                marginLeft: "0px"
                            }, 400);
                        });
                    })
                });
                $(".siri_txt01 p").animate({
                    marginRight: "0px"
                }, 500, function () {
                    $(".siri_txt02 p").animate({
                        marginRight: "0px"
                    }, 300, function () {
                        $(".siri_txt03 p").animate({
                            marginRight: "0px"
                        }, 400, function () {
                            $(".siri_txt04 p").animate({
                                marginRight: "0px"
                            }, 400);
                        });
                    })
                });
            }
//design13
            if (scroll >= 4600) {
                $(".battery02 p:nth-child(2)").animate({
                    width: "1400px"
                }, 400, function () {
                    $(".battery02 p:nth-child(1)").animate({
                        opacity: "1"
                    }, 400, function () {
                        $(".battery02 p:nth-child(3)").animate({
                            opacity: "1"
                        }, 400, function () {});
                    });
                });
            }
//design14
            if (scroll >= 5000) {
                $(".title04 p:nth-child(1)").animate({
                    paddingRight: "10px",
                    opacity: "1"
                }, 700);
                $(".title04 p:nth-child(2)").animate({
                    paddingLeft: "0px",
                    opacity: "1"
                }, 700);
            }
//design15
            if (scroll >= 5100) {
                $("#technology_img img:nth-child(2)").animate({
                    opacity: "1"
                }, 200, function () {
                    $("#technology_txt p:nth-child(2)").animate({
                        width: "600px"
                    }, 300, function () {
                        $("#technology_txt p:nth-child(1)").animate({
                            paddingLeft: "520px",
                            opacity: "1"
                        }, 400, function () {
                            $("#technology_txt p:nth-child(3)").animate({
                                opacity: "1"
                            }, 300, function () {
                                $("#technology_img img:nth-child(2)").animate({
                                    opacity: "0"
                                }, 100);
                                $("#technology_img img:nth-child(1)").animate({
                                    opacity: "1"
                                }, 300);
                            });
                        });
                    });
                });
            }
//design16
            if (scroll >= 5700) {
                $(".title05 p:nth-child(1)").animate({
                    paddingTop: "60px",
                    opacity: "1"
                }, 500);
                $(".title05 p:nth-child(2)").animate({
                    paddingTop: "15px",
                    opacity: "1"
                }, 500);
            }
//design17
            if (scroll >= 6099) {
                $(".micro_img01 img:nth-child(2)").animate({
                    opacity: "0"
                }, 300, function () {
                    $(".micro_img01 img:nth-child(3)").animate({
                        opacity: "1"
                    }, 200, function () {});
                });

                $(".micro_txt01 p:nth-child(2)").delay(300).animate({
                    width: "400px",
                    opacity: "1"
                }, 300);
                $(".micro_txt01 p:nth-child(1)").delay(300).animate({
                    opacity: "1"
                }, 300);
                $(".micro_txt01 p:nth-child(3)").delay(300).animate({
                    opacity: "1"
                }, 300);
            }
//design17
            if (scroll >= 6399) {
                $(".micro_img02 img:nth-child(3)").animate({
                    opacity: "0"
                }, 300, function () {
                    $(".micro_img02 img:nth-child(4)").animate({
                        opacity: "1"
                    }, 200, function () {});
                });
                $("#micro_circle>div").delay(300).animate({
                    opacity: "1"
                }, 300, function () {

                    $(".micro_txt02 div:nth-child(1) span").animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(1) p").animate({
                            opacity: "1",
                            paddingLeft: "160px"
                        }, 200);
                    });
                    $(".micro_txt02 div:nth-child(2) span").delay(800).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(2) p").animate({
                            opacity: "1",
                            paddingLeft: "100px"
                        }, 200);
                    });
                    $(".micro_txt02 div:nth-child(3) span").delay(1600).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(3) p").animate({
                            opacity: "1",
                            paddingLeft: "110px"
                        }, 200);
                    });
                    $(".micro_txt02 div:nth-child(4) span").delay(2200).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(4) p").animate({
                            opacity: "1",
                            paddingLeft: "160px"
                        }, 200);
                    });
                    $(".micro_txt02 div:nth-child(5) span").delay(3000).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(5) p").animate({
                            opacity: "1",
                            paddingLeft: "160px"
                        }, 200);
                    });
                });
            }
//design18
            if (scroll >= 6799) {
                $(".title06").animate({
                    opacity: "1"
                }, 800);
            }
//design19
            if (scroll >= 7080) {
                $("#sound_audio img").animate({
                    opacity: "1"
                }, 1000);
                $("#sound_audio p:nth-child(2)").animate({
                    bottom: "360px"
                }, 800);
            }
//design20
            if (scroll > 7280) {
                $("#sound_audio p:nth-child(3)").animate({
                    opacity: "1"
                }, 800);
            }
//design21
            if (scroll > 7780) {
                $("#sound_music div img").animate({
                    opacity: "1"
                }, 800, function () {
                    $("#sound_music div p").animate({
                        opacity: "1"
                    }, 300);
                });
            }

        }






// 모바일 ====================================== 

        if (ww <= 767) {
            $("#scrolltop01").text(scroll);
//design01
            if (scroll >= 150 && scroll <= 900) {
                $(".title01").animate({
                    opacity: "1"
                }, 100);
            }
//design02 + design03
            if (scroll >= 300 && scroll <= 2000) {

                $(".design_img01").stop().animate({
                    opacity: "1"
                }, 500);
                $("#design_img01").stop().animate({
                    marginRight: "-170px"
                }, 700, function () {
                    $(".design_img02").stop().animate({
                        opacity: "1"
                    }, 100, function () {
                        $(".design_img03").stop().animate({
                            opacity: "1"
                        }, 200, function () {
                            $(".design_img04").stop().animate({
                                opacity: "1"
                            }, 300, function () {
                                $(".design_img05").stop().animate({
                                    opacity: "1"
                                }, 200, function () {
                                    $(".design_img06").stop().animate({
                                        opacity: "1"
                                    }, 200, function () {
                                        $(".design_img07").stop().animate({
                                            opacity: "1"
                                        }, 300, function () {
                                            $(".design_img08").stop().animate({
                                                opacity: "1"
                                            }, 100);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
//design03
            if (scroll >= 500 && scroll <= 2000) {
                $("#design_txt").stop().animate({
                    opacity: "1",
                    marginLeft: "-160px"
                }, 500);
            }
//design04
            if (scroll >= 1300 && scroll <= 2300) {
                $("#design_img02 img").eq(0).animate({
                    opacity: "0"
                }, 200, function () {
                    $("#design_img02 img").eq(1).animate({
                        opacity: "1"
                    }, 400, function () {
                        $("#design_detail>div img:nth-child(5)").animate({
                            opacity: "1"
                        }, 200, function () {
                            $("#design_detail>div img:nth-child(2)").animate({
                                opacity: "1"
                            }, 300, function () {
                                $("#design_detail>div img:nth-child(3)").animate({
                                    opacity: "1"
                                }, 200, function () {
                                    $("#design_detail>div img:nth-child(4)").animate({
                                        opacity: "1"
                                    }, 300);
                                });
                            });
                        });
                    });
                });
            }
//design05
            if (scroll >= 1700) {
                $(".title02").animate({
                    opacity: "1"
                }, 500);
            }

//design06
            if (scroll >= 1800) {
                $("#continuous_onetab").animate({
                    marginLeft: "-50px"
                }, 500, function () {
                    $("#continious_animation").animate({
                        opacity: "1"
                    }, 500);
                });
            }
            if (scroll >= 2293) {
                $("#continuous_txt div").animate({
                    height: "110px"
                }, 500);
                $("#continuous_img").delay(500).animate({
                    marginRight: "200px"
                }, 500, function () {
                    $("#continuous_img img:nth-child(2)").animate({
                        opacity: "1"
                    }, 500, function () {
                        $("#continuous_img img:nth-child(3)").animate({
                            opacity: "1"
                        }, 500);
                    });
                });
            }
            if (scroll >= 2300) {
                $("#continuous_txt").animate({
                    opacity: "1"
                }, 500);
            }
//design07
            if (scroll >= 3100) {
                $("#continuous02_txt p:nth-child(1)").animate({
                    bottom: "100px"
                }, 800, function () {
                    $("#continuous02_txt p:nth-child(3)").animate({
                        opacity: "1",
                        marginTop: "42px"
                    }, 500);
                });
            }
//design10
            if (scroll >= 3700) {
                $(".title03").animate({
                    opacity: "1"
                }, 500);
                $("#siri_img").animate({
                    opacity: "1"
                }, 500);
            }
//design11
            if (scroll > 3900) {
                $("#siri_animation").animate({
                    opacity: "1"
                }, 400, function () {
                    $(".siri01 p:nth-child(1)").animate({
                        opacity: "1"
                    }, 400, function () {
                        $(".siri01 p:nth-child(3)").animate({
                            opacity: "1"
                        }, 400, function () {
                            $(".siri01 p:nth-child(2)").delay(100).animate({
                                width: "1000px"
                            }, 400);
                        });
                    });
                });
            }
//design12
            if (scroll >= 4400) {
                $(".siri_txt01 img").animate({
                    marginLeft: "150px"
                }, 500, function () {
                    $(".siri_txt02 img").animate({
                        marginLeft: "150px"
                    }, 300, function () {
                        $(".siri_txt03 img").animate({
                            marginLeft: "150px"
                        }, 400, function () {
                            $(".siri_txt04 img").animate({
                                marginLeft: "150px"
                            }, 400);
                        });
                    })
                });
                $(".siri_txt01 p").animate({
                    marginRight: "0px"
                }, 500, function () {
                    $(".siri_txt02 p").animate({
                        marginRight: "0px"
                    }, 300, function () {
                        $(".siri_txt03 p").animate({
                            marginRight: "0px"
                        }, 400, function () {
                            $(".siri_txt04 p").animate({
                                marginRight: "0px"
                            }, 400);
                        });
                    })
                });
            }
//design13
            if (scroll >= 4800) {
                $(".battery02 p:nth-child(2)").animate({
                    width: "1400px"
                }, 400, function () {
                    $(".battery02 p:nth-child(1)").animate({
                        opacity: "1"
                    }, 400, function () {
                        $(".battery02 p:nth-child(3)").animate({
                            opacity: "1"
                        }, 400, function () {});
                    });
                });
            }
//design14
            if (scroll >= 5600) {
                $(".title04 p:nth-child(1)").animate({
                    paddingRight: "10px",
                    opacity: "1"
                }, 700);
                $(".title04 p:nth-child(2)").animate({
                    paddingLeft: "0px",
                    opacity: "1"
                }, 700);
            }
//design15
            if (scroll >= 5900) {
                $("#technology_img img:nth-child(2)").animate({
                    opacity: "1"
                }, 500, function () {
                    $("#technology_txt p:nth-child(2)").animate({
                        width: "500px"
                    }, 300, function () {
                        $("#technology_txt p:nth-child(1)").animate({
                            paddingLeft: "400px",
                            opacity: "1"
                        }, 400, function () {
                            $("#technology_txt p:nth-child(3)").animate({
                                opacity: "1"
                            }, 800, function () {
                                $("#technology_img img:nth-child(2)").animate({
                                    opacity: "0"
                                }, 100);
                                $("#technology_img img:nth-child(1)").animate({
                                    opacity: "1"
                                }, 500);
                            });
                        });
                    });
                });
            }
//design16
            if (scroll >= 6200) {
                $(".title05 p:nth-child(1)").animate({
                    paddingTop: "60px",
                    opacity: "1"
                }, 500);
                $(".title05 p:nth-child(2)").animate({
                    paddingTop: "15px",
                    opacity: "1"
                }, 500);
            }
//design17 - 1 
            if (scroll >= 6600) {
                $(".micro_img01 img:nth-child(2)").animate({
                    opacity: "0"
                }, 700, function () {
                    $(".micro_img01 img:nth-child(3)").animate({
                        opacity: "1"
                    }, 1000, function () {});
                });

                $(".micro_txt01 p:nth-child(2)").delay(800).animate({
                    width: "400px",
                    opacity: "1"
                }, 500);
                $(".micro_txt01 p:nth-child(1)").delay(1200).animate({
                    opacity: "1"
                }, 500);
                $(".micro_txt01 p:nth-child(3)").delay(1200).animate({
                    opacity: "1"
                }, 500);
            }
//design17 - 2 
            if (scroll >= 7100) {
                $(".micro_img02 img:nth-child(3)").animate({
                    opacity: "0"
                }, 700, function () {
                    $(".micro_img02 img:nth-child(4)").animate({
                        opacity: "1"
                    }, 1000, function () {});
                });
                $("#micro_circle>div").delay(700).animate({
                    opacity: "1"
                }, 500, function () {

                    $(".micro_txt02 div:nth-child(1) span").animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(1) p").animate({
                            opacity: "1",
                            paddingLeft: "160px"
                        }, 400);
                    });
                    $(".micro_txt02 div:nth-child(2) span").delay(800).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(2) p").animate({
                            opacity: "1",
                            paddingLeft: "100px"
                        }, 400);
                    });
                    $(".micro_txt02 div:nth-child(3) span").delay(1600).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(3) p").animate({
                            opacity: "1",
                            paddingLeft: "110px"
                        }, 400);
                    });
                    $(".micro_txt02 div:nth-child(4) span").delay(2200).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(4) p").animate({
                            opacity: "1",
                            paddingLeft: "160px"
                        }, 400);
                    });
                    $(".micro_txt02 div:nth-child(5) span").delay(3000).animate({
                        width: "200px"
                    }, 300, function () {
                        $(".micro_txt02 div:nth-child(5) p").animate({
                            opacity: "1",
                            paddingLeft: "160px"
                        }, 400);
                    });
                });
            }
//design18
            if (scroll >= 7600) {
                $(".title06").animate({
                    opacity: "1"
                }, 800);
            }
//design19
            if (scroll >= 7700) {
                $("#sound_audio img").animate({
                    opacity: "1"
                }, 500);
                $("#sound_audio p:nth-child(2)").animate({
                    bottom: "470px"
                }, 500);
            }
//design20
            if (scroll > 7800) {
                $("#sound_audio p:nth-child(3)").animate({
                    opacity: "1"
                }, 600);
            }
//design21
            if (scroll > 8300) {
                $("#sound_music div img").animate({
                    opacity: "1"
                }, 800, function () {
                    $("#sound_music div p").animate({
                        opacity: "1"
                    }, 300);
                });
            }
        }
    }); //window scrolltop
});