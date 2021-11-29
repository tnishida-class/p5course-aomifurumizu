// 最終課題を制作しよう
const v=2;
const size =100;

let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width/2;
  y=height/2;
}

function draw(){
  background(160, 192, 255);

  fill(255);
  noStroke();
  ellipse(x,y,size,size);

  if(keyIsDown(LEFT_ARROW)){x-=5;}
  if(keyIsDown(RIGHT_ARROW)){x+=5;}
  if(keyIsDown(UP_ARROW)){y-=5;}
  if(keyIsDown(DOWN_ARROW)){y+=5;}



    for(let i=0;i<4;i++){
       fill(255,0,0);
       noStroke();
       let rx=windowWidth/i;
       let ry=windowHeight/i*2;
       const d=70;
      rect(rx,ry,d,d);

      if(x-120< rx && rx <x+50 && y-120< ry && ry <y+50){
        drawrect();
      }
}

function drawrect(){
  push();
  fill(255,0,0);
  let rx=windowWidth/i;
  let ry=windowHeight/i*2;
  const d=70;
  rect(rx,ry,d,d);
  // translate(i*20,i*-20);
  pop();
}

if(i=4){
  fill(0);
  noStroke();
  textSize(80);
  text('CLEAR!',windowWidth/2,windowHeight/3);
}
}

            function windowResized(){
              resizeCanvas(windowWidth, windowHeight);
            }


// fill(255,0,0);
// noStroke();
// rect(100,100,70,70)
  // fill(0);
  //  for(let i =0;i<1;i++){
   // let rx,ry;
   // rx=Math.floor(Math.random()*(windowWidth+1));
   // ry=Math.floor(Math.random()*(windowHeight+1));

    //  let rx=random(windowWidth)
    //  let ry=random(windowHeight)
    //
    // rect(rx,ry,70,70);

// }
//   if(moving){
//     let d=dist(mouseX, mouseY,x,y);
//
//     let vx=((mouseX-x)/d)*v*2;
//     let vy=((mouseY-y)/d)*v*2;
//
//     x+=vx;
//     y+=vy;
//   }
// }
//
// function keyPressed() {

  // moving=!moving;
