$(document).ready(function () {


    $(".next").click(nextImg);
  
  
  
  
    //FUNZIONI
    // funzione per l'avanti
    function nextImg() {
      //console.log("hai cliccato su next!!");
  
      var imgAttiva = $("img.active");
      var dotAttivo = $("i.active");
  
      imgAttiva.removeClass("active");
      dotAttivo.removeClass("active");
  
      // se dove sono è l'ultima img allora
      if (imgAttiva.hasClass("last") && dotAttivo.hasClass("last")){
        //torna alla prima img
        $("img.first").addClass("active");
        $("i.first").addClass("active");

      } else {// altrimenti
        //fai diventare attiva l'immagine successiva
        imgAttiva.next("img").addClass("active");
        dotAttivo.next("i").addClass("active");
      }
  
      // $("img.active").removeClass("active").next("img").addClass("active");
    }
    
    $(".prev").click(prevImg);
    

    function prevImg(){
    var imgAttiva = $("img.active");
    var dotAttivo = $("i.active");
  
      imgAttiva.removeClass("active");
      dotAttivo.removeClass("active");
      
  
      // se dove sono è la prima img allora
      if (imgAttiva.hasClass("first") && dotAttivo.hasClass("first")){
        //torna alla prima img
        $("img.last").addClass("active");
        $("i.last").addClass("active");
      } else {// altrimenti
        //fai diventare attiva l'immagine successiva
        imgAttiva.prev("img").addClass("active");
        dotAttivo.prev("i").addClass("active");
      }
    }
  });
  