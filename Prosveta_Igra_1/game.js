const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let menu = "start", littleMenu = "nothing";
let gameover = false;

questionHolder.textContent = createQuestion();
pathMaker();

function update(){

}

function draw(){
    if(menu === "game"){
        drawGame();
    }
}



animate();

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();   
    requestAnimationFrame(animate);
}
