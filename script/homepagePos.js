
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
    })
});