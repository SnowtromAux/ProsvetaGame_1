let soundsOn = true, sfxsOn = true;
let startSong = document.getElementById("music")
let clickSound = [];

questionHolder.textContent = createQuestion();
pathMaker();

function sfxCreate(){
    if(sfxsOn){
        clickSound[clickSound.length-1] = document.createElement("audio");
        clickSound[clickSound.length-1].src = "Sounds/sfx.mp3";
        document.body.append(clickSound[clickSound.length-1]);
        clickSound[clickSound.length-1].play();
        clickSound[clickSound.length-1].onended = () => {
            clickSound.splice(clickSound.length-1 ,clickSound.length-1);
        }
    }
}

let wrongSound = []
function wrongCreate(){
    if(sfxsOn){
        wrongSound[wrongSound.length-1] = document.createElement("audio");
        wrongSound[wrongSound.length-1].src = "Sounds/wrong.mp3";
        document.body.append(wrongSound[wrongSound.length-1]);
        wrongSound[wrongSound.length-1].play();
        wrongSound[wrongSound.length-1].onended = () => {
            wrongSound.splice(wrongSound.length-1 ,wrongSound.length-1);
        }
    }
}


let correctSound = [];
function correctCreate(){
    if(sfxsOn){
        correctSound[correctSound.length-1] = document.createElement("audio");
        correctSound[correctSound.length-1].src = "Sounds/correct.mp3";
        document.body.append(correctSound[correctSound.length-1]);
        correctSound[correctSound.length-1].play();
        correctSound[correctSound.length-1].onended = () => {
            correctSound.splice(correctSound.length-1 ,correctSound.length-1);
        }
    }
}
