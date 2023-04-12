// let x;


function setup () {
    createCanvas(1000,1000);
    background(0);
  }
  function draw(){
    background(0, 0, 0, 20);
    const dim = Math.min(width, height);
    noFill();
    strokeWeight(random(0,150));
    stroke(random(100,200));
    angle = mouseX
    const cx = width / 2;
    const cy = height / 2;
    const u = Math.cos(angle);
    const v = Math.sin(angle);
    const radius = dim * 0.25;
    const px = cx + u * radius;
    const py = cy + v * radius;
    const r = dim * 0.1;
    ellipse(px, py, r, r);
  }
  