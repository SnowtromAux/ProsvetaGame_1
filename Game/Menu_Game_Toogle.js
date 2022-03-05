let userAnswer = document.getElementById("insert");
let pointField = document.getElementById("points");


let curX = 0, curY = 0;
let points = 0;

function toMenu(){
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
        grid[curX][curY].color = "green";
    }else{
        PutTextBubble(false);
        wrong++;
        grid[curX][curY].color = "red";
    }
    
    if(points + wrong == 10){
        Win();
        return;
    }

    pointField.innerHTML = `Points ${points} / 10`;
        
    userAnswer.value = "";
    questionHolder.textContent = createQuestion();
}
