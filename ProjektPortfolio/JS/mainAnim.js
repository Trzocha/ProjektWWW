$("document").ready(
        function (){
            $("#dodadki").css("width","0");
            
            $("#wigL").click(
                function() {
                    $("#wigL").css("display","none");
                    $("#dodadki").animate({
                       width: 0
                    },1000,function (){
                        $("#wigR").css("display","block");
                    });
                }
            );
            $("#wigR").click(
                function() {
                    $("#wigR").css("display","none");
                    $("#dodadki").animate({
                       width: '20%' 
                    },1000,function (){
                        $("#wigL").css("display","block");
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
    

