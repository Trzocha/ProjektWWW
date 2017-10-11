$("document").ready(
        function (){
//           alert(screen.width);
//           alert(screen.height);
//            $("#opis p").
//            console.log($(".project").html().length);
//            console.log($(".project").html());
   
//   -----------------------------------------------------------
            $("#accessory").css("width","0");         //widzet
            
            $("#wigL").click(
                function() {
                    $("#wigL").css("display","none");
                    $("#accessory").animate({
                       width: 0
                    },1000,function (){
                        $("#clock").css("display","none");
                        $("#wigR").css("display","block");
                    });
                }
            );
            $("#wigR").click(
                function() {
                    $("#wigR").css("display","none");
                    $("#clock").css("display","block")
                    $("#accessory").animate({
                       width: '20%' 
                    },1000,function (){
                        $("#wigL").css("display","block");
                    });
                }
            );
//                                            poczatek zegara
         $("#smallGuide, #bigGuide").addClass("clockMove");       
                let minutes = document.querySelector("#bigGuide");
                let hours = document.querySelector("#smallGuide");
                now = new Date();
                
                let minu = now.getMinutes()*60 ;
                let hour = now.getHours()*3600 ;
                
                let dayWeek = now.getDay();
                let dayMonth = now.getDate();
                let month = now.getMonth();
                let year = now.getFullYear();
                console.log(dayWeek,dayMonth,month,year);
         
                minutes.style.animationDelay = '-'+ minu+'s';
                hours.style.animationDelay = '-'+hour+'s';

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
                       setTimeout(
                            function (){
                               $("#name").removeClass("textDown").addClass("rubber");
                            },3000    
                         );
                        setTimeout(
                            function (){
                               $("#name").removeClass("rubber");
                            },5000    
                         );
                       }); 
                 });
           //     --------------------------------------------------------------           
           
           var position = "descrip" ;
           $("#Menu >li:last-child>a").click(      //animacja wczytywania nowej tresci
                    function (){
                        if(position === "descrip"){        //o mnie
                            showContAfterDescrip();
                        }else if(position === "proj"){
                            showContAfterProjec();
                        }
                         position = "contact";
                    });
           $("#Menu >li:first-child>a").click(
                function (){
                    if(position === "contact")
                            showDescripAfterCont();
                    else if(position === "proj")
                            showDescripAfterProjec();
                    position = "descrip";
                });
          
                $("#Menu > li:eq(1)>a").click(
                    function (){
                       if(position === "descrip")
                            showProjAfterDescrip();
                        else if(position === "contact")
                            showProjAfterCont();
                    position = "proj";
                           
                });
                     
        }
);
function showContAfterDescrip(){
    $("#description p, #description h3").animate({
                                opacity: 0
                            },1000,function (){
                                $("#description").css("display","none");
                                $("#contact").css("display","block");
                                $("#contact h4, #contact p").animate({
                                    opacity:1
                                },500);     
                            });
}
function showDescripAfterCont(){
 $("#contact h4, #contact p").animate({
                         opacity:0
                      },1000,function (){
                          $("#contact").css("display","none");
                           $("#description").css("display","block");
                            $("#description p, #description h3").animate({
                                opacity:1
                            },500);
                      });    
}
function showDescripAfterProjec(){
    $(".project p").animate({
                         opacity:0
                      },1000,function (){
                          $(".project").css("display","none");
                           $("#description").css("display","block");
                            $("#description p, #description h3").animate({
                                opacity:1
                            },500);
                      });   
}
function showProjAfterDescrip(){
      $("#description p, #description h3").addClass("rollOut");
      setTimeout(
        function (){
            $("#description").css("display","none");
            $(".project").css("display","block");
           },2000    
       );
       setTimeout(
        function (){
            $("#description p, #description h3").removeClass("rollOut");
            $(".project p").addClass("rollIn");
           },2000    
       );
       setTimeout(
        function (){
            $(".project p").removeClass("rollIn");
            $(".project p").css("opacity","1");
           },4000    
       );
       
//      $(".project").css("display","block");
//      $(".project p").addClass("rollIn");
//    $("#description p, #description h3").animate({
//                         opacity:0
//                      },1000,function (){
//                          $("#description").css("display","none");
//                           $(".project").css("display","block");
//                            $(".project p").animate({
//                                opacity:1
//                            },500);
//                      });   
}
function showProjAfterCont(){
    $("#contact h4, #contact p").animate({
                         opacity:0
                      },1000,function (){
                          $("#contact").css("display","none");
                           $(".project").css("display","block");
                            $(".project p").animate({
                                opacity:1
                            },500);
                      });   
}
function showContAfterProjec(){
    $(".project p").animate({
                         opacity:0
                      },1000,function (){
                          $(".project").css("display","none");
                           $("#contact").css("display","block");
                            $("#contact h4, #contact p").animate({
                                opacity:1
                            },500);
                      });   
}