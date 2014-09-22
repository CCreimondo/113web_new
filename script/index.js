/*
 * Hehe, serious not want to add comment. Let it go.
 * Synchronous. 
 */

/* $begin cookie object construction */

/* CookieUtil Oject -  */
var CookieUtil = {

    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart
                + cookieName.length, cookieEnd));
        }

        return cookieValue;
    },

    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" +
                     encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }

        if (domain) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },

    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};

/* subCookieUtil object
 * - document.cookie=data=name=xxx&phone=123456
 */
var SubCookieUtil = {
    get: function (name, subName) {
        var subCookies = this.getAll(name);
        if (subCookies) {
            return subCookies[subName];
        } else {
            return null;
        }
    },

    getAll: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookies,
            i, len,     // add self
            parts,
            result = {};

        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);

            if (cookieValue.length > 0) {
                subCookies = cookieValue.split("&");

                for (i = 0, len = subCookies.length; i < len; i++) {
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] =
                        decodeURIComponent(parts[1]);
                }

                return result;
            }
        }

        return null;
    },

    set: function (name, subName, value, expires, path, domain, secure) {
        var subcookies = this.getAll(name) || {};
        subcookies[subName] = value;
        this.setAll(name, subcookies, expires, path, domain, secure);
    },

    setAll: function (name, subcookies, expires, path, domain, secure) {

        var cookieText = encodeURIComponent(name) + "=",
            subcookieParts = [],
            subName;

        for (subName in subcookies) {
            if (subName.length > 0 && subcookies.hasOwnProperty(subName)) {
                subcookieParts.push(encodeURIComponent(subName) + "=" +
                    encodeURIComponent(subcookies[subName]));
            }
        }

        if (subcookieParts.length > 0) {
            cookieText += subcookieParts.join("&");

            if (expires instanceof Date) {
                cookieText += "; expires=" + expires.toGMTString();
            }

            if (path) {
                cookieText += "; path=" + path;
            }

            if (domain) {
                cookieText += "; domain=" + domain;
            }

            if (secure) {
                cookieText += "; secure";
            } 
        } else {
            cookieText += "; expires=" + (new Date(0)).toGMTString();
        }

        document.cookie = cookieText;
    },

    unset: function (name, subName, path, domain, secure) {
        var subcookies = this.getAll(name);
        if (subcookies) {
            delete subcookies[subName];
            this.setAll(name, subcookies, null, path, domain, secure);
        }
    },

    unsetAll: function (name, path, domain, secure) {
        this.setAll(name, null, new Date(0), path, domain, secure);
    }
};
/* $end cookie ojection construction */


function getHTTPObject() {
    if (XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (ActiveXObject) {
        try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {
            try { return new ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e) { }
        }
    } else { return false; }
}

function submitDataWithAjax(theTarget, data) {
    var request = getHTTPObject();
    /* Synchronous */
    request.open("POST", theTarget, false);
    request.send(data);
    var response = request.responseText;
    var code = parseInt(response);
    return code;
    /* Asynchronous */
    /*
    request.open("POST", thetTarget, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var response = request.responseText;               //Type - string
            code = parseInt(response);
        } else {
            return 0;
        }
    }
    request.send(data);
    */
}

function resetForm() {
    var l_form = document.getElementById("l_form");
    var inputs = l_form.getElementsByClassName("lform");
    var r_form = document.getElementById("r_form");
    var sug = r_form.getElementsByClassName("input_ideas")[0];
    for (var x in inputs) {
        inputs[x].value = "";
    }
    sug.value = "";
}

function resetBlank(whichBlank) {
    whichBlank.value = "";
}

/*
 * To submit form via ajax
 */

/* $begin globel variable */
//var labels = ["name", "email", "qq", "phone", "sug"];

/* $end globel variable */


function formSubmit() {
    /* 
     * IF has form submit cookie THEN return false
     */
    var formSubmitCookie = CookieUtil.get("form");
    if (formSubmitCookie == "true") {
        alert("You seem to submit once. Try again later.");
        resetForm();
        return false;
    }

    var labels = ["name", "email", "qq", "phone", "sug"];
    var placeholder = ["Your Name", "Your Email", "Your QQ numbers", "Your Telephone", "Why you want to join us?"];

    /*
     * FormData - Organize form data.
     */
    /* begin Formdata */
    var data = new FormData();

    var theTime = new Date();
    var theTime = theTime.toLocaleDateString() + " " + theTime.toLocaleTimeString();
    console.log(theTime);
    data.append("submitDate", theTime);

    var l_form = document.getElementById("l_form");
    var inputs = l_form.getElementsByClassName("lform");
    var x = undefined;
    for (x in inputs) {
        /* Input required */
        if (inputs[x].value == "") {
            inputs[x].placeholder = labels[x].replace(/(^|\s+)\w/g, function (s) { return s.toUpperCase(); }) + " required!";
            resetBlank(inputs[x]);
            inputs[x].onfocus = function () {
                this.placeholder = placeholder[x];
            }
            return false;
        }
        /* isEmail */
        if (labels[x] == "email") {
            var email = inputs[x].value;
            var hasAt = email.indexOf("@") > -1;
            var hasDot = email.indexOf(".") > -1;
            if (!hasAt || !hasDot) {
                inputs[x].placeholder = "Incorrect format!";
                resetBlank(inputs[x]);
                inputs[x].onfocus = function () {
                    this.placeholder = placeholder[x];
                }
                return false;
            }
        }
        /* isQQ */
        if (labels[x] == "qq") {
            var qq = inputs[x].value;
            var prtn = /^\d{5,11}$/;
            if (!prtn.test(qq)) {
                inputs[x].placeholder = "Invalid qq!";
                resetBlank(inputs[x]);
                inputs[x].onfocus = function () {
                    this.placeholder = placeholder[x];
                }
                return false;
            }
        }
        /* isPhoneNumber */
        if (labels[x] == "phone") {
            var phone = inputs[x].value;
            var prtn = /^\d{11}$/;
            if (!prtn.test(phone)) {
                inputs[x].placeholder = "Invalide phone number!";
                resetBlank(inputs[x]);
                inputs[x].onfocus = function () {
                    this.placeholder = placeholder[x];
                }
                return false;
            }
        }

        data.append(labels[x], inputs[x].value);
    }

    var r_form = document.getElementById("r_form");
    var theInput = r_form.getElementsByClassName("input_ideas")[0];
    var sug = theInput.value;
    /* Check whether empty */
    if (sug == "") {
        theInput.placeholder = "Reasons required!";
        resetBlank(theInput);
        theInput.onfocus = function () {
            this.placeholder = placeholder[4];
        }
        return false;
    }
    /* Replace illegal char. */
    var prtn = /[<>"'\\/]/g;
    sug.replace(prtn, " ");

    data.append(labels[4], sug);

    var xhr = submitDataWithAjax("../form.php", data);
    if (xhr == 1) {
        alert("Commit successfully.");
        /* set form-submit cookie */
        var theTime = new Date();
        theTime.setDate(theTime.getDate() + 1); //Save one-day
        CookieUtil.set("form", "true", theTime);

    } else {
        alert("Commit Failed. Try again, please.");
    }
    resetForm();

    return false;
}

/*
 * To save like count via xml
 */
function likeSubmit(name) {
    /*
     * IF cookie has likeClick history in 12Hs THEN return false
     */
    var likeClickCookie = SubCookieUtil.get("like", name);
    if (likeClickCookie == "true") { return false;}

    var data = new FormData();
    data.append("name", name);

    var xhr = submitDataWithAjax("../like.php", data);
    //More detail code write here
    var targets = document.getElementsByClassName("like");
    var labels = ["csong", "sss", "pigeon", "wb"];
    var x, theTarget;
    for (x in targets) {
        if (labels[x] == name) {
            theTarget = targets[x].getElementsByClassName(".likenumbers")[0];
        }
    }
    theTarget.innerHTML = "已赞(" + xhr + ")";
    /* set like-click cookie */
    var theTime = new Date();
    theTime.setDate(theTime.getDate() + 1);  //Save one-day
    SubCookieUtil.set("like", name, "true", theTime);

    return false;
}
