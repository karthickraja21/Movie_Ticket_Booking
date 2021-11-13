var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "9080583160" && password == "123456") {
        alert("Login successfully");
        window.location.href = "index.html";
        return false;
    } else {
        attempt--;
        alert("You have left " + attempt + " attempt;");

        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}