let userAnswer = document.getElementById("insert");
let pointField = document.getElementById("points");


let curX = 0, curY = 0;
let points = 0;

function toMenu(){
    if(sfxsOn)sfxCreate();

    if(piMenu)personalInfoMenu.style.visibility = "visible";
    if(sMenu)settingsMenu.style.visibility = "visible";
    if(rMenu)rulesMenu.style.visibility = "visible";

    menu = "start";
    
    statistics.style.visibility = "hidden";
    gameH.style.visibility = "hidden";

    menuStart.style.visibility = "visible";    
    menuGame.style.visibility = "hidden";
}

let wrong = 0;
function check(){
    if(sfxsOn)sfxCreate();
    
    if(path[points+wrong] == 's')curY++;
    else curX++;
    
    if(userAnswer.value == answer){
        correctCreate();
        PutTextBubble(true);
        points++;
        grid[curX][curY].style.backgroundColor = "green";
    }else{
        wrongCreate();
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

let again = ["Хубаво е че играеш отново!" , "Мерси , че дойде отново", "Ще се забавляваме още"];
function restart(){
    statistics.style.visibility = "hidden";
    gameH.style.visibility = "visible";

    statisticOn = false;
    points = 0;
    wrong = 0;
    curX = 0;
    curY = 0;
    checkAnswer.disabled = false;

    gameBubble.innerHTML = again[Math.round(Math.random()*2)];
    questionHolder.textContent = createQuestion();
    pathMaker();
    drawField();

}