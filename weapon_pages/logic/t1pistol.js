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

let currentPower = parseInt(powerV.textContent)
let currentPowerBar = powerBar.style.width;
let currentAcc = parseInt(accV.textContent)
let currentAccBar = accBar.style.width;
let currentHand = parseInt(handV.textContent)
let currentHandBar = handBar.style.width;
let currentRate = parseInt(rateV.textContent)
let currentRateBar = rateBar.style.width;
let currentPen = parseInt(penV.textContent)
let currentPenBar = penBar.style.width;
let currentMag = parseInt(magV.textContent)
let currentMagBar = magBar.style.width;

// console.log(checkBox)
// console.log(chooseRadio)
let totalChecked = 0;
let codeApp = false;
let nod1App = false
let nod2App = false
let nod3App = false
let nod4App = false

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
        if (fmjRound2.checked) {
            currentAcc += 2
            currentAccBar = convertToPercent(parseInt(currentAccBar) + 20)
            accV.textContent = currentAcc;
            accBar.style.width = currentAccBar;

            currentPen += 2;
            currentPenBar = convertToPercent(parseInt(currentPenBar) + 100)
            penV.textContent = currentPen;
            penBar.style.width = currentPenBar;

            currentMag -= 4;
            magV.textContent = currentMag;

            codeApp = true;
        } else if (codeApp && !fmjRound2.checked) {
            currentAcc -= 2
            currentAccBar = convertToPercent(parseInt(currentAccBar) - 20)
            accV.textContent = currentAcc;
            accBar.style.width = currentAccBar;

            currentPen -= 2;
            currentPenBar = convertToPercent(parseInt(currentPenBar) - 100)
            penV.textContent = currentPen;
            penBar.style.width = currentPenBar;

            currentMag += 4;
            magV.textContent = currentMag;

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
        currentMag += 2;
        magV.textContent = currentMag;
        nod1App = true;
    } else if (nod1App && !nod1.checked) {
        currentMag -= 2;
        magV.textContent = currentMag;
        nod1App = false
    }
})

nod2.addEventListener('change', () => {
    if (nod2.checked) {
        currentAcc += 2
        currentAccBar = convertToPercent(parseInt(currentAccBar) + 20)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;
        nod2App = true;
    } else if (nod2App && !nod2.checked) {
        currentAcc -= 2
        currentAccBar = convertToPercent(parseInt(currentAccBar) - 20)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;
        nod2App = false
    }
})

nod3.addEventListener('change', () => {
    if (nod3.checked) {
        currentHand += 2;
        currentHandBar = convertToPercent(parseInt(currentHandBar) + 20);
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;

        currentAcc -= 1;
        currentAccBar = convertToPercent(parseInt(currentAccBar) - 10)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        nod3App = true;
    } else if (nod3App && !nod3.checked) {
        currentHand -= 2;
        currentHandBar = convertToPercent(parseInt(currentHandBar) - 20);
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;

        currentAcc += 1;
        currentAccBar = convertToPercent(parseInt(currentAccBar) + 10)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        nod3App = false;
    }
})

nod4.addEventListener('change', () => {
    if (nod4.checked) {
        cTempV1 = addPercent(4, 15)

        currentPowerBar = convertToPercent(parseInt(currentPowerBar) + (cTempV1 * 10))
        currentPower += cTempV1;
        powerV.textContent = Math.trunc(currentPower)
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(cTempV1)

        nod4App = true;
    } else if (nod4App && !nod4.checked) {
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) - (cTempV1 * 10))
        currentPower = (((currentPower * 10) - (cTempV1 * 10)) / 10);
        console.log(currentPower)
        powerV.textContent = Math.trunc(currentPower)
        powerBar.style.width = currentPowerBar;
        nod4App = false;

    }
})



