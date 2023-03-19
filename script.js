// ********** SELECTED ITEMS
const imagewrap = document.querySelector(".imgwrap");
const chooseBtn = [... document.querySelectorAll(".imgwrap img")];
const slidebelowBtn = document.querySelector(".slidebg");
const play_board = document.querySelector(".playing_table");
const gamechooseboard = document.querySelector(".game_board_choices")
const startBtn = [... document.querySelectorAll(".opponent button")];
const xplayer = document.querySelector(".whox");
const oplayer = document.querySelector(".whoo");
const boxes = document.querySelectorAll(".box");
const turnimg = document.querySelector(".turnimg");
const loading = document.querySelector(".loading");

// ************* CONDITIONS
let choice;
let first;
let second;
let third;
let fourth;
let fifth;
let sixth;
let seventh;
let eight;
let ninth;


// **************** EVENT LISTENERS
window.addEventListener("load", () => {
    setTimeout(() => {
        loading.classList.remove("show");
    }, 10000);
})
// choose btn 
chooseBtn.forEach(btn => {
    btn.addEventListener("click", choose);
});
// start btn
startBtn.forEach(start => {
    start.addEventListener("click", gameStart);
})
// boxes event listener
boxes.forEach(box => {
    box.addEventListener("click", play);
})

// *************** THE EITHER OF THE PLAY LETTER
const xORo = [
    {
        image: "images/SVG/icon-x.svg",
        identity: "cross",
        turn: "images/SVG/icon-o-default.svg"
    },
    {
        image: "images/SVG/icon-o.svg",
        identity: "nut",
        turn: "images/SVG/icon-x-default.svg"
    }
];


let xORoNum = 0;


// ************* FUNCTIONS
// function to check 
function check() {
    if ((first == second && first == third) || (first == fourth && first == seventh) || (first == fifth && first == ninth)){
        console.log("first")
    }else if (second == fifth && second == eight) {
        console.log("second");
    }else if((third == sixth && third == ninth) || (third == fifth && third == seventh)) {
        console.log("third");
    }else if ((fourth == fifth && fourth == sixth)) {
        console.log("fourth")
    }else if (seventh == eight && seventh == ninth) {
        console.log("last")
    }
}
// funcition to validate the boxes as i play the game
function validateboxes() {
    if(boxes[0].childElementCount == 0) {
        return;
    }else {
        first = boxes[0].childNodes[0].dataset.id;
        check();
    }
    if(boxes[1].childElementCount == 0) {
        return;
    }else {
        second = boxes[1].childNodes[0].dataset.id;
    }
    if(boxes[2].childElementCount == 0) {
        return;
    }else {
        third = boxes[2].childNodes[0].dataset.id;
    }
    if(boxes[3].childElementCount == 0) {
        return;
    }else {
        fourth = boxes[3].childNodes[0].dataset.id;
    }
    if(boxes[4].childElementCount == 0) {
        return;
    }else {
        fifth = boxes[4].childNodes[0].dataset.id;
    }
    if(boxes[5].childElementCount == 0) {
        return;
    }else {
        sixth = boxes[5].childNodes[0].dataset.id;
    }
    if(boxes[6].childElementCount == 0) {
        return;
    }else {
        seventh = boxes[6].childNodes[0].dataset.id;
    }
    if(boxes[7].childElementCount == 0) {
        return;
    }else {
        eight = boxes[7].childNodes[0].dataset.id;
    }
    if(boxes[8].childElementCount == 0) {
        return;
    }else {
        ninth = boxes[8].childNodes[0].dataset.id;
    }

    checking();
}
// function to play 
function play(e) {
    let child = e.currentTarget.children.length;
    let adult = e.currentTarget;
    
    if (child == 1) {
        return;
    }else {
        turnimg.src = xORo[xORoNum].turn;
        adult.innerHTML = `<img src=${xORo[xORoNum].image} class="input" data-id="${xORo[xORoNum].identity}"alt="">`;
        // adult.classList.add(xORo[xORoNum].identity);
        // console.log(adult)
        xORoNum++;
        if(xORoNum > 1) {
            xORoNum = 0;
        }
        validateboxes();
    }
}
// set default
function setDefault() {
    choice = "";
}
// gamestart function
function gameStart(e) {
    let data_id = e.currentTarget.dataset.id;

    if(data_id == "human") {
        choice = imagewrap.querySelector(".active").classList;
        if(!choice.contains("picko")) {
            oplayer.textContent = "you";
            xplayer.textContent = "friend"
            setDefault();
        }else {
            xplayer.textContent = "you";
            oplayer.textContent = "friend";
            setDefault();
        }
        gamechooseboard.classList.remove("show");
        play_board.classList.add("show");
    }else {
        return;
    }
}
// to choose the player i want to be
function choose(e) {
    let dataclass = e.currentTarget.classList;
    // adding the active class to know what player you are
    chooseBtn.forEach(btn => {
        btn.classList.add("active");
    })
    e.currentTarget.classList.remove("active");
    // checking data
    dataclass == "picko" ? slidebelowBtn.classList.add("trans") : slidebelowBtn.classList.remove("trans");
}