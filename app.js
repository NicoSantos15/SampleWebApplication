// this function will check if the passed input is a valid number or not
function validateNumber() {

    // use this regex to implement a strongly typed/precise validation
    //var regex = /^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$/;

    // checking phone numbers if it is a valid australian format
    const regex = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
    let userInput = document.getElementById("user").value;

    if (!regex.test(userInput)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";

    } else {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}

// WIP
function validateNSW() {
    // const regex = /^(?:\(?(?:\+?61|0)2\)?(?:[ -]?[0-9]){7}[0-9]$/;
    let userInput = document.getElementById("user").value;

    if (!regex.test(userInput)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";

    } else {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}

// WIP
function validateQL() {
    // var regex = /^(?:\(?(?:\+?61|0)7\)?(?:[ -]?[0-9]){7}[0-9]$/;
    let userInput = document.getElementById("user").value;

    if (!regex.test(userInput)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";

    } else {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}

// WIP
function validateSNW() {
    // var regex = /^(?:\(?(?:\+?61|0)8\)?(?:[ -]?[0-9]){7}[0-9]$/;
    let userInput = document.getElementById("user").value;

    if (!regex.test(userInput)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";

    } else {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}

// WIP
function validateVT() {
    // var regex = /^(?:\(?(?:\+?61|0)3\)?(?:[ -]?[0-9]){7}[0-9]$/;
    let userInput = document.getElementById("user").value;

    if (!regex.test(userInput)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("success").style.display = "none";

    } else {
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}
