/*
 * Hehe, serious not want to add comment. Let it go.
 */


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

function submitDataWithAjax(thetTarget, data) {
    var request = getHTTPObject();
    request.open("POST", thetTarget, true);

    //var code = undefined;
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            //var response = request.responseText;               //Type - string
            //code = parseInt(response);
            //return true;
        } else {
            //return false;
        }
    }
    request.send(data);
    return true;
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
function formSubmit() {
    var labels = ["name", "email", "qq", "phone", "sug"];
    var placeholder = ["Your Name", "Your Email", "Your QQ numbers", "Your Telephone"];

    /*
     * FormData - Organize form data.
     */
    /* begin Formdata */
    var data = new FormData();
    var l_form = document.getElementById("l_form");
    var inputs = l_form.getElementsByClassName("lform");
    var x;
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
    /* Replace illegal char. */
    var prtn = /[<>"'\\/]/g;
    sug.replace(prtn, " ");

    data.append(labels[4], sug);
    //alert(sug);
    /* end FormData */

    var xhr = submitDataWithAjax("form.php", data);
    if (xhr == 1) { alert("Commit successfully."); }
    resetForm();

    return false;
}

/*
 * To save like count via xml
 */
function likeSubmit(name) {
    var data = new FormData();
    data.append("name", name);

    var xhr = submitDataWithAjax("like.php", data);
    //More detail code write here

    return false;
}