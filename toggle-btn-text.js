function myFunction() {

    var btn = document.getElementById("btn-toggle");

    if (btn.value == "Light Mode") {
        btn.value = "Dark Mode";
        btn.innerHTML = "Dark Mode";
    }
    else {
        btn.value = "Light Mode";
        btn.innerHTML = "Light Mode";
    }

}