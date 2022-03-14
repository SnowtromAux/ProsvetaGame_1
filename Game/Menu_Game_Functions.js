let questionHolder = document.getElementById("question");
let checkAnswer = document.getElementById("enter");
let gameBubble = document.getElementById("gameBubbleP");
let answer;

function createQuestion(){ 
    let a, b, question; 
    let c = Math.round(Math.random()*3);

    switch(c){
        case 0: 
            a = Math.round(Math.random()*50);
            b = Math.round(Math.random()*50);
            question = `${a} + ${b} = `;
            answer = a + b;
            break;
        case 1: 
            a = Math.round(Math.random()*50);
            b = Math.round(Math.random()*50);
            if(a > b){question = `${a} - ${b} = `; answer = a - b;}
            else{question = `${b} - ${a} = `; answer = b - a;}
            break;
        case 2:
            a = Math.round(Math.random()*9);
            b = Math.round(Math.random()*9);
            question = `${a} * ${b} = `;
            answer = a * b;
            break;
        case 3:
            v = [];
            a = Math.round(Math.random()*100);
            for(let i = 1;i <= a;i++){
                if(a % i == 0){
                    v.push(i);
                }
            }
            b = v[Math.round(Math.random()*(v.length - 1))];
            question = `${a} / ${b} = `;
            answer = a / b;
            break;
    }

    return question;
}




let gridPath = [];
for(let i = 0;i < fieldCount;i++){
    gridPath[i] = [];
    for(let j = 0;j < fieldCount;j++){
        if(i == 0 && j == 0) gridPath[i][j] = 1;
        else gridPath[i][j] = 0;
    }
}


let path = ["s","s","s","s","s","e","e","e","e","e"];

function pathMaker(){
    for(let i = path.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let buf = path[i];
        path[i] = path[j];
        path[j] = buf;
    }
    //console.log(path);
}

let statistics = document.getElementById("statistics");
let winTitle = document.getElementById("winTittle")
let gameH = document.getElementById("gameH")

let bad = document.getElementById("bad");
let medium = document.getElementById("medium");
let good = document.getElementById("good");
let perfect = document.getElementById("perfect");

let completed = document.getElementById("gameFinish")
function Win(){

    completed.play();
    
    statisticOn = true;

    if(points >= 0 && points <= 3)bad.style.borderColor = "yellow";
    if(points >= 4 && points <= 7)medium.style.borderColor = "yellow";
    if(points >= 8 && points <= 9)good.style.borderColor = "yellow";
    if(points == 10)perfect.style.borderColor = "yellow";
    
    winTitle.innerHTML = "Резултат: " + points;
    checkAnswer.disabled = true;
    gameH.style.visibility = "hidden";
    statistics.style.visibility = "visible";
}

const rightText = ["Правилно!" , "Браво!"];
const wrongText = ["Грешно!" , "Не!" , "Опитай пак!"];

function PutTextBubble(right){
    if(right){
        gameBubble.innerHTML = rightText[Math.floor(Math.random() * rightText.length)];
    }else{
        gameBubble.innerHTML = wrongText[Math.floor(Math.random() * wrongText.length)];
    }
}
