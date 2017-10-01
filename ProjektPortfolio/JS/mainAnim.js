$("document").ready(
        function (){
            $("#wigL").click(
                    function (){
                      
                          $("#dodadki").animate({transform: 50},{
                              step:function(now,fx){
//                                  $(this).css("transition-duration","3s");
                                  $(this).css("transform","translateX("+now+"px)");
//                                  $(this).css("transform-duration","5s");
                                  $("#wigL").css("visibility","hidden")
                                      .css("z-index","0");
                                  $("#wigR").css("visibility","visible")
                                      .css("z-index","1");
                              }});
                    }
           ); 

           $("#wigR").click(
                    function(){
                        $("#dodadki").animate({transform: 0},{
                            step:function(now,fx){
//                                $(this).css("transition-duration","3s");
                              $(this).css("transform","translateX("+now+"px)");
                              $("#wigL").css("visibility","visible")
                                      .css("z-index","1");
                              $("#wigR").css("visibility","hidden")
                                      .css("z-index","0");
         
                          
                              }
                        });
                    }
           );

// -------------------------------------------------------------           
            $("#name,#deepThink").css("opacity","0");
            $("#autorImg").animate({
                opacity:0
            },10,function(){
                $("#name, #button").removeAttr("style");
               $("#button").addClass("buttonMove");
                $("#name").addClass("textDown");
                
                
                
                 $("#autorImg").animate({
                     opacity:1
                 },3000,function (){
                     $("#deepThink").removeAttr("style");
                     $("#deepThink").addClass("textDown");
                  
                      $("#button a")
                       .animate({},0,function (){
                           $("#button a").animate({
                               'font-size': '1.2rem'
                           },1000,function (){
                               $("#button a").animate({
                                  'font-size': '0.8rem' 
                               },1000);
                               });
                           });
                       }); 
                 });
           //     --------------------------------------------------------------           
            
        }
);
    

