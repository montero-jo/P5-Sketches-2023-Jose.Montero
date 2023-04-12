function setup() {
    createCanvas(1000, 1000);
    noFill();
    stroke(255);
    strokeWeight(8);
  }
  
  function draw() {
    background(0, 15, 38);

    stroke(mouseX,mouseY,mouseY-200)
    fill(mouseX,mouseY,mouseY-200)
    circle(500, 500, mouseX+300);
    fill(0, 15, 38)
    circle(500, 500, mouseX+100);

    fill(0, 15, 38);
    stroke(0, 15, 38)
    circle(mouseX+450,500,500)

    stroke(mouseX,mouseY,mouseY-200)
    strokeWeight(60)
    noFill()
    circle(500,500, mouseX+500)

    stroke(mouseX,mouseY,mouseY-200)
    strokeWeight(60)
    noFill()
    circle(500,500, mouseX+700)
  }
  
  function mousePressed(){
    saveCanvas (c, "03.23", "PNG",)
  }
