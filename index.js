let linia1 = document.getElementById("pasek1");
let linia2 = document.getElementById("pasek2");

let l1 = document.getElementById("ocena-input");
let l2 = document.getElementById("waga-input");

function LiniaON() {
    linia1.style.width = "90%";
}

function LiniaOFF() {
    linia1.style.width = "0px"
}

function LiniaON2() {
    linia2.style.width = "95%";
}

function LiniaOFF2() {
    linia2.style.width = "0px"
}

l1.addEventListener("click", LiniaON);
l1.addEventListener("blur", LiniaOFF);
l2.addEventListener("click", LiniaON2);
l2.addEventListener("blur", LiniaOFF2);