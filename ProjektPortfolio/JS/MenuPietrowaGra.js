/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function (){
    Menu.init();
};

//Zmienne gobalne
VARGLOB = {
    fpsG:30,    //variable helper for frequency couse animation
    fpsT:1,     //variable helper for measure Time on play
    fpsM:7,     //variable helper for frequency couse menu
    cw:0,
    ch:0,
    point:0,   // counter point in game
    counterTime:0,  //czas mierzony w grze
    lvl : 1,
    rand:function (min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
};

Menu = {
    init:function (){
        Menu.canvas = document.createElement('canvas');
        Menu.ctx = Menu.canvas.getContext('2d');
        document.body.appendChild(Menu.canvas);
        Menu.gora = $("#gora");
        Menu.dol = $("#dol");
        Menu.enter = $("#enter");
        
        Menu.menuGo();
        
    },
    menuGo:function (){
        Menu.layout();   //ustawienia
        
        window.addEventListener('keydown',Menu.move,false);
        
         Menu.dol.click(
                function (){
                    if(Menu.positionImg[0].pos_y<250)
                        Menu.positionImg[0].pos_y+=100;
                     console.log(Menu.positionImg[0].pos_y);
        });
        Menu.gora.click(
           function (){
               if(Menu.positionImg[0].pos_y>50)
                    Menu.positionImg[0].pos_y-=100;
               console.log(Menu.positionImg[0].pos_y);
           }
        );

        Menu.enter.click(
                function (){Menu.loop = true;});
        
        Menu.animationLoop();
    },
    layout:function (){
        VARGLOB.cw = Menu.canvas.width = 250;
        VARGLOB.ch =Menu.canvas.height = 397;
        //Menu.fps = 7;           // czestotliwosc wywolywnia animacji Menu
        Menu.min_pos_y = 250;   //ograniczenie pozycji ruchu strzalki od dolu
        Menu.max_pos_y = 50;    //ograniczenie pozycji ruchu strzalki od gory
        Menu.loop = false;
        Menu.lastTime = 0;
//                            //obsluga przycisków na mobile
//        Menu.goraB = true;
//        Menu.dolB = true;
        
        Menu.positionImg=[{pos_x:10,pos_y:50},{pos_x:120,pos_y:50},{pos_x:120,pos_y:150},{pos_x:120,pos_y:250}]; //startowa posycja wklejania obrazkow
        Menu.img = [];
        for(let i=0;i<4;i++){
            Menu.img[i] = new Image();
            Menu.img[i].onload = function (){
                 Menu.ctx.drawImage(Menu.img[i],Menu.positionImg[i].pos_x,Menu.positionImg[i].pos_y);
            };
            Menu.img[i].src = '../img/Menu'+i+'.jpg';
        }
    },
    move:function (event){                  //funkcja ruchu strzałki i funkcjonalnosc
        //console.log(event.keyCode);
        if(event.keyCode == 38 ||event.keyCode == 40 ||event.keyCode == 13){
            event.preventDefault();
            if(event.keyCode == 38){
                if(Menu.positionImg[0].pos_y>Menu.max_pos_y)   //ograniczenie ruchu strzalki
                     Menu.positionImg[0].pos_y-=100;
            }else if(event.keyCode == 40){
                if(Menu.positionImg[0].pos_y<Menu.min_pos_y)  //ograniczenie ruchu strzalki
                    Menu.positionImg[0].pos_y+=100;
            }else if(event.keyCode == 13){
                if(Menu.positionImg[0].pos_y == 50){      //Informajce o grze
                    //pusto
                }else if(Menu.positionImg[0].pos_y == 150){  //Graj
                    Menu.loop = true;
                }else if(Menu.positionImg[0].pos_y == 250){ //Wyniki
                    //pusto
                }
            }
        }
    },
    animationLoop:function (time){
        if(!Menu.loop)              //warunek na zaczecie gry za pomoca Enter
            requestAnimationFrame(Menu.animationLoop);  //nasluchiwacz, wywoluje sie po auto odswiezaniu strony
        else Game.init();
        
        
        
//        Menu.dol.mousedown(
//                function (){
//                    if(Menu.dolB){
//                     Menu.positionImg[0].pos_y+=100;
//                     console.log(Menu.positionImg[0].pos_y);
//                     Menu.dolB = false;
//                    }    
//                });
//        Menu.dol.mouseup(
//            function(){
//                 Menu.dolB = true;   
//            }
//        );
        
        if(time-Menu.lastTime>=1000/VARGLOB.fpsM){
           // console.log(time-Menu.lastTime);
            Menu.ctx.clearRect(0,0,Menu.canvas.width,Menu.canvas.height);
            for(let i=0;i<4;i++){
                  Menu.ctx.drawImage(Menu.img[i],Menu.positionImg[i].pos_x,Menu.positionImg[i].pos_y);
            }
            Menu.lastTime = time;    //zmienna pomocnicza z pliku PietrowaGra.js
        }    
    }
};

Wynik = {
    showScore:function (){
        Menu.ctx.clearRect(0,0,Menu.canvas.width,Menu.canvas.height);
        
        Menu.ctx.font= '12px serif';
        Menu.ctx.fillText('Twoj Wynik:'+VARGLOB.point,100,20);
        Menu.ctx.fillText('Twoj czas:'+VARGLOB.counterTime,100,40);
    }
};