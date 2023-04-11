if (sessionStorage.getItem("rockType") == null) {
    var rockType = "rock1";
    var eyesType = "invis";
    var hatType = "invis";
    var hueType = "";
} else {
    var rockType = sessionStorage.getItem("rockType");
    var eyesType = sessionStorage.getItem("eyesType");
    var hatType = sessionStorage.getItem("hatType");
    var hueType = sessionStorage.getItem("hueType");
}

sessionStorage.setItem("rockType", rockType);
sessionStorage.setItem("eyesType", eyesType);
sessionStorage.setItem("hatType", hatType);
sessionStorage.setItem("hueType", hueType);

function showAll() {
    document.getElementById('rock').src = ("./" + rockType + hueType + ".png");
    document.getElementById('eyes').src = ("./" + eyesType + ".png");
    document.getElementById('hat').src = ("./" + hatType + ".png");
}

function showRock(rock) {
    rockType = rock;
    sessionStorage.setItem("rockType", rockType);
    document.getElementById('rock').src = ("./" + rockType + hueType + ".png");
}

function showEyes(eyes) {
    eyesType = eyes;
    sessionStorage.setItem("eyesType", eyesType);
    document.getElementById('eyes').src = ("./" + eyesType + ".png");
}

function showHat(hat) {
    hatType = hat;
    sessionStorage.setItem("hatType", hatType);
    document.getElementById('hat').src = ("./" + hatType + ".png");
}

function changeHue(hue) { 
    hueType = hue;
    sessionStorage.setItem("hueType", hueType);
    document.getElementById('rock').src = ("./" + rockType + hueType + ".png");
}

// function showRock(rock) {
//     var img = document.getElementById(rockType);

//     sessionStorage.setItem("rockType", rockType);
// }
// function showEye(eye) {
//     var prev = document.getElementById(eyesType);
//     prev.style.display = "none";
//     var cur = document.getElementById(eye);
//     cur.style.display = "block";
//     console.log("new eye: " + eye + " prev eye: " + eyesType)
//     eyesType = eye;
//     sessionStorage.setItem("eyesType", eyesType);
// }
// function showHat(hat) {
//     var prev = document.getElementById(hatType);
//     prev.style.display = "none";
//     var cur = document.getElementById(hat);
//     cur.style.display = "block";
//     console.log("new hat: " + hat + " prev hat: " + hatType)
//     hatType = hat;
//     sessionStorage.setItem("hatType", hatType);
// }

window.onload(showAll())