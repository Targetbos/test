document.querySelector(".test__btn").onclick = function() {
    var a, b;
    document.querySelectorAll(".test__input").forEach((el) => {
        if (el.name == "logintest") {
            a = el.value;
        } else if (el.name == "passtest") {
            b = el.value;
        }
    });
    // console.log("Конъюнкция: " + kon(a, b));
    // console.log("Дизъюнкция: " + diz(a, b));
    // console.log("Стрелка пирса: " + pirs(a, b));


}

// Конъюнкция
function kon(a, b) {
    if ((a === "1") && (b === "1")) {
        return true;
    } else {
        return false;
    }
}
//Дизъюнкция
function diz(a, b) {
    if ((a === "1") || (b === "1")) {
        return true;
    } else {
        return false;
    }
}
//Стрелка пирса
function pirs(a, b) {
    if ((a === "0") || !(b === "0")) {
        return true;
    } else {
        return false;
    }
}
// console.log(kon(1, 1));