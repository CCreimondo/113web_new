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

    var code = 0;
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var response = request.responseText;               //Type - string
            code = parseInt(response);
        } else {
            code = 0;
        }
    }
    request.send(data);
    return code;
}

function resetBlank(whichBlank) {
    whichBlank.value = "";
}

/*
 * To submit form via ajax
 */
function formSubmit() {
    var labels = ["name", "email", "qq", "phone", "sug"];
    var data = new FormData();

    var l_form = document.getElementById("l_form");
    var inputs = l_form.getElementsByClassName("lform");
    var x;
    for (x in inputs) {
        /* isEmail */
        if (labels[x] == "email") {
            var email = inputs[x].value;
            var hasAt = email.indexOf("@") > -1;
            var hasDot = email.indexOf(".") > -1;
            if (!hasAt || !hasDot) {
                resetBlank(inputs[x]);
                return false;
            }
        }

        data.append(labels[x], inputs[x].value);
    }

    var r_form = document.getElementById("r_form");
    var sug = r_form.getElementsByClassName("input_ideas")[0].value;
    data.append(labels[4], sug);
    //alert(sug);

    var xhr = submitDataWithAjax("form.php", data);
    /*
     * Code: 1 - success, 0 - failed
     * IF 1 alert success, IF 0 alert again
     */
    //function prepareForm();
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