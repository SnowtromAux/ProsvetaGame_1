let menuStart = document.getElementById("start");
let menuExit = document.getElementById("exit");
let menuGame = document.getElementById("questionaire");

function playYes(){
    if(littleMenu == "nothing"){
        menu = "game";
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