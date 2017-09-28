/**
 * @author Trzocha
 */
$("document").ready(
        function () 
	{
            
            $("img.obrazki_z_kostki3D").each(      //dodanie klasy indentyfikacyjnej dla scian kostki
                  function (i)
                   {
                     $(this).addClass("o"+i);
                   }
                    
             );
     
     
             $("div#butony_ruchu img").each(           //dodanie klasy indentyfikacyjnej dla strzalek ruchu kostka
                  function (i)
                   {
                     $(this).addClass("butt"+i);
                   }
                    
             );
     
//             $("div#butony_animacji img").each(           //dodanie klasy indentyfikacyjnej dla animacji kostki
//                  function (i)
//                   {
//                     $(this).addClass("anim"+i);
//                   }
//                    
//             );
          let prevIMG = "o7";  //zapamietuje wczesniejszy klikniety obraz
          let preprevIMG = "o7"; //zapamietuje przed wczesniejszy obraz
	  $("div.sciana").click(              //klikniecie kostki
	  	function () 
	  	{
                  $("."+preprevIMG).removeClass("zanikajaceObrazki");
                  $("."+prevIMG).removeClass("ruchomeObrazki");
                  $("."+prevIMG).addClass("zanikajaceObrazki");

                  preprevIMG = prevIMG;
                  $("img."+$(this).attr("id")).addClass("ruchomeObrazki");
                  prevIMG = $(this).attr("id");
		 }
	  );
  
  
  
//       var arrayScianKostki = new Array(4);                       projekt
//       for(var i=0;i<4;i++) arrayScianKostki[i] = new Array(4);
//       arrayScianKostki[0][0] = ".bocznaP"; 
//       arrayScianKostki[0][1] = ".tylna"; 
//       arrayScianKostki[0][2] = ".bocznaL";
//       arrayScianKostki[0][3] = ".przednia";
//       arrayScianKostki[1][0] = ".bocznaP";
//       arrayScianKostki[1][1] = ".gorna";  
//       arrayScianKostki[1][2] = ".bocznaL";
//       arrayScianKostki[1][3] = ".dolna";
//       arrayScianKostki[2][0] = ".bocznaP"; 
//       arrayScianKostki[2][1] = ".przednia"; 
//       arrayScianKostki[2][2] = ".bocznaL"; 
//       arrayScianKostki[2][3] = ".tylna"; 
//       arrayScianKostki[3][0] = ".bocznaP"; 
//       arrayScianKostki[3][1] = ".dolna"; 
//       arrayScianKostki[3][2] = ".bocznaL"; 
//       arrayScianKostki[3][3] = ".gorna"; 
//       
//       var arrayRotacjiKostki = new Array(4);
//       for(var i=0;i<4;i++) arrayRotacjiKostki[i] = new Array(4);
//       arrayRotacjiKostki[0][0] = ""; 
//       arrayRotacjiKostki[0][1] = ""; //ok
//       arrayRotacjiKostki[0][2] = "";
//       arrayRotacjiKostki[0][3] = "";
//       arrayRotacjiKostki[1][0] = "";
//       arrayRotacjiKostki[1][1] = ""; //ok 
//       arrayRotacjiKostki[1][2] = "";
//       arrayRotacjiKostki[1][3] = "";
//       arrayRotacjiKostki[2][0] = ""; //ok
//       arrayRotacjiKostki[2][1] = ""; //ok
//       arrayRotacjiKostki[2][2] = ""; //ok
//       arrayRotacjiKostki[2][3] = "obrotX180"; //ok
//       arrayRotacjiKostki[3][0] = ""; 
//       arrayRotacjiKostki[3][1] = ""; //ok
//       arrayRotacjiKostki[3][2] = ""; 
//       arrayRotacjiKostki[3][3] = ""; 
//       
//       var arrayStyleUsun = new Array(2);
             var x=0;
             var y=0;
             var z=0;
             var i=2;
             var j=1;
 
         $("div#butony_ruchu img").click(         //klikanie na strzalki obrotu
                    function ()
                    {
                   $("#kostka3D").removeAttr("class");
                        if($(this).attr("class")=="butt0")       //w prawo
                        {
                            j++;
                            if(j>3) j=0;
                            if((x/90)%2 != 0){
                                z+=90;
                                 $("#kostka3D").css("transform","rotateX("+(x+10)+"deg) rotateY("+(y)+"deg) rotateZ("+(z-10)+"deg)");
                            }else{ 
                               y+=90;
                                $("#kostka3D").css("transform","rotateX("+(x-10)+"deg) rotateY("+(y+10)+"deg) rotateZ("+z+"deg)");
                            }
                             //$("#kostka3D").css("transform","rotateX("+(x-10)+"deg) rotateY("+(y+10)+"deg) rotateZ("+z+"deg)");
                            //$("#kostka3D").addClass(arrayRotacjiKostki[i][j]);
                        }else if($(this).attr("class")=="butt1"){       //w lewo
                            j--;
                            if(j<0) j=3;
                            if((x/90)%2 != 0){
                                z-=90;
                                $("#kostka3D").css("transform","rotateX("+(x+10)+"deg) rotateY("+(y)+"deg) rotateZ("+(z-10)+"deg)");
                            }else{ 
                               y-=90;
                                $("#kostka3D").css("transform","rotateX("+(x-10)+"deg) rotateY("+(y+10)+"deg) rotateZ("+z+"deg)");
                            }
                       
                             $("#kostka3D").css("transform","rotateX("+(x-10)+"deg) rotateY("+(y+10)+"deg) rotateZ("+z+"deg)");
                        }else if($(this).attr("class")=="butt2"){       //dol
                            i++;
                            if(i>3) i=0;
                            x-=90;
                            if((x/90)%2 ==0)
                                $("#kostka3D").css("transform","rotateX("+(x-10)+"deg) rotateY("+(y+10)+"deg) rotateZ("+z+"deg)");
                            else
                                $("#kostka3D").css("transform","rotateX("+(x+10)+"deg) rotateY("+(y)+"deg) rotateZ("+(z-10)+"deg)");  
                            
                            //$("#kostka3D").css("transform","rotateX("+(x)+"deg) rotateY("+(y)+"deg) rotateZ("+(z-10)+"deg)");
                        }else if($(this).attr("class")=="butt3"){       //gora
                            i--;
                            if(i<0) i=3;
                            x+=90;
                            if((x/90)%2 ==0)
                                $("#kostka3D").css("transform","rotateX("+(x-10)+"deg) rotateY("+(y+10)+"deg) rotateZ("+z+"deg)");
                            else
                                $("#kostka3D").css("transform","rotateX("+(x+10)+"deg) rotateY("+(y)+"deg) rotateZ("+(z-10)+"deg)");  
                        }
                     // arrayStyleUsun[0] = i;
                    //  arrayStyleUsun[1] = j;
                    }
         );
 
//       var arrayKostki = new Array(4);
//       for(var i=0;i<4;i++) arrayKostki[i] = new Array(4);
//       arrayKostki[0][0] = "rotateX(90deg)"; //bocznaP
//       arrayKostki[0][1] = "rotateX(180deg)rotateY(0deg) rotateZ(180deg)"; //tylna 
//       arrayKostki[0][2] = "rotateY(180deg)";
//       arrayKostki[0][3] = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
//       arrayKostki[1][0] = "rotateX(270deg) rotateY(270deg) rotateZ(270deg)";
//       arrayKostki[1][1] = "rotateX(270deg)rotateY(0deg) rotateZ(0deg)";  //
//       arrayKostki[1][2] = "rotateX(270deg)rotateY(90deg) rotateZ(90deg)";
//       arrayKostki[1][3] = "rotateX(270deg)rotateY(180deg) rotateZ(180deg)";
//       arrayKostki[2][0] = "rotateX(270deg)rotateY(0deg) rotateZ(0deg)"; //bocznaP 
//       arrayKostki[2][1] = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"; //przednia ok
//       arrayKostki[2][2] = "rotateY(90deg) rotateY(0deg) rotateZ(0deg)";  //bocznaL ok
//       arrayKostki[2][3] = "rotateY(180deg) rotateY(0deg) rotateZ(0deg)"; //tylna ok
//       arrayKostki[3][0] = "rotateX(90deg) rotateY(-270deg) rotateZ(270deg) "; //ok
//       arrayKostki[3][1] = "rotateX(90deg) rotateY(0deg) rotateZ(0deg)"; //ok
//       arrayKostki[3][2] = "rotateX(90deg) rotateY(-90deg) rotateZ(90deg)"; //ok
//       arrayKostki[3][3] = "rotateX(90deg) rotateY(-180deg) rotateZ(180deg)"; //ok
       
//       var arrayKostki = new Array(4);
//       for(var i=0;i<4;i++) arrayKostki[i] = new Array(4);
//       arrayKostki[0][0] = "rotateY(-90deg)"; 
//       arrayKostki[0][1] = "rotateY(180deg)"; 
//       arrayKostki[0][2] = "rotateY(-90deg)";
//       arrayKostki[0][3] = "rotateX(0deg) rotateY(0deg)";
//       arrayKostki[1][0] = "rotateY(-90deg)";
//       arrayKostki[1][1] = "rotateX(90deg)";  
//       arrayKostki[1][2] = "rotateY(-90deg)";
//       arrayKostki[1][3] = "rotateX(-90deg)";
//       arrayKostki[2][0] = "rotateY(-90deg)"; 
//       arrayKostki[2][1] = "rotateX(0deg) rotateY(0deg)"; 
//       arrayKostki[2][2] = "rotateY(-90deg)"; 
//       arrayKostki[2][3] = "rotateY(180deg)"; 
//       arrayKostki[3][0] = "rotateY(-90deg)"; 
//       arrayKostki[3][1] = "rotateX(-90deg)"; 
//       arrayKostki[3][2] = "rotateY(-90deg)"; 
//       arrayKostki[3][3] = "rotateX(90deg)"; 
//       var x=2;
//       var y=1;
//       $("div#butony_ruchu img").click(
//            function (){
//               if($(this).attr("class")=="b0"){
//                y++;
//                if(y>3) y=0;
//                alert(x); alert(y);
//                $("#kostka3D").css("transform",""+arrayKostki[x][y]+""); 
//           
//               }else if($(this).attr("class")=="b1"){
//                   // alert(x); alert(y);
//                y--;
//                if(y<0) y=3; 
//                alert(x); alert(y);
//                
//                $("#kostka3D").css("transform",""+arrayKostki[x][y]+"");
//                
//               }else if($(this).attr("class")=="b2"){
//                    //alert(x); alert(y);
//                x++;
//                if(x>3) x=0;
//                alert(x); alert(y);
//                $("#kostka3D").css("transform",""+arrayKostki[x][y]+"")
//                
//               }else if($(this).attr("class")=="b3"){
//                    //alert(x); alert(y);
//                x--;
//                if(x<0) x=3;
//                alert(x); alert(y);
//                $("#kostka3D").css("transform",""+arrayKostki[x][y]+"")
//                
//               }     
//            }      
//        );
            
//            $("div#butony_animacji img").click(
//                    function (){
//                        if($(this).attr("class")=="anim0")       //play
//                        {
//                       // alert($(this).attr("class")); 
//                         $("#kostka3D").addClass("anim");
//                         $(this).css("opacity","1");
//                        }else if($(this).attr("class")=="anim1")       //stop
//                        {
//                        //alert($(this).attr("class")); 
//                         $("#kostka3D").removeClass("anim");
//                         $(".a0").removeAttr("style");
//                        }
//                    }
//                    
//         );
	}
);
