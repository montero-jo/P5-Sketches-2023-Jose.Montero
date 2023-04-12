let c;

function setup (){

   c = createCanvas(1000,1000);
   background(0)

   ellipse(500,500,400,400)

   fill(0)
   ellipse (500,500,200,220)

   rect(500,425,200,150)

   fill(230,43,20)
   text("how do you say yes in spanish", 430, 270)
}

function mousePressed(){
    saveCanvas (c, "03.31", "PNG",)
}