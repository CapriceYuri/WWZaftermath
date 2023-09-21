const colB = document.querySelectorAll('.col-b')
let countB = 0;
const colC = document.querySelectorAll('.col-c')
let countC = 0;
const colD = document.querySelectorAll('.col-d')
let countD = 0;
const colF = document.querySelectorAll('.col-f')
let countF = 0;
const colG = document.querySelectorAll('.col-g')
let countG = 0;
const colH = document.querySelectorAll('.col-h')
let countH = 0;
const colJ = document.querySelectorAll('.col-j')
let countJ = 0;
const colK = document.querySelectorAll('.col-k')
let countK = 0;
const colL = document.querySelectorAll('.col-l')
let countL = 0;

const randomize = document.querySelector('.random')
let optionB = [...colB]
let optionC = [...colC]
let optionD = [...colD]
let optionF = [...colF]
let optionG = [...colG]
let optionH = [...colH]
let optionJ = [...colJ]
let optionK = [...colK]
let optionL = [...colL]

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);
    for (let i in optionB) {
        optionB[i].classList.remove('pick');
        countB = 0
    }
    countB++;
    optionB[random].classList.add('pick');

})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionC) {
        optionC[i].classList.remove('pick');
        countC = 0;
    }
    countC++;
    optionC[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionD) {
        optionD[i].classList.remove('pick');
        countD = 0;
    }
    countD++;
    optionD[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionF) {
        optionF[i].classList.remove('pick');
        countF = 0;
    }
    countF++;
    optionF[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionG) {
        optionG[i].classList.remove('pick');
        countG = 0;
    }
    countG++;
    optionG[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionH) {
        optionH[i].classList.remove('pick');
        countH = 0;
    }
    countH++;
    optionH[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionJ) {
        optionJ[i].classList.remove('pick');
        countJ = 0;
    }
    countJ++;
    optionJ[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionK) {
        optionK[i].classList.remove('pick');
        countK = 0;
    }
    countK++;
    optionK[random].classList.add('pick');
})

randomize.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 4);

    for (let i in optionL) {
        optionL[i].classList.remove('pick');
        countL = 0;
    }
    countL++;
    optionL[random].classList.add('pick');
})

// CODE DIVISION
for (let i = 0; i < colB.length; i++) {
    colB[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colB.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countB++;
            console.log(countB)
        } else {
            countB--;
            console.log(countB)
        }
        if (countB > 1) {
            option.classList.remove('pick');
            countB--;
            console.log(countB)
        }
    })
})

for (let i = 0; i < colC.length; i++) {
    colC[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colC.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countC++;
        } else {
            countC--;
        }
        if (countC > 1) {
            option.classList.remove('pick');
            countC--;
        }
    })
})

for (let i = 0; i < colD.length; i++) {
    colD[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colD.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countD++;
        } else {
            countD--;
        }
        if (countD > 1) {
            option.classList.remove('pick');
            countD--;
        }
    })
})

// CODE DIVISION

for (let i = 0; i < colF.length; i++) {
    colF[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colF.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countF++;
        } else {
            countF--;
        }
        if (countF > 1) {
            option.classList.remove('pick');
            countF--;
        }
    })
})

for (let i = 0; i < colG.length; i++) {
    colG[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colG.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countG++;
        } else {
            countG--;
        }
        if (countG > 1) {
            option.classList.remove('pick');
            countG--;
        }
    })
})

for (let i = 0; i < colH.length; i++) {
    colH[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colH.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countH++;
        } else {
            countH--;
        }
        if (countH > 1) {
            option.classList.remove('pick');
            countH--;
        }
    })
})
// CODE DIVISION
for (let i = 0; i < colJ.length; i++) {
    colJ[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colJ.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countJ++;
        } else {
            countJ--;
        }
        if (countJ > 1) {
            option.classList.remove('pick');
            countJ--;
        }
    })
})

for (let i = 0; i < colK.length; i++) {
    colK[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colK.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countK++;
        } else {
            countK--;
        }
        if (countK > 1) {
            option.classList.remove('pick');
            countK--;
        }
    })
})

for (let i = 0; i < colL.length; i++) {
    colL[i].addEventListener('click', function () {
        this.classList.toggle('pick')
    })
}
colL.forEach(option => {
    option.addEventListener('click', () => {
        if (option.classList.contains('pick')) {
            countL++;
        } else {
            countL--;
        }
        if (countL > 1) {
            option.classList.remove('pick');
            countL--;
        }
    })
})
// CODE DIVISION


