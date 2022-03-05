//Main Coordinates
let startPosX = 50, startPosY = 195;
let width = 365/6, height = 365/6;
let color = "gray";
let borderColor = "black", borderWidth = 5;
let fieldCount = 6;
let grid = [];

//Canvas drawing code
class Grid{
    constructor(x , y){
        this.x = x;
        this.y = y;
        this.color = color;
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.width = width;
        this.height = height;
    }

    draw(){
        ctx.fillStyle = this.borderColor;
        ctx.fillRect(this.x, this.y , this.width, this.height);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + this.borderWidth, this.y + this.borderWidth,this.width - 2*this.borderWidth, this.height - 2*this.borderWidth);
    }
}


for(let i = 0;i < fieldCount;i++){
    grid[i] = [];
    for(let j = 0;j < fieldCount;j++){
        grid[i][j] = new Grid(startPosX + j*width , startPosY + i*height);
    }
}


grid[0][0].color = "green";

function drawGame(){
    for(let i = 0;i < fieldCount;i++){
        for(let j = 0;j < fieldCount;j++){
            grid[i][j].draw();
        }
    }
}
