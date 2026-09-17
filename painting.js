let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,80,80);

//circle
ctx.beginPath();
ctx.arc(95,150,50,0,2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill()


ctx.beginPath()
ctx.moveTo(10, 10);
ctx.lineTo(200, 100);
ctx.strokeStyle='black';
ctx.lineWidth = 3;
ctx.stroke();

