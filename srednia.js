const inputOcena = document.getElementById("ocena-input");
const inputWaga = document.getElementById("waga-input");
const inputNazwa = document.getElementById("inputNazwa");

let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let valuesBox = document.getElementById("box-values")
let btnNazwa = document.getElementById("btnNazwa")

let oceny = [];
let wagi = [];
let i = 0;
let box;
let sumaWag = 0;
let sumaOcenL = 0;

let srednia;

let step1;
let step2;

function addValues() {
    if (inputOcena.value === "" && inputWaga.value === "") {
        document.getElementById("p1").innerHTML = "Wypełnij inputy!"
        setTimeout(() => {
            document.getElementById("p1").innerHTML = "Wartości:"
        }, 2000)
    }
    else {
        oceny[i] = parseInt(inputOcena.value)
        if (inputWaga.value ==="") {
            wagi[i] = 1
        }
        else {
            wagi[i] = parseInt(inputWaga.value)
        }
        box = document.createElement("div")
        box.classList.add("values-user")
        box.innerHTML = oceny[i] + ": " + wagi[i]
        box.id = "B" + i
        valuesBox.appendChild(box);
        sumaWag = sumaWag + parseInt(wagi[i]);
        inputOcena.value = ""
        inputWaga.value = ""
        i += 1
        console.log(oceny[i-1], wagi[i - 1], i, "Pomyslnie utworzono obiekt")
        step1 = true
    }
}
let divS;

function createDIV(name, sredniaV) {
    divS = document.createElement("div");
    divS.classList.add("sredniaDIV");
    document.getElementById("srednia").appendChild(divS)
    divS.innerHTML = name + ": " + sredniaV;
}
let windowD = document.getElementById("window")

function WinON() {
    if (step1 === true) {
        windowD.style.top = "25vh"
        step2 = true
    }
    else {
        document.getElementById("p1").innerHTML = "Wypełnij inputy!"
        setTimeout(() => {
            document.getElementById("p1").innerHTML = "Wartości:"
        }, 2000)
    }
}

function WinOFF() {
    windowD.style.top = "-100vh"
}

let i2 = 0;

function obliczSrednia() {
    
    if (step2 === true && step1 === true) {
        for (i2; i-1; i2++) {
            sumaOcenL = sumaOcenL + (parseInt(wagi[i2]) * parseInt(oceny[i2]))
            console.log(i2, sumaOcenL)
            if (i2 === i - 1) {
                break;
            }
        }
        srednia = sumaOcenL / sumaWag;
        console.log(srednia)
        oceny = []
        wagi = []
        sumaWag = 0
        sumaOcenL = 0
        i2 = 0
        for  (let i3 = 0; i -1; i3 ++) {
            valuesBox.removeChild(document.getElementById("B" + i3))
            if (i3 === i-1) {
                break;
            }
        }
        i = 0
        step1 = false
        step2 = false


        let name = inputNazwa.value
        createDIV(name, srednia)
        WinOFF()
    }
    else {
        document.getElementById("LN").innerHTML = "Wypełnij inputy!"
        setTimeout(() => {
            document.getElementById("LN").innerHTML = "Podaj nazwe sredniej:"
        }, 2000)
    }
}

btn.addEventListener("click", addValues);
btn2.addEventListener("click", WinON)
windowD.addEventListener("blur", WinOFF)
btnNazwa.addEventListener("click", obliczSrednia)