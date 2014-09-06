$(document).ready(function () {

    $.fn.fullpage({
        slidesColor: ['#1bbc9b', '#4BBFC3', '#FFFFFF', '#f90'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                var center_title_1 = $(window).width() / 2 - 157;
                var center_title_2 = $(window).width() / 2 - 238;
                $(".members_title_1").delay(100).animate({
                    left: [center_title_1, 'swing'],
                    opacity: '1'
                }, 300);
                $(".members_title_2").delay(100).animate({
                    left: [center_title_2, 'swing'],
                    opacity: '1'
                }, 300);

                $(".row_1").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['0', 'linear']
                }, 100);

                $(".row_1_1").delay(0).animate({
                    left: ['0', 'swing']
                 //   top: ['0', 'linear']
                }, 600);
                $(".row_1_2").delay(100).animate({
                    left: ['200px', 'swing']
                   // top: ['0', 'linear']
                }, 400);
                $(".row_1_3").delay(300).animate({
                    left: ['400px', 'swing']
                   // top: ['0', 'linear']
                }, 200);
                $(".row_1_4").delay(500).animate({
                    left: ['600px', 'swing']
                  //  top: ['0', 'linear']
                }, 0);

                $(".row_2_1").delay(100).animate({
                    left: ['0', 'swing']
                  //  top: ['200px', 'linear']
                }, 600);
                $(".row_2_2").delay(300).animate({
                    left: ['200px', 'swing']
                 //   top: ['200px', 'linear']
                }, 400);
                $(".row_2_3").delay(500).animate({
                    left: ['400px', 'swing']
                 //   top: ['200px', 'linear']
                }, 200);
                $(".row_2_4").delay(700).animate({
                    left: ['600px', 'swing']
                  //  top: ['200px', 'linear']
                }, 0);
            }

            if (index == 3) {
                $(".achieve_title").animate({
                    opacity: '1'
                }, 300);
                $("#CSong").find("img").animate({
                    bottom: ['-45px', 'swing']
                }, 400);
                $("#SSS").find("img").animate({
                    bottom: ['-54px', 'swing']
                }, 400);
                $("#Pigeon").find("img").animate({
                    bottom: ['-290px', 'swing']
                }, 400);
                $("#baiban").find("img").animate({
                    bottom: ['-375px', 'swing']
                }, 400);
                $(".text").delay(300).animate({
                    top: '0',
                    opacity: '1'
                }, 600);
                $(".prev").delay(600).animate({
                    opacity: '1'
                }, 300);
                $(".next").delay(600).animate({
                    opacity: '1'
                }, 300);
                $(".like").delay(800).animate({
                    opacity: '1'
                }, 300);
                $(".achieve1").delay(0).animate({
                    left: '0',
                }, 600);
                $(".achieve2").delay(50).animate({
                    left: '0',
                }, 670);
                $(".achieve3").delay(100).animate({
                    left: '0',
                }, 740);
                $(".achieve4").delay(150).animate({
                    left: '0',
                }, 810);
                $(".nav_achieve").find("span").delay().animate({
                    opacity: '1'
                }, 0)
            }

            if (index == 4) {
                $("#contact .container h1").delay(100).animate({
                    top: ['0', 'swing'],
                    opacity: '1'
                }, 850);
                $("#contact .container span").delay(100).animate({
                    top: ['0', 'swing'],
                    opacity: '1'
                }, 850);
                $(".name").delay(0).animate({
                    left: ['0', 'swing']
                }, 400);
                $(".email").delay(60).animate({
                    left: ['0', 'swing']
                }, 400);
                $(".qqnumbers").delay(120).animate({
                    left: ['0', 'swing']
                }, 400);
                $(".telephone").delay(180).animate({
                    left: ['0', 'swing']
                }, 400);
                $(".input_ideas").delay(180).animate({
                    left: ['0', 'swing']
                }, 400);
                $(".sub_form").delay(240).animate({
                    left: '0'
                }, 400);
            }
        },
        onLeave: function (index, direction) {
            if (index == '2') {
                var title_1 = $(window).width() / 2 - 157 - 200;
                var title_2 = $(window).width() / 2 - 238 + 200;
                $(".members_title_1").delay(200).animate({
                    left: [title_1, 'swing'],
                    opacity: '0'
                }, 200);
                $(".members_title_2").delay(200).animate({
                    left: [title_2, 'swing'],
                    opacity: '0'
                }, 200);

                $(".row_1_1").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);
                $(".row_1_2").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);
                $(".row_1_3").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);
                $(".row_1_4").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);

                $(".row_2_1").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);
                $(".row_2_2").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);
                $(".row_2_3").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);
                $(".row_2_4").delay().animate({
                    left: ['600px', 'linear'],
                    top: ['200px', 'linear']
                }, 300);

                //$(".row_1").delay(150).animate({
                //    left: ['600px', 'linear'],
                //    top: ['200px', 'linear']
                //}, 40);
            }
            if (index == '3') {
                $(".achieve_title").animate({
                    opacity: '0'
                }, 200);
                $("#CSong").find("img").delay(0).animate({
                    bottom: '-395px'
                }, 400);
                $("#SSS").find("img").delay(0).animate({
                    bottom: ['-424px', 'swing']
                }, 400);
                $("#Pigeon").find("img").delay(0).animate({
                    bottom: ['-655px', 'swing']
                }, 400);
                $("#baiban").find("img").delay(0).animate({
                    bottom: ['-790px', 'swing']
                }, 400);
                $(".text").delay(0).animate({
                    top: '-50px',
                    opacity: '0'
                }, 400);
                $(".prev").delay(0).animate({
                    opacity: '0'
                }, 400);
                $(".next").delay(0).animate({
                    opacity: '0'
                }, 400);
                $(".like").delay(0).animate({
                    opacity: '0'
                }, 400);
                $(".achieve1").delay(0).animate({
                    left: '502px',
                }, 0);
                $(".achieve2").delay(0).animate({
                    left: '468px',
                }, 0);
                $(".achieve3").delay(0).animate({
                    left: '434px',
                }, 0);
                $(".achieve4").delay(0).animate({
                    left: '400px',
                }, 0);
                $(".nav_achieve").find("span").delay(0).animate({
                    opacity: '0'
                }, 90)
            }
            if (index == '4') {
                $("#contact .container h1").delay(100).animate({
                    top: ['-50px', 'swing'],
                    opacity: '0'
                }, 850);
                $("#contact .container span").delay(100).animate({
                    top: ['-50px', 'swing'],
                    opacity: '0'
                }, 850);
                $(".name").delay(240).animate({
                    left: '1000px'
                }, 400);
                $(".email").delay(180).animate({
                    left: '1000px'
                }, 400);
                $(".qqnumbers").delay(120).animate({
                    left: '1000px'
                }, 400);
                $(".telephone").delay(60).animate({
                    left: '1000px'
                }, 400);
                $(".input_ideas").delay(60).animate({
                    left: '1000px'
                }, 400);
                $(".sub_form").delay(0).animate({
                    left: '1000px'
                }, 400);
            }
        }
    });

    var AchieveWindowsWidth = $("#windows").width();
    var AnAchieveWidth = AchieveWindowsWidth + 80;
    var TotallContainerWidth = (AnAchieveWidth) * 4;

    //nav for achievement
    var changedCSS = {
        background: '#B8B8C7',
        color: '#FFFFFF',
        transition: '600ms'
    };
    var normalCSS = {
        background: '#FFFFFF',
        color: '#B8B8C7',
        transition: '400ms'
    };

    function changeAchieve1() {
        $(".achieve1").css(changedCSS);
        $(".achieve2").css(normalCSS);
        $(".achieve3").css(normalCSS);
        $(".achieve4").css(normalCSS);
    }
    function changeAchieve2() {
        $(".achieve1").css(normalCSS);
        $(".achieve2").css(changedCSS);
        $(".achieve3").css(normalCSS);
        $(".achieve4").css(normalCSS);
    }
    function changeAchieve3() {
        $(".achieve1").css(normalCSS);
        $(".achieve2").css(normalCSS);
        $(".achieve3").css(changedCSS);
        $(".achieve4").css(normalCSS);
    }
    function changeAchieve4() {
        $(".achieve1").css(normalCSS);
        $(".achieve2").css(normalCSS);
        $(".achieve3").css(normalCSS);
        $(".achieve4").css(changedCSS);
    }

    function change(changedPos) {
        if (changedPos == 0)
            changeAchieve1();
        else {
            var number = changedPos / AnAchieveWidth;
            if (number == -1)
                changeAchieve2();
            if (number == -2)
                changeAchieve3();
            if (number == -3)
                changeAchieve4();
        };
    }
    var beganPos = $(".container").position().left;
    change(beganPos);
    $(".next").click(function () {
        var currentPosition = $(".container").position();       
        var changedPosition = (currentPosition.left - AnAchieveWidth) % TotallContainerWidth;
        $(".container").stop().animate({
            left: [changedPosition, 'swing']
        }, 700);
        change(changedPosition);
    });

    $(".prev").click(function () {
        var currentPosition = $(".container").position();
        var changedPosition = (currentPosition.left + AnAchieveWidth) % TotallContainerWidth;
        if (changedPosition > 0)
            changedPosition = 0 - TotallContainerWidth + AnAchieveWidth;
        $(".container").stop().animate({
            left: [changedPosition, 'swing']
        }, 700);
        change(changedPosition);
    });
    

    $(".achieve1").click(function () {
        var currentPosition = $(".container").position();
        if (currentPosition.left == 0)
            return;
        else 
            $(".container").stop().animate({
                left: [0, 'swing']
            }, 700);
        change(0);
    });
    $(".achieve2").click(function () {
        var currentPosition = $(".container").position();
        if (currentPosition.left == -AnAchieveWidth)
            return;
        else 
            $(".container").stop().animate({
                left: [-AnAchieveWidth, 'swing']
            }, 700);
        change(-AnAchieveWidth);
    });
    $(".achieve3").click(function () {
        var currentPosition = $(".container").position();
        if (currentPosition.left == -AnAchieveWidth * 2)
            return;
        else 
            $(".container").stop().animate({
                left: [-AnAchieveWidth * 2, 'swing']
            }, 700);
        change(-AnAchieveWidth * 2);
    });
    $(".achieve4").click(function () {
        var currentPosition = $(".container").position();
        if (currentPosition.left == -AnAchieveWidth * 3)
            return;
        else 
            $(".container").stop().animate({
                left: [-AnAchieveWidth * 3, 'swing']
            }, 700);
        change(-AnAchieveWidth * 3);
    });

    //switch members
    /*
    $(".nav_members_1").click(function () {
        $(".hp_1").addClass("test");
        $(".photos_1").animate({opacity: '1'}, 0).delay(800).hide();
        $(".photos_2").animate({ opacity: '1' }, 0).delay(800).show();
        $(".hp_2").animate({ opacity: '1' }, 0).delay(800).removeClass("test");
    });
    $(".nav_members_2").click(function () {
        $(".hp_2").addClass("test");
        $(".photos_1").animate({}, 0).delay(800).show();
        $(".photos_2").animate({}, 0).delay(800).hide();
        $(".hp_1").animate({}, 0).delay(800).removeClass("test");
    })

    ratate is failwoy
    */
    $(".nav_members_1").click(function () {
        $(".hp_1").addClass("test");
        $(".hp_4").removeClass("test");
        $(".hp_1").delay(799).animate({
            opacity: '0'
        }, 0);
        $(".hp_2").delay(799).animate({
            opacity: '1'
        }, 0);
        $(".photos_1").css("z-index", "9");
        $(".photos_2").css("z-index", "10");
        $(".photos_3").css("z-index", "9");
        $(".photos_4").css("z-index", "9");
    });

    $(".nav_members_2").click(function () {
        $(".hp_2").addClass("test");
        $(".hp_1").removeClass("test");
        $(".hp_2").delay(799).animate({
            opacity: '0'
        }, 0);
        $(".hp_3").delay(799).animate({
            opacity: '1'
        }, 0);
        $(".photos_1").css("z-index", "9");
        $(".photos_2").css("z-index", "9");
        $(".photos_3").css("z-index", "10");
        $(".photos_4").css("z-index", "9");
    });
    $(".nav_members_3").click(function () {
        $(".hp_3").addClass("test");
        $(".hp_2").removeClass("test");
        $(".hp_3").delay(799).animate({
            opacity: '0'
        }, 0);
        $(".hp_4").delay(799).animate({
            opacity: '1'
        }, 0);
        $(".photos_1").css("z-index", "9");
        $(".photos_2").css("z-index", "9");
        $(".photos_3").css("z-index", "9");
        $(".photos_4").css("z-index", "10");
    });
    $(".nav_members_4").click(function () {
        $(".hp_4").addClass("test");
        $(".hp_3").removeClass("test");
        $(".hp_4").delay(799).animate({
            opacity: '0'
        }, 0);
        $(".hp_1").delay(799).animate({
            opacity: '1'
        }, 0);
        $(".photos_1").css("z-index", "10");
        $(".photos_2").css("z-index", "9");
        $(".photos_3").css("z-index", "9");
        $(".photos_4").css("z-index", "9");
    });
    /*

    //淡出效果
    $(".nav_members_1").click(function () {
        $(".hp_1").animate({
            opacity: '0'
        }, 600); 
        $(".hp_2").delay(300).animate({
            opacity: '1'
        }, 600);
        $(".photos_1").css("z-index", "9");
        $(".photos_2").css("z-index", "10");
        $(".photos_3").css("z-index", "9");
        $(".photos_4").css("z-index", "9");
    });

    $(".nav_members_2").click(function () {
        $(".hp_2").animate({
            opacity: '0'
        }, 600);
        $(".hp_3").delay(300).animate({
            opacity: '1'
        }, 600);
        $(".photos_1").css("z-index", "9");
        $(".photos_2").css("z-index", "9");
        $(".photos_3").css("z-index", "10");
        $(".photos_4").css("z-index", "9");
    });
    $(".nav_members_3").click(function () {
        $(".hp_3").animate({
            opacity: '0'
        }, 600);
        $(".hp_4").delay(300).animate({
            opacity: '1'
        }, 600);
        $(".photos_1").css("z-index", "9");
        $(".photos_2").css("z-index", "9");
        $(".photos_3").css("z-index", "9");
        $(".photos_4").css("z-index", "10");
    });
    $(".nav_members_4").click(function () {
        $(".hp_4").animate({
            opacity: '0'
        }, 600);
        $(".hp_1").delay(300).animate({
            opacity: '1'
        }, 600);
        $(".photos_1").css("z-index", "10");
        $(".photos_2").css("z-index", "9");
        $(".photos_3").css("z-index", "9");
        $(".photos_4").css("z-index", "9");
    });
    */
});