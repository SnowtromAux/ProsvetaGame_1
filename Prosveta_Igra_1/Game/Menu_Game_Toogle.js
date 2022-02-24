let userAnswer = document.getElementById("insert");


function toMenu(){
    menu = "start";
    menuStart.style.visibility = "visible";    
    menuGame.style.visibility = "hidden";
}

function check(){
    if(userAnswer.value == answer){
        userAnswer.value = "";
        questionHolder.textContent = createQuestion();
    }else{
        console.log("no");
    }
}