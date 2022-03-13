let userAnswer = document.getElementById("insert");
let pointField = document.getElementById("points");


let curX = 0, curY = 0;
let points = 0;

function toMenu(){

    if(piMenu)personalInfoMenu.style.visibility = "visible";
    if(sMenu)settingsMenu.style.visibility = "visible";
    if(rMenu)rulesMenu.style.visibility = "visible";

    menu = "start";
    menuStart.style.visibility = "visible";    
    menuGame.style.visibility = "hidden";
}

let wrong = 0;
function check(){
    
    if(path[points+wrong] == 's')curY++;
    else curX++;
    
    if(userAnswer.value == answer){
        PutTextBubble(true);
        points++;
        grid[curX][curY].style.backgroundColor = "green";
    }else{
        PutTextBubble(false);
        wrong++;
        grid[curX][curY].style.backgroundColor = "red";
    }
    
    if(points + wrong == 10){
        Win();
        return;
    }

    pointField.innerHTML = `Points ${points} / 10`;
        
    userAnswer.value = "";
    questionHolder.textContent = createQuestion();
}
