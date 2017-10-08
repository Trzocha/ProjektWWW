$("document").ready(
        function (){
//           alert(screen.width);
//           alert(screen.height);
//            $("#opis p").
//   -----------------------------------------------------------
            $("#accessory").css("width","0");         //widzet
            
            $("#wigL").click(
                function() {
                    $("#wigL").css("display","none");
                    $("#accessory").animate({
                       width: 0
                    },1000,function (){
                        $("#wigR").css("display","block");
                    });
                }
            );
            $("#wigR").click(
                function() {
                    $("#wigR").css("display","none");
                    $("#accessory").animate({
                       width: '20%' 
                    },1000,function (){
                        $("#wigL").css("display","block");
                    });
                }
            );

// -------------------------------------------------------------           
            $("#name,#deepThink").css("opacity","0");    //animacja spadajacego tekstu i pojawiajacego sie buttona
            $("#buttonMainPage a").css("display","none");
            $("#authorImg").animate({
                opacity:0
            },10,function(){
                 $("#authorImg").animate({
                     opacity:1
                 },2000,function (){
                     $("#name").removeAttr("style")
                             .addClass("textDown");
                     setTimeout(
                            function (){
                                $("#deepThink").removeAttr("style")
                             .addClass("textDown");
                            },1000    
                         );
                      setTimeout(
                            function (){
                               $("#buttonMainPage a").slideDown(1500);
                            },2200    
                         );
                       }); 
                 });
           //     --------------------------------------------------------------           
           var kontakt = false;
           $("#Menu >li:last-child>a").click(      //animacja wczytywania nowej tresci
                    function (){
                        if(!kontakt){
//                            alert("klikam");
                            $("#description p, #description h3").animate({
                                opacity: 0
                            },2000,function (){
                                $("#description").css("display","none");
                                $("#contact").css("display","block");
                                $("#contact h4, #contact p").animate({
                                    opacity:1
                                },1500);     
                            });
                            kontakt = true;
                        }
                    });
           $("#Menu >li:first-child>a").click(
                function (){
                   if(kontakt){
//                      alert("Odwracam");
                      $("#contact h4, #contact p").animate({
                         opacity:0
                      },1000,function (){
                          $("#contact").css("display","none");
                           $("#description").css("display","block");
                            $("#description p, #description h3").animate({
                                opacity:1
                            },500);
                      }); 
                      kontakt = false;
                   }   
                });
          
                $("#Menu > li:eq(1)>a").click(
                    function (){
                        alert("Projekt");
                    }    
                    );
        }
);
    

