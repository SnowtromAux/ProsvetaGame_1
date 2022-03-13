//Main Coordinates
let startPosX = 50, startPosY = 195;
let width = 365/6, height = 365/6;
let color = "gray";
let borderColor = "black", borderWidth = 5;
let fieldCount = 6;
let grid = [];
let container = document.getElementById("container")

for(let i = 0;i < fieldCount;i++){
    grid[i] = [];
    for(let j = 0;j < fieldCount;j++){
     
        grid[i][j] = document.createElement("div");
        grid[i][j].style.position = "absolute";
        grid[i][j].style.left = startPosX + i*width;
        grid[i][j].style.top = startPosY + j*height;
        grid[i][j].style.width = width;
        grid[i][j].style.height = height;
        if(i == 0 && j == 0) grid[i][j].style.backgroundColor = "green";
        else grid[i][j].style.backgroundColor = color;
        grid[i][j].style.border = borderColor + " solid " + borderWidth + "px";
        container.append(grid[i][j]);
    }
}
