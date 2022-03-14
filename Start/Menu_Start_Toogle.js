let menuStart = document.getElementById("start");
let menuGame = document.getElementById("gameMenu");

let settingsMenu = document.getElementById("settingsMenu");
let personalInfoMenu = document.getElementById("personalInfoMenu");
let rulesMenu = document.getElementById("rulesMenu");


function playYes(){
    if(sfxsOn)sfxCreate();
    settingsMenu.style.visibility = "hidden";
    personalInfoMenu.style.visibility = "hidden";
    rulesMenu.style.visibility = "hidden";
    menuStart.style.visibility = "hidden"; 
    menuGame.style.visibility = "visible";
}



function playNo(){
    if(sfxsOn)sfxCreate();
    window.close();
}




let credits = document.getElementById("credits");
let dropmenu = document.getElementById("dropmenu");
let table = document.getElementById("creditsTable");

let up = false;

let slideUp = document.getElementById("slideUp");
let slideDown = document.getElementById("slideDown");

function showInfo(){
    if(sfxsOn)sfxCreate();
    if(!up){
        if(sfxsOn)slideDown.play();
        credits.style.animationName = 'popupUp';
        credits.style.animationDuration = 2 + 's';
        credits.style.marginTop = -200 + "px";

        dropmenu.style.animationName = 'popupUp';
        dropmenu.style.animationDuration = 2 + 's';
        dropmenu.style.marginTop = -200 + "px";

        table.style.animationName = 'popupUp';
        table.style.animationDuration = 2 + 's';
        table.style.marginTop = -200 + "px";

        table.addEventListener('animationend' , () => {
            up = true;
        });
        
    }

    if(up){
        if(sfxsOn)slideUp.play();
        credits.style.animationName = 'popupDown';
        credits.style.animationDuration = 2 + 's';
        credits.style.marginTop = 0 + "px";

        dropmenu.style.animationName = 'popupDown';
        dropmenu.style.animationDuration = 2 + 's';
        dropmenu.style.marginTop = 0 + "px";

        table.style.animationName = 'popupDown';
        table.style.animationDuration = 2 + 's';
        table.style.marginTop = 0 + "px";

        table.addEventListener('animationend' , () => {
            up = false;
        });
    }
}



let sMenu = false, piMenu = false, rMenu = false;

let sound_On = document.getElementById("soundOn");
let sound_Off = document.getElementById("soundOff");

let sfx_On = document.getElementById("sfxOn");
let sfx_Off = document.getElementById("sfxOff");

function showSettings(){
    if(sfxsOn)sfxCreate();
    if(!sMenu){
        
        sMenu = true;
        piMenu = false;
        rMenu = false;

        if(soundsOn){
            sound_On.style.visibility = "visible";
            sound_Off.style.visibility = "hidden";
        }else{
            sound_On.style.visibility = "hidden";
            sound_Off.style.visibility = "visible";
        }

        if(sfxsOn){
            sfx_On.style.visibility = "visible";
            sfx_Off.style.visibility = "hidden";
        }else{
            sfx_On.style.visibility = "hidden";
            sfx_Off.style.visibility = "visible";
        }

        rulesMenu.style.visibility = "hidden";
        personalInfoMenu.style.visibility = "hidden";
        settingsMenu.style.visibility = "visible";
    }else{ 
        sound_On.style.visibility = "hidden";
        sound_Off.style.visibility = "hidden";
        sfx_On.style.visibility = "hidden";
        sfx_Off.style.visibility = "hidden";
        sMenu = false;
        settingsMenu.style.visibility = "hidden";
    }
}

function showMoreInfo(){
    if(sfxsOn)sfxCreate();
    sound_On.style.visibility = "hidden";
    sound_Off.style.visibility = "hidden";
    sfx_On.style.visibility = "hidden";
    sfx_Off.style.visibility = "hidden";
    if(!piMenu){
        
        piMenu = true;
        sMenu = false;
        rMenu = false;

        rulesMenu.style.visibility = "hidden";
        settingsMenu.style.visibility = "hidden";
        personalInfoMenu.style.visibility = "visible";
    }else{
        piMenu = false;
        personalInfoMenu.style.visibility = "hidden";
    }
}

function showRules(){
    if(sfxsOn)sfxCreate();
    sound_On.style.visibility = "hidden";
    sound_Off.style.visibility = "hidden";
    sfx_On.style.visibility = "hidden";
    sfx_Off.style.visibility = "hidden";
    if(!rMenu){
        rMenu = true;
        sMenu = false;
        piMenu = false;

        settingsMenu.style.visibility = "hidden";
        personalInfoMenu.style.visibility = "hidden";
        rulesMenu.style.visibility = "visible";
    }else{
        rMenu = false;
        rulesMenu.style.visibility = "hidden";
    }
}

function soundOn(){
    if(sfxsOn)sfxCreate();
    startSong.play();
    startSong.volume = 0;
    soundsOn = false;
    sound_On.style.visibility = "hidden";
    sound_Off.style.visibility = "visible";
}

function soundOff(){
    if(sfxsOn)sfxCreate();
    startSong.volume = 1;
    soundsOn = true; 
    sound_On.style.visibility = "visible";
    sound_Off.style.visibility = "hidden";
}


function sfxOn(){
    if(sfxsOn)sfxCreate();
    sfxsOn = false;
    sfx_On.style.visibility = "hidden";
    sfx_Off.style.visibility = "visible";
}

function sfxOff(){
    if(sfxsOn)sfxCreate();
    sfxsOn = true;
    sfx_On.style.visibility = "visible";
    sfx_Off.style.visibility = "hidden";
}
