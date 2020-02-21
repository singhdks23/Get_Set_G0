const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Circle Object Creation
const circle = {
    x: 200,
    y: 200,
    size: 25,
    dx: 5,
    dy: 4
}

const circle2 = {
    x: 400,
    y: 400,
    size: 25,
    dx: 6,
    dy: 5
}

const circle3 = {
    x: 250,
    y: 100,
    size: 26,
    dx: 6.5,
    dy: 5.5
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle="coral";
    ctx.fill();
}

function drawBall2(){
    ctx.beginPath();
    ctx.arc(circle2.x,circle2.y,circle2.size,0,Math.PI*2);
    ctx.fillStyle="red";
    ctx.fill();
}


function drawBall3(){
    ctx.beginPath();
    ctx.arc(circle3.x,circle3.y,circle3.size,0,Math.PI*2);
    ctx.fillStyle="green";
    ctx.fill();
}


const image = document.getElementById('source');

const player = {
    w: 33,
    h: 39,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
}

function drawPlayer(){
    ctx.drawImage(image,player.x,player.y,player.w,player.h);
}

function newPos(){
    player.x += player.dx;
    player.y += player.dy;

    // hitting boundaries
        if(player.x < 0){
            player.x =0;
        }

        if(player.x+player.w > canvas.width){
            player.x = canvas.width - player.w;
        }

        if(player.y < 0){
            player.y = 0;
        }

        if(player.y + player.h > canvas.height){
            player.y = canvas.height - player.h;
        }


}




var count2=0,count3=0,score=0;

function moveBall(){
    ctx.clearRect(0,0,canvas.width , canvas.height);
    document.getElementById('score').innerHTML = '<h3>'+'Score :' +score+'</h3>';
    drawBall(); 
    if(count2 == 20){
        
        drawBall2();
    }

    if(count3 == 45){
        drawBall3();
    }

    // move ball horizontally 
    circle.x += circle.dx;


    // move ball2 horizontally
    circle2.x += circle2.dx;

    // move ball3 horizontally
    circle3.x -= circle3.dx;

    // move ball vertically
    circle.y += circle.dy;

    // move ball2 vertically
    circle2.y += circle2.dy;

    // move ball3 vertically
    circle3.y -= circle3.dy;


    // hitting up and down boundaries
    if(circle.y+circle.size > canvas.height ||
        circle.y-circle.size <0){
        circle.dy *= -1;
        
        score++;

        if(count2 != 20) count2 += 1;
        if(count3 != 45) count3 += 1;
    }

     // hitting up and down boundaries for ball2
     if(circle2.y+circle2.size > canvas.height ||
        circle2.y-circle2.size <0){
        circle2.dy *= -1;
        if(count2 >=20) score++;

    }

    // hitting up and down boundaries for ball3
    if(circle3.y+circle3.size > canvas.height ||
        circle3.y-circle3.size <0){
        circle3.dy *= -1;
       if(count3 >= 45) score++;
    }
    
    
    // hitting side boundaries
    if(circle.x+circle.size > canvas.width || 
        circle.x-circle.size < 0){
        circle.dx *= -1;

        score++;

        if(count2 != 20) count2 += 1;
        if(count3 != 45) count3 += 1;
    }

    // hitting side boundaries for ball2
    if(circle2.x+circle2.size > canvas.width || 
        circle2.x-circle2.size < 0){
        circle2.dx *= -1;
        
        if(count2 >= 20)score++;

    }

    // hitting side boundaries for ball3
    if(circle3.x+circle3.size > canvas.width || 
        circle3.x-circle3.size < 0){
        circle3.dx *= -1;
        if(count3 >= 45)score++;
    }

    

    drawPlayer();

    newPos();
    
    // player hitting ball1
    if(circle.x > player.x && circle.x < player.x+player.w && circle.y > player.y && circle.y < player.y+player.h){
            console.log('game over');
            document.getElementById('msg').innerHTML='<h2>'+"GAME OVER";+'</h2>';
            // document.getElementById('canvas').innerHTML="Game Over";
            
            return;
    }

    // player hitting ball2
    if(count2>=20 && circle2.x > player.x && circle2.x < player.x+player.w && circle2.y > player.y && circle2.y < player.y+player.h){
        console.log('game over 2');
        document.getElementById('msg').innerHTML='<h2>'+"GAME OVER";+'</h2>';

        // document.getElementById('canvas').innerHTML="Game Over 2";
        
        return;
    }

    // player hitting ball3
    if(count3>=45 && circle3.x > player.x && circle3.x < player.x+player.w && circle3.y > player.y && circle3.y < player.y+player.h){
        console.log('game over 3');
        document.getElementById('msg').innerHTML='<h2>'+"GAME OVER";+'</h2>';

        // document.getElementById('canvas').innerHTML="Game Over 2";
        
        return;
    }


        
    

    
    

    requestAnimationFrame(moveBall);
    
}



// Final Call
moveBall();


document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);


function moveUp(){
    player.dy = -player.speed;
}

function moveDown(){
    player.dy = player.speed;
}

function moveLeft(){
    player.dx = -player.speed;
}


function moveRight(){
    player.dx = player.speed;
}


function keyDown(e){
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    }
    else if(e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    }

    else if(e.key === 'ArrowUp' || e.key === 'Up'){
        moveUp();
    }

    else if(e.key === 'ArrowDown' || e.key === 'Down'){
        moveDown();
    }
}

function keyUp(e){

    if(e.key === 'ArrowRight' || e.key === 'Right'||
      e.key === 'ArrowLeft' || e.key === 'Left'||
      e.key === 'ArrowUp' || e.key === 'Up'||
      e.key === 'ArrowDown' || e.key === 'Down'){

            player.dx = 0;
            player.dy = 0;


      }

}




