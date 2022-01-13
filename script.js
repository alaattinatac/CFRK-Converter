const inputCelc = document.getElementById("inputCelcius");
const inputFah = document.getElementById("inputFahrenheit");
const inputRan = document.getElementById("inputRankine");
const inputKel = document.getElementById("inputKelvin");

const resultFah = document.getElementById("inputFahrenheit")
const resultRan = document.getElementById("inputRankine")
const resultKel = document.getElementById("inputKelvin")
const resultCelc = document.getElementById("inputCelcius")

// Celcius

const btnCelc = document.getElementById("btnCelcius")


btnCelc.addEventListener("click", handleInputC)


function handleInputC() {
    let input = Number(inputCelc.value);
    let fahrenheitValC = (input * 1.8) + 32;
    let rankineValC=(input+273.15)*(9/5);
    let kelvinValC=(input+273.15);

    resultFah.value = fahrenheitValC.toFixed(2);
    resultRan.value=rankineValC.toFixed(2);
    resultKel.value=kelvinValC.toFixed(2);
}

// Fahrenheit

const btnFah = document.getElementById("btnFahrenheit")


btnFah.addEventListener("click", handleInputF)


function handleInputF() {
    let input = Number(inputFah.value);
    let celciusValF = (input-32)*(5/9);
    let rankineValF=(input+459.67);
    let kelvinValF=(input+459.67)*(5/9);

    resultCelc.value = celciusValF.toFixed(2);
    resultRan.value=rankineValF.toFixed(2);
    resultKel.value=kelvinValF.toFixed(2);
}

// Rankine

const btnRan = document.getElementById("btnRankine")


btnRan.addEventListener("click", handleInputR)


function handleInputR() {
    let input = Number(inputRan.value);
    let celciusValR =(input-491.67)*(5/9);
    let fahrenheitValR=(input-459.67);
    let kelvinValR=(input*5/9);

    resultCelc.value = celciusValR.toFixed(2);
    resultFah.value=fahrenheitValR.toFixed(2);
    resultKel.value=kelvinValR.toFixed(2);
}

// Kelvin

const btnKel = document.getElementById("btnKelvin")


btnKel.addEventListener("click", handleInputK)


function handleInputK() {
    let input = Number(inputKel.value);
    let celciusValK =(input-273.15);
    let fahrenheitValK=(input)*(9/5)-459.67;
    let rankineValK=(input*(9/5));

    resultCelc.value = celciusValK.toFixed(2);
    resultFah.value=fahrenheitValK.toFixed(2);
    resultRan.value=rankineValK.toFixed(2);
}

//Reset

const btnRes = document.getElementById("btnReset")

btnRes.addEventListener("click", handleReset)

function handleReset(){

    resultFah.value ="" ;
    resultRan.value="";
    resultKel.value="";
    resultCelc.value="";
}