
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

    var point_1_x = finalWidth * (271 / initWidth);
    var point_1_y = finalHeight * (377 / initHeight);
    $(".point_1").offset({left: point_1_x, top: point_1_y});

    var point_2_x = finalWidth * (668 / initWidth);
    var point_2_y = finalHeight * (784 / initHeight);
    $(".point_2").offset({ left: point_2_x, top: point_2_y });

    var point_3_x = finalWidth * (958 / initWidth);
    var point_3_y = finalHeight * (285 / initHeight);
    $(".point_3").offset({ left: point_3_x, top: point_3_y });

    var point_4_x = finalWidth * (1271 / initWidth);
    var point_4_y = finalHeight * (755 / initHeight);
    $(".point_4").offset({ left: point_4_x, top: point_4_y });

    var point_5_x = finalWidth * (1721 / initWidth);
    var point_5_y = finalHeight * (377 / initHeight);
    $(".point_5").offset({ left: point_5_x, top: point_5_y });

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

        var point_1_x = finalWidth * (271 / initWidth);
        var point_1_y = finalHeight * (377 / initHeight);
        $(".point_1").offset({ left: point_1_x, top: point_1_y });

        var point_2_x = finalWidth * (668 / initWidth);
        var point_2_y = finalHeight * (784 / initHeight);
        $(".point_2").offset({ left: point_2_x, top: point_2_y });

        var point_3_x = finalWidth * (958 / initWidth);
        var point_3_y = finalHeight * (285 / initHeight);
        $(".point_3").offset({ left: point_3_x, top: point_3_y });

        var point_4_x = finalWidth * (1271 / initWidth);
        var point_4_y = finalHeight * (755 / initHeight);
        $(".point_4").offset({ left: point_4_x, top: point_4_y });

        var point_5_x = finalWidth * (1721 / initWidth);
        var point_5_y = finalHeight * (377 / initHeight);
        $(".point_5").offset({ left: point_5_x, top: point_5_y });
    })
});