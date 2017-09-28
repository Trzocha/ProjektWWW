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
            $("#"+i+" p").css("visibility","hidden");
        }

        $(".widoki").css("opacity","0.7");
        let obiekt;
        let tresc;
        $("div").click(
            function (){
                if(obiekt == $(this).attr("id")){
                    $("#"+obiekt+" p").css("visibility","hidden");
                    $(tresc).animate({
                     height: '120px',
                     opacity: 0.7
                 },1000,function (){
                     $(tresc+" p").animate({
                         width: '50px',
                     },500);
                    
                 });
                }else{
                    $(tresc+" p").css("visibility","hidden");
                    $(tresc).animate({
                     height: '120px',
                     opacity: 0.7
                 },1000,function (){
                     $(tresc+" p").animate({
                         width: '50px',
                     },500);
                     
                 });
                 
                 obiekt = $(this).attr("id");
                 tresc = "#"+obiekt;
                $(tresc).animate({
                     height: '140px',
                     opacity: 1
                 },1000,function (){
                     $(tresc+" p").animate({
                         width: '140px',
                     },500);
                     $(tresc+" p").css("visibility","visible");
                 });
                
                
                }
   
            }        
        );
    }
    
);