let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,80,80);

ctx.fillStyle = "blue"
ctx.arc(95,50,40,0,2 * Math.PI);
