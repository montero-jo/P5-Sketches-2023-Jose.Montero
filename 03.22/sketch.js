function setup(){
    createCanvas(1000,1000)
    background(0)
    colorMode(RGB)
}

function draw(){

    noFill()
    stroke(255,0,0)
    strokeWeight(10)
    ellipse(500,500,600)
    stroke(0,0,255)
    ellipse(500,500,500)
    stroke(0,255,255)
    ellipse(500,500,400)
    stroke(255,0,255)
    ellipse(500,500,300)

    fill(0)
    noStroke()
    ellipse(650,500,350)

}