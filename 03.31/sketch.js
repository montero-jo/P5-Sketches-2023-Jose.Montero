let c;

function setup (){
   c = createCanvas(1000,1000);
   background(0)
   noStroke()
   frameRate(60)
   background(0)
   
}

function draw (){


    fill(255)
    circle(mouseX+random(-10,10),mouseY,random(400,600))

    fill(0)
    rect(mouseX+20,mouseY-random(0,150),500,random(150,200))

    circle(mouseX+random(-10,10),mouseY,random(300,400))

    textSize(random(20,25))
    fill(230,43,20)
    text("how do you say yes in spanish?", random(370,420), random(260,285))
 
}

function mousePressed(){
    saveCanvas (c, "03.31", "PNG",)
}

function mousePressed() {
    saveCanvas(c, "fresh-sketch", "png")
    }