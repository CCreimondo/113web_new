
$(document).ready(function () {
    
    var windowsHeight = $(window).height();
    var windowsWidth = $(window).width();
    var windowsScale = windowsWidth / windowsHeight;

    var initWidth = 2000;
    var initHeight = 1125;
    var initScale = initWidth / initHeight;

    var finalWidth = 0;
    var finalHeight = 0;
    var tempScale;

    if (windowsScale >= initScale) {
        finalWidth = windowsWidth;
        tempScale = finalWidth / initWidth;
        finalHeight = initHeight * tempScale;
    }
    else {
        finalHeight = windowsHeight;
        tempScale = finalHeight / initHeight;
        finalWidth = initWidth * tempScale;
    }

    $("#homepageBg").width(finalWidth);
    $("#homepageBg").height(finalHeight);

    var point_1_x = finalWidth * (261 / initWidth);
    var point_1_y = finalHeight * (366 / initHeight);
    $(".point_1").offset({ left: point_1_x, top: point_1_y });
    var block_1_x = point_1_x + 47;
    var block_1_y = point_1_y + 17;
    $(".block_1").offset({ left: block_1_x, top: block_1_y });
    var container_1_x = point_1_x + 50;
    var container_1_y = point_1_y + 28;
    $(".container_1").offset({ left: container_1_x, top: container_1_y });


    var point_2_x = finalWidth * (643 / initWidth);
    var point_2_y = finalHeight * (757 / initHeight);
    $(".point_2").offset({ left: point_2_x, top: point_2_y });
    var block_2_x = point_2_x - 311;
    var block_2_y = point_2_y + 17;
    $(".block_2").offset({ left: block_2_x, top: block_2_y });
    var container_2_x = point_2_x - 307;
    var container_2_y = point_2_y + 28;
    $(".container_2").offset({ left: container_2_x, top: container_2_y });

    var point_3_x = finalWidth * (776 / initWidth);
    var point_3_y = finalHeight * (209 / initHeight);
    $(".point_3").offset({ left: point_3_x, top: point_3_y });
    var block_3_x = point_3_x + 47;
    var block_3_y = point_3_y + 17;
    $(".block_3").offset({ left: block_3_x, top: block_3_y });
    var container_3_x = point_3_x + 50;
    var container_3_y = point_3_y + 28;
    $(".container_3").offset({ left: container_3_x, top: container_3_y });

    var point_4_x = finalWidth * (1221 / initWidth);
    var point_4_y = finalHeight * (729 / initHeight);
    $(".point_4").offset({ left: point_4_x, top: point_4_y });
    var block_4_x = point_4_x + 47;
    var block_4_y = point_4_y + 17;
    $(".block_4").offset({ left: block_4_x, top: block_4_y });
    var container_4_x = point_4_x + 50;
    var container_4_y = point_4_y + 28;
    $(".container_4").offset({ left: container_4_x, top: container_4_y });

    var point_5_x = finalWidth * (1654 / initWidth);
    var point_5_y = finalHeight * (366 / initHeight);
    $(".point_5").offset({ left: point_5_x, top: point_5_y });
    var block_5_x = point_5_x - 311;
    var block_5_y = point_5_y + 17;
    $(".block_5").offset({ left: block_5_x, top: block_5_y });
    var container_5_x = point_5_x - 307;
    var container_5_y = point_5_y + 28;
    $(".container_5").offset({ left: container_5_x, top: container_5_y });


    //when resize
    $(window).resize(function () {
        var windowsHeight = $(window).height();
        var windowsWidth = $(window).width();
        var windowsScale = windowsWidth / windowsHeight;

        var initWidth = 2000;
        var initHeight = 1125;
        var initScale = initWidth / initHeight;

        var finalWidth = 0;
        var finalHeight = 0;
        var tempScale;

        if (windowsScale >= initScale) {
            finalWidth = windowsWidth;
            tempScale = finalWidth / initWidth;
            finalHeight = initHeight * tempScale;
        }
        else {
            finalHeight = windowsHeight;
            tempScale = finalHeight / initHeight;
            finalWidth = initWidth * tempScale;
        }

        $("#homepageBg").width(finalWidth);
        $("#homepageBg").height(finalHeight);

        var point_1_x = finalWidth * (261 / initWidth);
        var point_1_y = finalHeight * (366 / initHeight);
        $(".point_1").offset({ left: point_1_x, top: point_1_y });
        var block_1_x = point_1_x + 47;
        var block_1_y = point_1_y + 17;
        $(".block_1").offset({ left: block_1_x, top: block_1_y });
        var container_1_x = point_1_x + 50;
        var container_1_y = point_1_y + 28;
        $(".container_1").offset({ left: container_1_x, top: container_1_y });


        var point_2_x = finalWidth * (643 / initWidth);
        var point_2_y = finalHeight * (757 / initHeight);
        $(".point_2").offset({ left: point_2_x, top: point_2_y });
        var block_2_x = point_2_x - 311;
        var block_2_y = point_2_y + 17;
        $(".block_2").offset({ left: block_2_x, top: block_2_y });
        var container_2_x = point_2_x - 307;
        var container_2_y = point_2_y + 28;
        $(".container_2").offset({ left: container_2_x, top: container_2_y });

        var point_3_x = finalWidth * (776 / initWidth);
        var point_3_y = finalHeight * (209 / initHeight);
        $(".point_3").offset({ left: point_3_x, top: point_3_y });
        var block_3_x = point_3_x + 47;
        var block_3_y = point_3_y + 17;
        $(".block_3").offset({ left: block_3_x, top: block_3_y });
        var container_3_x = point_3_x + 50;
        var container_3_y = point_3_y + 28;
        $(".container_3").offset({ left: container_3_x, top: container_3_y });

        var point_4_x = finalWidth * (1221 / initWidth);
        var point_4_y = finalHeight * (729 / initHeight);
        $(".point_4").offset({ left: point_4_x, top: point_4_y });
        var block_4_x = point_4_x + 47;
        var block_4_y = point_4_y + 17;
        $(".block_4").offset({ left: block_4_x, top: block_4_y });
        var container_4_x = point_4_x + 50;
        var container_4_y = point_4_y + 28;
        $(".container_4").offset({ left: container_4_x, top: container_4_y });

        var point_5_x = finalWidth * (1654 / initWidth);
        var point_5_y = finalHeight * (366 / initHeight);
        $(".point_5").offset({ left: point_5_x, top: point_5_y });
        var block_5_x = point_5_x - 311;
        var block_5_y = point_5_y + 17;
        $(".block_5").offset({ left: block_5_x, top: block_5_y });
        var container_5_x = point_5_x - 307;
        var container_5_y = point_5_y + 28;
        $(".container_5").offset({ left: container_5_x, top: container_5_y });
    });


    //hover
    $(".point_1").hover(function () {
        $(".block_1").animate({
            opacity: '1'
        }, 200);
        $(".container_1").delay(150).slideDown(300);
    },
    function () {
        $(".container_1").delay().slideUp(200);
        $(".block_1").delay(200).animate({
            opacity: '0'
        }, 30);
    });
    $(".point_2").hover(function () {
        $(".block_2").animate({
            opacity: '1'
        }, 200);
        $(".container_2").delay(150).slideDown(300);
    },
    function () {
        $(".container_2").delay().slideUp(200);
        $(".block_2").delay(200).animate({
            opacity: '0'
        }, 30);
    });
    $(".point_3").hover(function () {
        $(".block_3").animate({
            opacity: '1'
        }, 200);
        $(".container_3").delay(150).slideDown(300);
    },
    function () {
        $(".container_3").delay().slideUp(200);
        $(".block_3").delay(200).animate({
            opacity: '0'
        }, 30);
    });
    $(".point_4").hover(function () {
        $(".block_4").animate({
            opacity: '1'
        }, 200);
        $(".container_4").delay(150).slideDown(300);
    },
    function () {
        $(".container_4").delay().slideUp(200);
        $(".block_4").delay(200).animate({
            opacity: '0'
        }, 30);
    });
    $(".point_5").hover(function () {
        $(".block_5").animate({
            opacity: '1'
        }, 200);
        $(".container_5").delay(150).slideDown(300);
    },
    function () {
        $(".container_5").delay().slideUp(200);
        $(".block_5").delay(200).animate({
            opacity: '0'
        }, 30);
    });
});