let a = true;

function show_box() {
    if (a === true) {
        document.getElementById("btn-animation").style.height = "400px";
        document.getElementById("btn-animation").style.marginTop = "-231px";
        document.getElementById("btn-animation").style.width = "515px";
        document.getElementById("heading-text").style.marginTop = "10px";
        a = false;
    } else {
        document.getElementById("heading-text").style.marginTop = "250px";
        document.getElementById("contaioner-box").style.visibility = "hidden"
        document.getElementById("btn-animation").style.marginTop = "231px";
        document.getElementById("contaioner-box").style.transform = "scale(0)";
        a = true;
    }
}


let b = true;
function show_animation_box() {
    if (b === true) {
        document.getElementById("contaioner-box").style.visibility = "visible";
        document.getElementById("contaioner-box").style.transform = "scale(1)";
        document.getElementById("contaioner-box").style.opacity = "1";
        document.getElementById("btn-animation").style.marginTop = "331px";
        b = false;
    }
    else {
        document.getElementById("btn-animation").style.marginTop = "-231px";
        document.getElementById("contaioner-box").style.visibility = "visible";
        document.getElementById("contaioner-box").style.transform = "scale(1)";

        document.getElementById("btn-animation").style.marginTop = "331px";
        b = true;
    }
}


// this function for box 2 flip
let c = true;
function roted_box2() {
    if (c === true) {
        document.getElementById("box-2-container").style.transform = "rotateY(180deg)";
        document.getElementById("box-2-container").style.animationName = "rotate";
        c = false;
    }
    else {
        document.getElementById("box-2-container").style.transform = "rotateY(0deg)";
       
        c = true;
    }
}