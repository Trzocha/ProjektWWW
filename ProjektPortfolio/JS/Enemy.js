/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Enemy(gameLVL){
    this.speed = 0;
    this.lenght = 0;
    this.pos_x = VARGLOB.rand(50,150);    //pozycja wroga po x
    this.pos_y = 0;    //pozycja wroga po y
    this.eh = Game.hg;   //wysokosc wroga taka jak garcza
    this.color = 'grey'; //kolor wroga
    this.lenght_tail=0;     //dlugosc przerysowanego ogona
    this.draw_tail = false;  //sprawdzenie czy wywolywana jest funkcja przerysowania
    this.direction = 0  // false - right , true - left (rand(0,1)??
    this.enemyLVL(gameLVL);
}
Enemy.prototype.draw = function (){
   // console.log('enemy');
    Game.ctx.fillStyle = this.color;
    Game.ctx.fillRect(this.pos_x,this.pos_y,this.lenght,this.eh);
    
    if(this.color == 'red'){   //symulowanie pausy Gry i Liczonego czasu{
        Game.loop = true;
        
    }
 
    if(this.direction == false){
        this.pos_x+=this.speed;
        this.redrawR();
    }else{
        this.pos_x-=this.speed;
        this.redrawL();
    }
};

Enemy.prototype.redrawR = function (){
    //console.log('enemyR');
    if(this.pos_x>=VARGLOB.cw-this.lenght && this.pos_x<VARGLOB.cw){    //warunek na przerysowywanie ogona w prawo
        this.lenght_tail = this.pos_x+this.lenght-VARGLOB.cw;
        this.draw_tail = true;
        draw_tail(0,this.pos_y,this.lenght_tail);
    }else if(this.pos_x>=VARGLOB.cw){                           //warunek gdy cały enemy juz bedzie przerysowany na druga strone
        this.pos_x=0;
        this.draw_tail=false;
    }
};

Enemy.prototype.redrawL = function (){                      
    if(this.pos_x<0 && -this.pos_x<=this.lenght){           //warunek na przerysowywanie ogona w lewo
        this.lenght_tail = -this.pos_x;
        this.draw_tail = true;
        draw_tail(VARGLOB.cw-this.lenght_tail,this.pos_y,this.lenght_tail);
    }else if(-this.pos_x>=this.lenght){
        this.pos_x = VARGLOB.cw - this.lenght;
        this.draw_tail = false;
    } 
};
Enemy.prototype.enemyLVL = function (gameLVL){            //funkcja konfigurujacy poziom trudnosci w grze
    let speedE = 1+gameLVL*0.25;
    let speedM = 1;
    if(gameLVL == 3)
        speedM = 2;
    else if(gameLVL == 4)
         speedM = 3;
    
    this.speed = VARGLOB.rand(speedM,speedE);
    
    let lenE = 115+5*gameLVL;
    if(lenE>=210) lenE=210;
    
    this.lenght = VARGLOB.rand(20+20*gameLVL,lenE);
    this.direction = VARGLOB.rand(0,1);  // false - right , true - left (rand(0,1)??
};

function draw_tail(posx,posy,elenght){        //funkcja przerysowywujaca ogon
    Game.ctx.fillRect(posx,posy,elenght,Game.hg);
};



