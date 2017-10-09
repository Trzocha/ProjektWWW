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
    $("#description p, #description h3").animate({
                         opacity:0
                      },1000,function (){
                          $("#description").css("display","none");
                           $(".project").css("display","block");
                            $(".project p").animate({
                                opacity:1
                            },500);
                      });   
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