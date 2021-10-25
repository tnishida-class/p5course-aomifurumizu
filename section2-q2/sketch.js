// チェッカー
function setup() {
  createCanvas(200, 200);
   let size = width / 8;
   noStroke();
   //fill(128)
   //rect(20,0,20,20)
   //fill(128)
   //rect(60,0,20,20)
   for(let i = 0; i < 8; i++){//forは繰り返し前にする処理、くり返しを続ける条件
   for(let j = 0; j < 8; j++){
  //     // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    if((i+j)%2==0){
      fill(255);
      }
    else{
      fill(128);
    }
    rect(size*i,size*j,size,size);//格子完成
     }
     }
      noStroke();
    for(let i=0;i<8; i++){
    for(let j=0;j<3; j++){
      if((i+j)%2==0){
        fill(255,255,255)
        }
      else{
        fill(255,0,0)
      }
      ellipse(size/2+25*i,size/2+25*j,20,20)
      // if(j>=0 && j<=2){
      }
    }
    for(let i=0;i<8; i++){
    for(let j=5;j<8; j++){
      if((i+j)%2==0){
        fill(255,255,255)
      }
      else{
        fill(0,0,0)
      }
      ellipse(size/2+25*i,size/2+25*j,20,20)
    }
    }
    }


    // if((i+j)%2==0){
    //    }
    //  }
    //  }
//rectの（a,b,c,d）=(左上角のX座標、Y座標、幅、高さ)
