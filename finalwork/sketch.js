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

      // let rx=windowWidth/i;
      // let ry=windowHeight/i*2;
      // const d=70;


      drawrect();
       // noStroke();

      // rect(rx,ry,d,d);

      // if(x-120< rx && rx <x+50 && y-120< ry && ry <y+50){
      //   i++;
      }
}

function drawrect(){
  push();
  noStroke();
  frameRate(10);

  let rx=windowWidth/random(windowWidth)*150;
  let ry=windowHeight/random(windowHeight)*100;
  const d=70;
  if(x-120< rx && rx <x+50 && y-120< ry && ry <y+50){
    noFill();
  }
  else{
    fill(255,0,0);
  }
  // fill(255,0,0);

  rect(rx,ry,d,d);

  pop();
}

if(i=4){
  console.log('CLEAR!')
  //fill(0);
  // noStroke();
  // textSize(80);
  // text('CLEAR!',windowWidth/2,windowHeight/3);
}


            function windowResized(){
              resizeCanvas(windowWidth, windowHeight);
            }
