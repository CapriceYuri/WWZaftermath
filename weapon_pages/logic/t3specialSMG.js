const checkBox = document.querySelectorAll('input[type="checkbox"]')
const chooseRadio = document.querySelectorAll('input[type="radio"]')

const nod1 = document.getElementById('nod1');
const nod2 = document.getElementById('nod2');
const nod3 = document.getElementById('nod3');
const nod4 = document.getElementById('nod4');
const snakebite = document.getElementById('snakebite')



let powerV = document.querySelector('.power-value')
let powerBar = document.querySelector('.power-bar')
let accV = document.querySelector('.acc-value')
let accBar = document.querySelector('.acc-bar')
let handV = document.querySelector('.hand-value')
let handBar = document.querySelector('.hand-bar')
let rateV = document.querySelector('.rate-value')
let rateBar = document.querySelector('.rate-bar')
let penV = document.querySelector('.pen-value')
let penBar = document.querySelector('.pen-bar')
let magV = document.querySelector('.mag-value')
let magBar = document.querySelector('.mag-bar')

let currentPower = parseFloat(powerV.textContent)
let currentPowerBar = powerBar.style.width;
let currentAcc = parseFloat(accV.textContent)
let currentAccBar = accBar.style.width;
let currentHand = parseFloat(handV.textContent)
let currentHandBar = handBar.style.width;
let currentRate = parseFloat(rateV.textContent)
let currentRateBar = rateBar.style.width;
let currentPen = parseFloat(penV.textContent)
let currentPenBar = penBar.style.width;
let currentMag = parseFloat(magV.textContent)
let currentMagBar = magBar.style.width;

// console.log(checkBox)
// console.log(chooseRadio)
let totalChecked = 0;
let codeApp = false;
let code2App = false;
let nod1App = false;
let nod2App = false;
let nod3App = false;
let nod4App = false;
let nod5App = false;

function convertToPercent(num) {
    return `${num}%`
}
function addPercent(total, percent) {
    let temp = total / 100;
    return percent * temp;
}

let cTempV1;
let cTempB1;
let cTempV2;
let cTempB2;

// For Radio Button
chooseRadio.forEach(radio => {
    radio.addEventListener('change', () => {
        if (semiAuto.checked) {
            currentPen += 1;
            currentPenBar = convertToPercent(parseFloat(currentPenBar) + 50)
            penV.textContent = currentPen;
            penBar.style.width = currentPenBar;

            cTempV1 = 20

            currentPower = (((currentPower * 10) - (cTempV1)) / 10)
            currentPowerBar = convertToPercent(parseFloat(currentPowerBar) - (cTempV1))
            powerV.textContent = Math.trunc(currentPower);
            powerBar.style.width = currentPowerBar;
            console.log(currentPower)
            console.log(currentPowerBar)

            currentAcc += 0.5;
            currentAccBar = convertToPercent(parseFloat(currentAccBar) + 5)
            accV.textContent = Math.trunc(currentAcc);
            accBar.style.width = currentAccBar;

            currentHand += 1;
            currentHandBar = convertToPercent(parseFloat(currentHandBar) + 10)
            handV.textContent = currentHand;
            handBar.style.width = currentHandBar;

            currentRate -= 3;
            currentRateBar = convertToPercent(parseFloat(currentRateBar) - 30)
            rateV.textContent = currentRate;
            rateBar.style.width = currentRateBar;

            codeApp = true;
        } else if (codeApp && !semiAuto.checked) {
            currentPen -= 1;
            currentPenBar = convertToPercent(parseFloat(currentPenBar) - 50)
            penV.textContent = currentPen;
            penBar.style.width = currentPenBar;

            currentPower = (((currentPower * 10) + (cTempV1)) / 10)
            currentPowerBar = convertToPercent(parseFloat(currentPowerBar) + (cTempV1))
            powerV.textContent = Math.trunc(currentPower);
            powerBar.style.width = currentPowerBar;
            console.log(currentPower)
            console.log(currentPowerBar)

            currentAcc -= 0.5;
            currentAccBar = convertToPercent(parseFloat(currentAccBar) - 5)
            accV.textContent = Math.trunc(currentAcc);
            accBar.style.width = currentAccBar;

            currentHand -= 1;
            currentHandBar = convertToPercent(parseFloat(currentHandBar) - 10)
            handV.textContent = currentHand;
            handBar.style.width = currentHandBar;

            currentRate += 3;
            currentRateBar = convertToPercent(parseFloat(currentRateBar) + 30)
            rateV.textContent = currentRate;
            rateBar.style.width = currentRateBar;

            codeApp = false;
        }
    })
})



// For Checkboxes
checkBox.forEach(box => {
    box.addEventListener('change', () => {
        if (box.checked) {
            totalChecked++;
        } else {
            totalChecked--;
        }
        if (totalChecked > 2) {
            box.checked = false;
            totalChecked--;
        }
    })
})


nod1.addEventListener('change', () => {
    if (nod1.checked) {
        currentMag += 5;
        magV.textContent = currentMag;
        currentHand += 1;
        currentHandBar = convertToPercent(parseFloat(currentHandBar) + 10)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;
        nod1App = true;
    } else if (nod1App && !nod1.checked) {
        currentMag -= 5;
        magV.textContent = currentMag;
        currentHand -= 1;
        currentHandBar = convertToPercent(parseFloat(currentHandBar) - 10)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;
        nod1App = false
    }
})

nod2.addEventListener('change', () => {
    if (nod2.checked) {
        currentAcc += 2;
        currentAccBar = convertToPercent(parseFloat(currentAccBar) + 20)
        accV.textContent = Math.trunc(currentAcc);
        accBar.style.width = currentAccBar;

        cTempV2 = addPercent(9, 15) * 10

        currentPower = (((currentPower * 10) - (cTempV2)) / 10)
        currentPowerBar = convertToPercent(parseFloat(currentPowerBar) - (cTempV2))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(currentPowerBar)

        nod2App = true;
    } else if (nod2App && !nod2.checked) {
        currentAcc -= 2;
        currentAccBar = convertToPercent(parseFloat(currentAccBar) - 20)
        accV.textContent = Math.trunc(currentAcc);
        accBar.style.width = currentAccBar;;

        currentPower = (((currentPower * 10) + (cTempV2)) / 10)
        currentPowerBar = convertToPercent(parseFloat(currentPowerBar) + (cTempV2))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(currentPowerBar)

        nod2App = false
    }
})

nod3.addEventListener('change', () => {
    if (nod3.checked) {
        currentHand += 2;
        currentHandBar = convertToPercent(parseFloat(currentHandBar) + 20)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;

        nod3App = true;
    } else if (nod3App && !nod3.checked) {
        currentHand -= 2;
        currentHandBar = convertToPercent(parseFloat(currentHandBar) - 20)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;

        nod3App = false;
    }
})
