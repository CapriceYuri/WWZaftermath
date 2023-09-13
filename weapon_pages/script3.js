const checkBox = document.querySelectorAll('input[type="checkbox"]')
const chooseRadio = document.querySelectorAll('input[type="radio"]')

let powerV = document.querySelector('.power-value')
let powerBar = document.querySelector('.progress-bar')

let currentPower = parseInt(powerV.textContent)
let currentBar = powerBar.style.width;

// console.log(checkBox)
// console.log(chooseRadio)
let totalChecked = 0;

function convertToPercent(num) {
    return `${num}%`
}


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

chooseRadio[0].addEventListener('change', () => {
    if (chooseRadio[0].checked) {
        currentPower += 1;
        currentBar = convertToPercent(parseInt(currentBar) + 10)
        powerV.textContent = currentPower;
        powerBar.style.width = currentBar;
    } else {
        currentPower -= 1;
        currentBar = convertToPercent(parseInt(currentBar) - 10)
        powerV.textContent = currentPower;
        powerBar.style.width = currentBar;
    }
})

