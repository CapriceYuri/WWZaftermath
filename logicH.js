const hardSelect = document.querySelector("#btnradio1");
const normalSelect = document.querySelector("#btnradio2")
const normalBox = document.querySelector(".BOX1");
const hardBox = document.querySelector(".BOX2");


normalSelect.addEventListener('click', () => {
    hardSelect.checked = false;
    hardBox.style.display = 'block'
    normalBox.style.display = 'none'
    console.log('Testing')
})
hardSelect.addEventListener('click', () => {
    normalSelect.checked = false;
    hardBox.style.display = 'none'
    normalBox.style.display = 'block'
    console.log('Testing')
})