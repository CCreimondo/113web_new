// JavaScript Document
    var sUserAgent = navigator.userAgent;
    var fAppVersion = parseFloat(navigator.appVersion);
    var isOprea = sUserAgent.indexOf("Opera") > -1;
    var isIE = sUserAgent.indexOf("compatible") > -1
    && sUserAgent.indexOf("MSIE") > -1
    && !isOprea;

    function innerHtml() {
        window.location.href = "attention.html";
    }

    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+)");
        reIE.test(sUserAgent);
        var FIEVersion = parseFloat(RegExp["$1"]);
        if (FIEVersion <= 9) {
            innerHtml();
        }
    }