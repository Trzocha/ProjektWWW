/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Game={
    init:function(){
//        Game.canvas = document.createElement('canvas');
//        Game.ctx = Game.canvas.getContext('2d');
//        document.body.appendChild(Game.canvas);
        Game.layout();
        window.addEventListener('keydown',Game.move_gamer,false);
        
        Game.enemy = [];
        
        for(let i=Game.vs;i<Game.ve;i++){
            Game.enemy[i] = new Enemy(VARGLOB.lvl);
            Game.enemy[i].pos_y = (Game.hf+Game.hw)*i+2;
        }
        
        Game.prawo.click(
            function (){
               if(Game.pg_x<=(VARGLOB.cw-Game.wg-5)) //przesuwanie gracza w prawo wraz z ograniczeniem na szerokosc
                  Game.pg_x+=5;
        });
        
        Game.lewo.click(
            function (){
                if(Game.pg_x>=5)               //przesuwanie gracza w lewo wraz z ograniczeniem na szerokosc
                    Game.pg_x-=5;     
        });
        
        Game.gora.click(
           function (){
              if(Game.pg_y>=2*Game.hf+Game.hw+2){
                 Game.pg_y-=(Game.hf+Game.hw);
                 VARGLOB.point+=1;
                 if(VARGLOB.point%14 == 0){  //dotarcie na sam szczyt
                    VARGLOB.lvl+=1;
                    Game.init();
                 }  
             }
        });
        
        Game.dol.click(
           function (){
             if(Game.pg_y<=VARGLOB.ch-2*Game.hg){
                Game.pg_y+=(Game.hf+Game.hw);
                VARGLOB.point-=1;
            }   
        });
        
        Game.animationLoop();

    },
    layout:function (){
        Game.ctx = Menu.ctx;                //czy to dobre rozwiazanie??
        Game.hw = 3;          //wysokosc sciany (height wall)
        Game.hf = 22;          //wysokosc pietra(height floor)
        Game.wg =  20;         //szerokosc gracza
        Game.hg = 20;          //wysokosc gracza
        Game.pg_x = VARGLOB.cw/2-Game.wg/2;           //pozycja gracza x
        Game.pg_y = VARGLOB.ch-Game.hg;         //pozycja gracza y
        Game.ve = 15;           //variable end petli for enemy (enemy = ve-vs)
        Game.vs = 2;           //variable start petli for enemy
        Game.lastTime = 0;
        Game.lastConTime = 0;  //czas pomocniczy aby mierzyc czas w grze
        Game.loop = false;      //zmienna pomocnicza do manipulowaniem nasluchiwacza requestAnimationFrame (uzywana w fun drawEnemy)
        Game.t = true;          //j.w
        Game.prawo = $("#prawo");
        Game.lewo = $("#lewo");
        Game.gora = $("#gora");
        Game.dol = $("#dol");
        
    },
    animationLoop:function(time){
        if(!Game.loop)                                  
            requestAnimationFrame(Game.animationLoop);
        else{ 
            Game.t = false;                         //potrzebne aby tylko raz wywolac w funkcji pausa nasluchiwacz
            Game.pauseGame();                       //wlaczenie od nowa gry z pausa
        }
        
        if(time-Game.lastConTime>=1000/VARGLOB.fpsT){         //warunek aktualizujacy czas w grze
            VARGLOB.counterTime +=1;
            Game.lastConTime = time;
            Game.drawTime();
        }
        
        if(time-Game.lastTime>=1000/VARGLOB.fpsG){
            Game.ctx.clearRect(0,0,VARGLOB.cw,VARGLOB.ch);
            Game.draw_wall();
            Game.draw_gamer();
            Game.drawPoints();
            Game.drawTime();
            Game.drawLvl();
    
            for(let i=Game.vs;i<Game.ve;i++){
                Game.enemy[i].draw();
            }
            
            Game.colision();
            Game.lastTime = time;
        }
    },
    draw_wall:function (){
        Game.ctx.fillStyle = 'black';
        Game.ctx.fillRect(0,Game.hf,VARGLOB.cw,Game.hw);
        for(let i =2;i<16;i++)
        {
          Game.ctx.fillRect(0,(Game.hf*i)+Game.hw*(i-1),VARGLOB.cw,Game.hw);
        }
    },
    draw_gamer:function (){
        Game.ctx.fillStyle = 'black';
        Game.ctx.fillRect(Game.pg_x,Game.pg_y,Game.wg,Game.hg);
    },
    move_gamer:function (event){
         if(event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40 || event.keyCode == 37){
             event.preventDefault();
             if(event.keyCode == 37){
                 if(Game.pg_x>=5){               //przesuwanie gracza w lewo wraz z ograniczeniem na szerokosc
                    Game.pg_x-=5; 
                 }
                   
             }else if(event.keyCode == 39){
                 if(Game.pg_x<=(VARGLOB.cw-Game.wg-5)){ //przesuwanie gracza w prawo wraz z ograniczeniem na szerokosc
                     Game.pg_x+=5;
                 }
                   
             }else if(event.keyCode == 38){    //przesuwanie gracza w gore wraz z ograniczeniem wysokosci
                 if(Game.pg_y>=2*Game.hf+Game.hw+2){
                     Game.pg_y-=(Game.hf+Game.hw);
                     VARGLOB.point+=1;
                     if(VARGLOB.point%14 == 0){  //dotarcie na sam szczyt
                        VARGLOB.lvl+=1;
                        Game.init();
                        }  
                     }
             }else if(event.keyCode == 40){    //przesuwanie gracza w dol wraz z ograniczeniem ziemi
                 if(Game.pg_y<=VARGLOB.ch-2*Game.hg){
                     Game.pg_y+=(Game.hf+Game.hw);
                     VARGLOB.point-=1;
                 }
             }
         }
    },
    colision:function (){               //funckja kolizji wroga z graczem
       // console.log(VAR.point);
        for(let i=Game.vs;i<Game.ve;i++){
            if(Game.pg_y==Game.enemy[i].pos_y){ //sprawdzenie pietra
                if(Game.pg_x>(Game.enemy[i].pos_x + Game.enemy[i].lenght)
                        || (Game.pg_x+Game.wg)<Game.enemy[i].pos_x){ //sprawdzenie czy pozycja gracza nie koliduje z pozycja wroga po x(
                                                                    //przed i za graczem)
                    if(!(Game.enemy[i].draw_tail==true && Game.pg_x<Game.enemy[i].lenght_tail)){
                        Game.enemy[i].color = 'grey';
                    }

                }else Game.enemy[i].color = 'red'; 
            }
        }
    },
    drawPoints:function (){
        Game.ctx.font= '12px serif';
        Game.ctx.fillText('Points:'+VARGLOB.point,180,20);
    },
    drawTime:function (){
        Game.ctx.font= '12px serif';
        Game.ctx.fillText('Time:'+VARGLOB.counterTime,0,20);
    },
    drawLvl:function (){
        Game.ctx.font= '12px serif';
        Game.ctx.fillText('LVL:'+VARGLOB.lvl,100,20);
    },
    pauseGame:function (time){
    if(!Game.t)
        requestAnimationFrame(Game.pauseGame);
    if(time-Game.lastTime>=2000 && time-Game.lastTime<=3000){
        console.log(time-Game.lastTime);
       // Game.t = true;                //?? czy to potrzebne?
        //VARGLOB.point = 0;            //przy Game.init() nie zresetuje sie automatycznie
       // VARGLOB.counterTime = 0;
        //VARGLOB.lvl = 1;
        Game.lastTime = time;
        Game.layout();
        //Menu.menuGo();              //po 2 sek pausy wywoluje od zera gre
        Wynik.showScore();
        }  
    }
   
};

