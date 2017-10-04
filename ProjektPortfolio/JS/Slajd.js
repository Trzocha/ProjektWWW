$("document").ready(
        function (){
            basis();
            var szer = screen.width;
            var wys = screen.height;
         
            if(szer < 768){
                  animSlajder('120px','140px','70px'); //mobile
                  
              }
             else if(szer < 1024){
                  animSlajder('160px','200px','100px');  //tablet
              }
             else animSlajder('180px','200px','100px');  //laptop
             
             if(szer<wys)
                  slnextToText(szer);   //small leater next to text
             else
                   slOnText(wys/10);   //small leater on text
             
            $(window).resize(
                  function(){
                      szer = screen.width;
                      wys = screen.height;
                      
                      if(szer>=768 && szer < 1024)
                         animSlajder('160px','200px','100px');  //tablet 
                      else if(szer >= 1024 ) animSlajder('180px','200px','100px');  //laptop
                      
                      if(szer<wys)
                        slnextToText(szer);   //small leater next to text
                      else
                        slOnText(wys/10);   //small leater on text
                  }
            );
                
        }
    
);

function basis(){
    $("img").each(
            function(){
                $(this).addClass("widoki");
            }
        );
        $("#obiektyImg div").each(
            function(){
                $(this).addClass("kontenerImg");
            }
        );

        for(let i=0;i<6;i++){
            $("#"+i+" h6").css("visibility","hidden");
        }

        $(".widoki").css("opacity","0.6");
}

function animSlajder(valHeightMin,valHeightMax,blackBelt){
    
         $("#button").css("bottom","5%");
    
        let obiekt;
        let tresc;
        $("div").click(
            function (){
                if(obiekt == $(this).attr("id")){
                    $("#"+obiekt+" h6").css("visibility","hidden");
                    $(tresc).animate({
                     height: valHeightMin,
                     opacity: 0.6
                 },1000,function (){
                     $(tresc+" h6").animate({
                         width: blackBelt
                     },500);
                    
                 });
                }else{
                    $(tresc+" h6").css("visibility","hidden");
                    $(tresc).animate({
                     height: valHeightMin,
                     opacity: 0.6
                 },1000,function (){
                     $(tresc+" h6").animate({
                         width: blackBelt
                     },500);
                     
                 });
                 
                 obiekt = $(this).attr("id");
                 tresc = "#"+obiekt;
                $(tresc).animate({
                     height: valHeightMax,
                     opacity: 1
                  
                 },1000,function (){
                     $(tresc+" h6").animate({
                         width: valHeightMax
                     },500);
                     $(tresc+" h6").css("visibility","visible");
                 });
                
                
                }
   
            }        
        );
}

function slnextToText(windWidth){
    
           $("p").remove("p");
    
          let S = $("<span id=10></span>").text("S");
          let L = $("<span id=11></span>").text("L");
          let A = $("<span id=12></span>").text("A");
          let I = $("<span id=13></span>").text("I");
          let D = $("<span id=14></span>").text("D");
          let E = $("<span id=15></span>").text("E");
          let R = $("<span id=16></span>").text("R");
          $("#Slajder").append(S,L,A,I,D,E,R);
          
          let wielkoscSlajdera = windWidth*0.1;
           $("span").each(
                  function (){
                       $(this).css("left",wielkoscSlajdera);
                       $(this).addClass("moveSlajder");
                       wielkoscSlajdera += $(this).width()+10;  
                  }
          );
//          console.log(wielkoscSlajdera);
          
          moveSlajder(10);        //spadajace litery napisu
          function moveSlajder(i){
              
               $("#Slajder #"+i).removeClass("moveSlajder").addClass("fallText1")
                       .css("color","red");
               

               if(i<17){
                 setTimeout(function (){
                $("#Slajder #"+(i-1)).css("color","white");
                moveSlajder(i=i+1);
          },700);}else {
          setTimeout(function(){
              $("#Slajder #"+(i-1)).css("color","white");
          },700);}
         
      }
}
function slOnText(windHeight){
          
          $("span").remove("span");
    
          let S = $("<p id=10></p>").text("S");
          let L = $("<p id=11></p>").text("L");
          let A = $("<p id=12></p>").text("A");
          let I = $("<p id=13></p>").text("I");
          let D = $("<p id=14></p>").text("D");
          let E = $("<p id=15></p>").text("E");
          let R = $("<p id=16></p>").text("R");
          $("#Slajder").append(S,L,A,I,D,E,R);
          
          $("p").css("height",windHeight);
          $("p").each(
                  function (){
                       $(this).addClass("moveSlajder");     
                  }
          );
  
          moveSlajder(10);        //spadajace litery napisu
          function moveSlajder(i){
              
               $("#Slajder #"+i).removeClass("moveSlajder").addClass("fallText1")
                       .css("color","red");
               

               if(i<17){
                 setTimeout(function (){
                $("#Slajder #"+(i-1)).css("color","white");
                moveSlajder(i=i+1);
          },700);}else {
          setTimeout(function(){
              $("#Slajder #"+(i-1)).css("color","white");
          },700);}
         
      }
}