$("document").ready(
    function (){
        $("img").each(
            function(i){
                $(this).addClass("widoki");
            }
        );
        $("#obiektyImg div").each(
            function(i){
                $(this).addClass("kontenerImg");
            }
        );

        for(let i=0;i<6;i++){
           // alert("#"+i);
            $("#"+i+" h6").css("visibility","hidden");
        }

        $(".widoki").css("opacity","0.7");
        let obiekt;
        let tresc;
        $("div").click(
            function (){
                if(obiekt == $(this).attr("id")){
                    $("#"+obiekt+" h6").css("visibility","hidden");
                    $(tresc).animate({
                     height: '120px',
                     opacity: 0.8
                 },1000,function (){
                     $(tresc+" h6").animate({
                         width: '50px',
                     },500);
                    
                 });
                }else{
                    $(tresc+" h6").css("visibility","hidden");
                    $(tresc).animate({
                     height: '120px',
                     opacity: 0.8
                 },1000,function (){
                     $(tresc+" h6").animate({
                         width: '50px',
                     },500);
                     
                 });
                 
                 obiekt = $(this).attr("id");
                 tresc = "#"+obiekt;
                $(tresc).animate({
                     height: '140px',
                     opacity: 1
                  
                 },1000,function (){
////                     for(let i=0;i<100;i++){
////                         console.log(i);
////                         $(tresc).toggle("bounce", { times: 3 }, "slow");
////                        $(tresc).animate({
////                           width:'150px'
////                        },1000,function (){
////                             $(tresc).animate({
////                                 width: '140px'
////                             },200);
////                        });
//                    }
                     $(tresc+" h6").animate({
                         width: '140px'
                     },500);
                     $(tresc+" h6").css("visibility","visible");
                 });
                
                
                }
   
            }        
        );
    }
    
);