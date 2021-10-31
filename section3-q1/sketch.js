// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  }

  function mousePressed(){
    cycle=50;
    }

  function mouseReleased(){
    cycle=100;
    }

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;

  // BLANK[1]
  //let size=count;　これでy=xみたいになる
if(count>cycle/2){
  ellipse(width/2,height/2,count);
  }
  else{
    ellipse(width/2,height/2,cycle-count)
  }
}
  //ellipse(width / 2, height / 2, size);
