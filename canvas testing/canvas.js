//context
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,80,80);

//circle
ctx.beginPath();
ctx.arc(95,150,50,0,2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill()

//line
ctx.beginPath()
ctx.moveTo(10, 10);
ctx.lineTo(200, 100);
ctx.strokeStyle='black';
ctx.lineWidth = 3;
ctx.stroke();

//shape
ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(120,40)
ctx.lineTo(80,100);
ctx.closePath();

ctx.fillStyle = "#2F6Bff"
ctx.fill();
ctx.stroke();


function drawShape(ctx, xPos, yPos, color){
    ctx.beginPath();
    ctx.moveTo(xPos,yPos);
    ctx.lineTo(xPos+80,yPos)
    ctx.lineTo(xPos+40,yPos + 60);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

drawShape(ctx, 100,100, "rgb(92, 211, 23)");