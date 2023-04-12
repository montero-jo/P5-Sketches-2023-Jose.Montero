let c;

function setup (){
    createCanvas(1000,1000)
    background(0)
}

function draw (){

    noStroke() 
    fill(mouseX,mouseY,255)
    ellipse (mouseX,mouseY, 5,5)
}

function mousePressed(){
    saveCanvas (c, "03.32", "PNG",)
}