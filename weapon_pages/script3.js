const checkBox = document.querySelectorAll('input[type="checkbox"]')
const chooseRadio = document.querySelectorAll('input[type="radio"]')

const nod1 = document.getElementById('nod1');
const nod2 = document.getElementById('nod2');


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

function convertToPercent(num) {
    return `${num}%`
}

// For Radio Button
chooseRadio.forEach(radio => {
    radio.addEventListener('change', () => {
        if (chooseRadio[0].checked) {
            currentPower += 1;
            currentPowerBar = convertToPercent(parseInt(currentPowerBar) + 10)
            powerV.textContent = currentPower;
            powerBar.style.width = currentPowerBar;
        } else {
            currentPower = 5;
            currentPowerBar = convertToPercent(50)
            powerV.textContent = currentPower;
            powerBar.style.width = currentPowerBar;
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
        currentMag += 10;
        currentHand -= 1;
        magV.textContent = currentMag;
        handV.textContent = currentHand;
        handBar.style.width = convertToPercent(parseInt(currentHandBar) - 10)
    } else {
        currentMag = 30;
        currentHand = 6;
        magV.textContent = currentMag;
        handV.textContent = currentHand;
        handBar.style.width = convertToPercent(parseInt(currentHandBar));
    }
})

nod2.addEventListener('change', () => {
    if (nod2.checked) {
        currentAcc += 1;
        accV.textContent = currentAcc;
        accBar.style.width = convertToPercent(parseInt(currentAccBar)+10);
    } else {
        currentAcc = 8;
        accV.textContent = currentAcc;
        accBar.style.width = convertToPercent(parseInt(currentAccBar));
    }
})