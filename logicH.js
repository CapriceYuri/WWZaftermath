const hardSelect = document.querySelector("#btnradio1");
const normalSelect = document.querySelector("#btnradio2")
const summary = document.querySelector("#btnradio0")
const summaryBox = document.querySelector(".BOX0")
const normalBox = document.querySelector(".BOX2");
const hardBox = document.querySelector(".BOX1");

const speedrun = document.querySelector("#speedrunE");
const speedrunBox = document.querySelector(".BOX3")
const speedrun2 = document.querySelector("#speedrunE2");
const speedrunBox2 = document.querySelector(".BOX4")

summary.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    normalSelect.checked = false;
    normalBox.style.display = 'none'
    speedrun.checked = false;
    speedrunBox.style.display = 'none'
    speedrun2.checked = false
    speedrunBox2.style.display = 'none'
    summaryBox.style.display = 'block'
})
normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    summary.checked = false;
    summaryBox.style.display = 'none'
    speedrun.checked = false;
    speedrunBox.style.display = 'none'
    speedrun2.checked = false
    speedrunBox2.style.display = 'none'
    normalBox.style.display = 'block'
})
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    speedrun.checked = false;
    speedrunBox.style.display = 'none'
    speedrun2.checked = false
    speedrunBox2.style.display = 'none'
    hardBox.style.display = 'block'

})
speedrun.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    normalSelect.checked = false;
    normalBox.style.display = 'none'
    summary.checked = false
    summaryBox.style.display = 'none'
    speedrun2.checked = false
    speedrunBox2.style.display = 'none'
    speedrunBox.style.display = 'block'
})
speedrun2.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    normalSelect.checked = false;
    normalBox.style.display = 'none'
    summary.checked = false
    summaryBox.style.display = 'none'
    speedrun.checked = false
    speedrunBox.style.display = 'none'
    speedrunBox2.style.display = 'block'
})