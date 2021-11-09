// Instructions for Rock, Paper, and Scissors Game
// You have to select everytime which you want o play Rock,Paper or Scissor
// If player wins then player score increases by 1 
// If computer wins then computer score increases by 1
// If it came out as a draw then no one scores increases
// There are two buttons in this game
// Play will start game and increase the scpre on the inputs
// New Game will reset all the values.

let compscore = 0
let playerscore=0
function playgame() {
    let center_count = document.getElementById("center-count")
    let left_select = document.querySelector('input[name="rps_game"]:checked').value;
    let computer = ['Rock', 'Paper', 'Scissors']
    let cnum = getRandom()
    let compchar = computer[cnum]
    console.log(cnum)
    let system = result(left_select, compchar)

    if(cnum==0){
        document.getElementById('right-image-section').innerHTML='<img src="rock_left.png" alt="ROCK" >'
    }else if(cnum==1){
        document.getElementById('right-image-section').innerHTML='<img src="paper_left.png" alt="PAPER" >'
    }else if(cnum==2){
        document.getElementById('right-image-section').innerHTML='<img src="scissors_left.png" alt="SCISSORS" >'
    }

    if(system===0){
        compscore+=1
        center_count.innerHTML = "SCORE <br> "+playerscore+":"+compscore
    }else if(system===1){
        playerscore+=1
        center_count.innerHTML = "SCORE <br> "+playerscore+":"+compscore
    }else if(system===2){
        center_count.innerHTML = "SCORE <br>"+playerscore+":"+compscore
    }
}

function getRandom() {
    let randnum = Math.floor(Math.random()* 3) 
    return randnum
}
function newgame() {
    document.getElementById("center-count").innerHTML = "SCORE<br>0:0"
    document.getElementById('right-image-section').innerHTML=''
    compscore=0
    playerscore=0
}
function result(left_select, compchar) {
    if (left_select == 'Rock') {
        if (compchar == 'Paper') {
            return 0
        } else if (compchar == 'Rock') {
            return 2
        } else if (compchar=='Scissors'){
            return 1
        }
    } else if (left_select == 'Paper') {
        if (compchar == 'Rock') {
            return 1
        } else if (compchar == 'Paper') {
            return 2
        } else if (compchar=='Scissors') {
            return 0
        }
    } else if (left_select=='Scissors'){
        if(compchar=='Rock'){
            return 0
        }else if(compchar=='Paper'){
            return 1
        }else if(compchar=='Scissors'){
            return 2
        }
    }
}
