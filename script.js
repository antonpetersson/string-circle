var offset = 10;
var nrOfDots = 400;
var multiplier = 190;
var radius = 200;
var dotSize = 4;
var dots = [];
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

draw();

function draw(){
    drawOutlineCirle();
    drawOutlineDots();
    drawLines();
    
}

function drawOutlineCirle(){
    context.strokeStyle = "turquoise";
    context.beginPath();
    context.arc(radius + offset, radius + offset,radius,0,2*Math.PI);
    context.stroke(); 
}

function drawOutlineDots(){
context.fillStyle = "black";
for (var i = 0; i < nrOfDots; i++) {
    var y = offset + radius + radius * Math.cos(2 * Math.PI * i / nrOfDots) * -1;
    var x = offset + radius + radius * Math.sin(2 * Math.PI * i / nrOfDots);  

    context.beginPath();
    context.arc(x, y, dotSize, 0, 2*Math.PI);
    context.fill(); 

    dots[i] = {
        x: x,
        y: y,
        };


    } 
}


function drawLines(){
    context.strokeStyle = "yellow";
    context.beginPath();

    for (var i = 0; i < dots.length; i++) {
        var lineStart = dots[i];
        var lineEnd = dots[i * multiplier % nrOfDots]

        context.moveTo(lineStart.x, lineStart.y);
        context.lineTo(lineEnd.x, lineEnd.y);
    }

        context.stroke(); 
    
}