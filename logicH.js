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

// Using Object Constructor
function PlayerInfo(Map, Player, Wave, Src, Team) {
    this.Map = Map;
    this.Player = Player;
    this.Wave = Wave;
    this.Src = Src;
    this.Team = Team || undefined;
}
const player1 = new PlayerInfo('Tokyo', "Yuri", 40, "https://www.youtube.com/")

// Using Class Declaration
class NewRecord {
    constructor(Map, Player, Wave, Src, Team) {
        this.Map = Map;
        this.Player = Player;
        this.Wave = Wave;
        this.Src = Src;
        this.Team = Team || undefined;
    }
}
const player2 = new NewRecord("Jerusalem", "Caprice", 99, "https://www.youtube.com/", "Solo")

// Using Regular Object
const obj1 = {
    Map: "New York",
    Player: "CapriceYuri",
    Wave: 21,
    Src: "https://www.youtube.com/",
    Team: "Solo"
}

// Sorting Based on Wave value

const playerRecord = [
    {
        Map: "Jerusalem",
        Player: "PlayerOne",
        Wave: 70,
        Src: "https://www.youtube.com/",
        Team: "Solo"
    },
    {
        Map: "Tokyo",
        Player: "PlayerTwo",
        Wave: 50,
        Src: "https://www.youtube.com/",
    },
    {
        Map: "Jerusalem",
        Player: "PlayerThree",
        Wave: 23,
        Src: "https://www.youtube.com/",
    },
    {
        Map: "Moscow",
        Player: "PlayerFour",
        Wave: 98,
        Src: "https://www.youtube.com/",
        Team: "Solo"
    }
];

playerRecord.push({ Map: "Testing2", Player: "ADMIN2", Wave: 100, Src: "https://www.google.com" })
playerRecord.push(obj1);
playerRecord.push(player1);
playerRecord.push(player2);
playerRecord.push({ Map: "Moscow", Player: "Saber", Wave: 1, Src: "https://support.saber.games/hc/en-us/categories/4417921964305-World-War-Z-Aftermath" })
playerRecord.push({ Map: "Testing", Player: "ADMIN", Wave: 101, Src: "https://www.google.com" })


function recordSort(a, b) {
    return a.Wave - b.Wave;
}

const finalizedRecord = playerRecord.sort(recordSort).reverse();

for (let i = 0; i < 3; i++) {
    if (i == 0) {
        finalizedRecord[i].Medal = "First";
    }
    if (i == 1) {
        finalizedRecord[i].Medal = "Second";
    }
    if (i == 2) {
        finalizedRecord[i].Medal = "Third";
    }
}

// CODE DIVISION
const tableExM = document.querySelector(".table-ext-m")

function addRank({ Map, Player, Wave, Src, Team, Medal }) {
    const tempRow = document.createElement("tr")
    tableExM.appendChild(tempRow);
    const map = document.createElement("td");
    let group;
    let whitespace;
    map.textContent = Map.toUpperCase();
    tempRow.appendChild(map);
    if (Medal !== undefined) {
        if (Medal === "First") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/firstPlace.png");
            map.appendChild(medalGold)
        }
        if (Medal === "Second") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/secondPlace.png");
            map.appendChild(medalGold)
        }
        if (Medal === "Third") {
            const medalGold = document.createElement("img");
            medalGold.setAttribute("src", "images/thirdPlace.png");
            map.appendChild(medalGold)
        }
    }
    if (Team === "Solo") {
        group = document.createElement("i");
        whitespace = document.createElement("span")
        whitespace.textContent = " "
        map.appendChild(whitespace)
        group.classList.add('fa-solid', 'fa-person-rifle', 'text-danger');
        map.appendChild(group);
    } else {
        group = document.createElement("i");
        whitespace = document.createElement("span")
        whitespace.textContent = " "
        map.appendChild(whitespace)
        group.classList.add('fa-solid', 'fa-people-group', 'text-success');
        map.appendChild(group);
    }
    const player = document.createElement("td");
    player.textContent = Player;
    tempRow.appendChild(player);
    const wave = document.createElement("td");
    wave.textContent = Wave;
    tempRow.appendChild(wave);
    const src = document.createElement("td");
    const link = document.createElement("a")
    link.textContent = 'Full'
    link.href = Src;
    link.target = "_blank"
    src.appendChild(link)
    tempRow.appendChild(src);
}

for (let i = 0; i < finalizedRecord.length; i++) {
    addRank(finalizedRecord[i]);
}





