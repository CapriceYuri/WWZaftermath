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
        if (customFit.checked) {
            cTempV1 = (2 * 10)

            currentPower = (((currentPower * 10) + (cTempV1)) / 10)
            currentPowerBar = convertToPercent(parseFloat(currentPowerBar) + (cTempV1))
            powerV.textContent = Math.trunc(currentPower);
            powerBar.style.width = currentPowerBar;

            console.log(cTempV1)
            console.log(currentPower)
            console.log(currentPowerBar)

            currentHand += 1;
            currentHandBar = convertToPercent(parseFloat(currentHandBar) + 10)
            handV.textContent = currentHand;
            handBar.style.width = currentHandBar;

            codeApp = true;
        } else if (codeApp && !customFit.checked) {
            currentPower = (((currentPower * 10) - (cTempV1)) / 10)
            currentPowerBar = convertToPercent(parseFloat(currentPowerBar) - (cTempV1))
            powerV.textContent = Math.trunc(currentPower);
            powerBar.style.width = currentPowerBar;

            console.log(cTempV1)
            console.log(currentPower)
            console.log(currentPowerBar)

            currentHand -= 1;
            currentHandBar = convertToPercent(parseFloat(currentHandBar) - 10)
            handV.textContent = currentHand;
            handBar.style.width = currentHandBar;

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
        nod1App = true;
    } else if (nod1App && !nod1.checked) {
        currentMag -= 5;
        magV.textContent = currentMag;
        nod1App = false
    }
})

nod2.addEventListener('change', () => {
    if (nod2.checked) {
        currentAcc += 2;
        currentAccBar = convertToPercent(parseFloat(currentAccBar) + 20)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        nod2App = true;
    } else if (nod2App && !nod2.checked) {
        currentAcc -= 2;
        currentAccBar = convertToPercent(parseFloat(currentAccBar) - 20)
        accV.textContent = currentAcc;
        accBar.style.width = currentAccBar;

        nod2App = false
    }
})

nod3.addEventListener('change', () => {
    if (nod3.checked) {
        cTempV2 = addPercent(7, 15) * 10

        currentPower = (((currentPower * 10) - (cTempV2)) / 10)
        currentPowerBar = convertToPercent(parseFloat(currentPowerBar) - (cTempV2))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(currentPowerBar)

        currentHand += 2;
        currentHandBar = convertToPercent(parseFloat(currentHandBar) + 20)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;

        nod3App = true;
    } else if (nod3App && !nod3.checked) {
        currentPower = (((currentPower * 10) + (cTempV2)) / 10)
        currentPowerBar = convertToPercent(parseFloat(currentPowerBar) + (cTempV2))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)
        console.log(currentPowerBar)


        currentHand -= 2;
        currentHandBar = convertToPercent(parseFloat(currentHandBar) - 20)
        handV.textContent = currentHand;
        handBar.style.width = currentHandBar;

        nod3App = false;
    }
})

nod4.addEventListener('change', () => {
    if (nod4.checked) {
        cTempB1 = addPercent(7, 15) * 10

        currentPower = (((currentPower * 10) + (cTempB1)) / 10)
        currentPowerBar = convertToPercent(parseFloat(currentPowerBar) + (cTempB1))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)


        nod4App = true;
    } else if (nod4App && !nod4.checked) {
        currentPower = (((currentPower * 10) - (cTempB1)) / 10)
        currentPowerBar = convertToPercent(parseFloat(currentPowerBar) - (cTempB1))
        powerV.textContent = Math.trunc(currentPower);
        powerBar.style.width = currentPowerBar;
        console.log(currentPower)


        nod4App = false;

    }
})

// nod5.addEventListener('change', () => {
//     if (nod5.checked) {
//         cTempB1 = (addPercent(7, 15) * 10)

//         currentPower = (((currentPower * 10) + (cTempB1)) / 10)
//         currentPowerBar = convertToPercent(parseFloat(currentPowerBar) + (cTempB1))
//         powerV.textContent = Math.trunc(currentPower);
//         powerBar.style.width = currentPowerBar;
//         console.log(currentPower)
//         console.log(currentPowerBar)
//         console.log(cTempB1)

//         nod5App = true;
//     } else if (nod5App && !nod4.checked) {
//         currentPower = (((currentPower * 10) - (cTempB1)) / 10)
//         currentPowerBar = convertToPercent(parseFloat(currentPowerBar) - (cTempB1))
//         powerV.textContent = Math.trunc(currentPower);
//         powerBar.style.width = currentPowerBar;

//         console.log(currentPower)
//         console.log(currentPowerBar)

//         nod5App = false;

//     }
// })

