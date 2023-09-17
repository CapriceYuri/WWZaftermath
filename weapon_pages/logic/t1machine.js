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
        if (refresh.checked) {
            currentRate += 3;
            currentRateBar = convertToPercent(parseInt(currentRateBar) + 30)
            rateV.textContent = currentRate;
            rateBar.style.width = currentRateBar;

            codeApp = true;
        } else if (codeApp && !refresh.checked) {
            currentRate -= 3;
            currentRateBar = convertToPercent(parseInt(currentRateBar) - 30)
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
        currentMag += 3;
        magV.textContent = currentMag;
        nod1App = true;
    } else if (nod1App && !nod1.checked) {
        currentMag -= 3;
        magV.textContent = currentMag;
        nod1App = false
    }
})

nod2.addEventListener('change', () => {
    if (nod2.checked) {
        currentMag += 6;
        magV.textContent = currentMag;

        cTempV1 = addPercent(6, 20) * 10

        currentPower = (((currentPower * 10) - (cTempV1)) / 10)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) - (cTempV1))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)

        nod2App = true;
    } else if (nod2App && !nod2.checked) {
        currentMag -= 6;
        magV.textContent = currentMag;

        currentPower = (((currentPower * 10) + (cTempV1)) / 10)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) + (cTempV1))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)


        nod2App = false
    }
})

nod3.addEventListener('change', () => {
    if (nod3.checked) {
        cTempV2 = addPercent(6, 15) * 10
        currentPower = (((currentPower * 10) - (cTempV2)) / 10)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) - (cTempV2))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(currentPowerBar)

        currentAcc += 2;
        currentAccBar = convertToPercent(parseInt(currentAccBar) + 20)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        nod3App = true;
    } else if (nod3App && !nod3.checked) {
        currentPower = (((currentPower * 10) + (cTempV2)) / 10)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) + (cTempV2))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        

        currentAcc -= 2;
        currentAccBar = convertToPercent(parseInt(currentAccBar) - 20)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        nod3App = false;
    }
})

nod4.addEventListener('change', () => {
    if (nod4.checked) {
        currentHandBar = convertToPercent(parseInt(currentHandBar) + 20)
        currentHand += 2;
        handV.textContent = Math.trunc(currentHand)
        handBar.style.width = currentHandBar;

        currentAccBar = convertToPercent(parseInt(currentAccBar) + 20)
        currentAcc += 2;
        accV.textContent = Math.trunc(currentAcc)
        accBar.style.width = currentAccBar;

        nod4App = true;
    } else if (nod4App && !nod4.checked) {
        currentHandBar = convertToPercent(parseInt(currentHandBar) - 20)
        currentHand -= 2;
        handV.textContent = Math.trunc(currentHand)
        handBar.style.width = currentHandBar;

        nod4App = false;

    }
})

nod5.addEventListener('change', () => {
    if (nod5.checked) {
        cTempB1 = (addPercent(6, 15) * 10);
        console.log(cTempB1)
        currentPower = (((currentPower * 10) + (cTempB1)) / 10)
        console.log(currentPower)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) + (cTempB1))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        nod5App = true;
    } else if (nod5App && !nod4.checked) {
        currentPower = (((currentPower * 10) - (cTempB1)) / 10)
        currentPowerBar = convertToPercent(parseInt(currentPowerBar) - (cTempB1))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(cTempB1)

        nod5App = false;

    }
})
