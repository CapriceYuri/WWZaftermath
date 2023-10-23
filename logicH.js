const hardSelect = document.querySelector("#btnradio1");
const normalSelect = document.querySelector("#btnradio2")
const summary = document.querySelector("#btnradio0")
const summaryBox = document.querySelector(".BOX0")
const normalBox = document.querySelector(".BOX2");
const hardBox = document.querySelector(".BOX1");

summary.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    normalSelect.checked = false;
    normalBox.style.display = 'none'
    summaryBox.style.display = 'block'
})
normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'none'
    summary.checked = false;
    summaryBox.style.display = 'none'
    normalBox.style.display = 'block'
})
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    normalBox.style.display = 'none';
    summary.checked = false;
    summaryBox.style.display = 'none';
    hardBox.style.display = 'block'

})