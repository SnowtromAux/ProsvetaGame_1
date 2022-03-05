let menuStart = document.getElementById("start");
let menuExit = document.getElementById("exit");
let menuGame = document.getElementById("gameMenu");

let settingsMenu = document.getElementById("settingsMenu");
let personalInfoMenu = document.getElementById("personalInfoMenu");
let rulesMenu = document.getElementById("rulesMenu");

function playYes(){
    if(littleMenu == "nothing"){
        menu = "game";
        settingsMenu.style.visibility = "hidden";
        personalInfoMenu.style.visibility = "hidden";
        rulesMenu.style.visibility = "hidden";
        menuStart.style.visibility = "hidden"; 
        menuGame.style.visibility = "visible";

    }
}

function playNo(){
    if(littleMenu == "nothing"){
        littleMenu = "confirmExit";
        menuExit.style.visibility = "visible";
    }
}

function exitYes(){
    window.close();
}

function exitNo(){
    littleMenu = "nothing";
    menuExit.style.visibility = "hidden";
}




let credits = document.getElementById("credits");
let dropmenu = document.getElementById("dropmenu");
let table = document.getElementById("creditsTable");

let up = false;
function showInfo(){
    if(!up){
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
function showSettings(){
    if(!sMenu){
        
        sMenu = true;
        piMenu = false;
        rMenu = false;

        rulesMenu.style.visibility = "hidden";
        personalInfoMenu.style.visibility = "hidden";
        settingsMenu.style.visibility = "visible";
    }else{ 
        sMenu = false;
        settingsMenu.style.visibility = "hidden";
    }
}

function showMoreInfo(){
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