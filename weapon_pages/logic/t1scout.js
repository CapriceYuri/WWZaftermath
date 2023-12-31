const checkBox = document.querySelectorAll('input[type="checkbox"]')
const chooseRadio = document.querySelectorAll('input[type="radio"]')

const nod1 = document.getElementById('nod1');
const nod2 = document.getElementById('nod2');
const nod3 = document.getElementById('nod3');
const nod4 = document.getElementById('nod4');
const wolfpack = document.getElementById('wolfpack')
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

let tempV;
let tempB;
let cTempV;
let cTempB;

// For Radio Button
chooseRadio.forEach(radio => {
    radio.addEventListener('change', () => {
        if (wolfpack.checked) {
            tempV = 1;
            currentPowerBar = convertToPercent(parseInt(currentPowerBar) + (tempV * 10))
            currentPower += tempV;
            powerV.textContent = Math.trunc(currentPower)
            powerBar.style.width = currentPowerBar;
            
            codeApp = true;
            console.log(currentPowerBar)
            console.log(currentPower)
            console.log(tempV)
        } else if (codeApp && !wolfpack.checked) {
            currentPowerBar = convertToPercent(parseInt(currentPowerBar) - (tempV * 10));
            currentPower -= tempV;
            powerV.textContent = Math.trunc(currentPower)
            powerBar.style.width = currentPowerBar;
            codeApp = false;
            console.log(currentPowerBar)
            console.log(currentPower)
            console.log(tempV)
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
        magV.textContent = currentMag;
        currentHand -= 1;
        currentHandBar = convertToPercent(parseInt(currentHandBar) - 10)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar
        nod1App = true;
        console.log(currentPower)
        console.log(currentPowerBar)
    } else if (nod1App && !nod1.checked) {
        currentMag -= 10;
        magV.textContent = currentMag;
        currentHand += 1;
        currentHandBar = convertToPercent(parseInt(currentHandBar) + 10)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar
        nod1App = false
        console.log(currentPower)
        console.log(currentPowerBar)
    }
})

nod2.addEventListener('change', () => {
    if (nod2.checked) {
        currentAcc += 1;
        currentAccBar = convertToPercent(parseInt(currentAccBar) + 10);
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;
        nod2App = true;
    } else if (nod2App && !nod2.checked) {
        currentAcc -= 1;
        currentAccBar = convertToPercent(parseInt(currentAccBar) - 10);
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;
        nod2App = false
    }
})

nod3.addEventListener('change', () => {
    if (nod3.checked) {
        currentAcc += 1;
        currentAccBar = convertToPercent(parseInt(currentAccBar) + 10);
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        cTempV = addPercent(5, 10)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) + (cTempV * 10))
        currentPower += cTempV;
        powerV.textContent = Math.trunc(currentPower)
        powerBar.style.width = currentPowerBar;
        nod3App = true;
        console.log(currentPower)
        console.log(currentPowerBar)
        console.log(cTempV)

    } else if (nod3App && !nod3.checked) {
        currentAcc -= 1;
        currentAccBar = convertToPercent(parseInt(currentAccBar) - 10);
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) - (cTempV * 10));
        console.log(currentPowerBar)
        currentPower -= cTempV;
        powerV.textContent = Math.trunc(currentPower)
        powerBar.style.width = currentPowerBar;
        nod3App = false;
        console.log(currentPower)
        console.log(currentPowerBar)
        console.log(cTempV)
    }
})

nod4.addEventListener('change', () => {
    if (nod4.checked) {
        currentHand += 2;
        currentHandBar = convertToPercent(parseInt(currentHandBar) + 20)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;
        nod4App = true;
    } else if (nod4App && !nod4.checked) {
        currentHand -= 2;
        currentHandBar = convertToPercent(parseInt(currentHandBar) - 20)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;
        nod4App = false;
    }
})



