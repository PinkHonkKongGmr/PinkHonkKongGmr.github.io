var canvas=document.getElementById('cnvs');
var ctx = canvas.getContext('2d');



ctx.beginPath();
ctx.moveTo(300,200);
ctx.lineTo(305,190);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300,200);
ctx.lineTo(295,190);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,100,0, Math.PI,true);
ctx.lineWidth = 4;
ctx.stroke();
