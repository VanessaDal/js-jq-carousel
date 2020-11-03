$(document).ready(function () {


    $(".next").click(nextImg);
  
  
  
  
    //FUNZIONI
    // funzione per l'avanti
    function nextImg() {
      //console.log("hai cliccato su next!!");
  
      var imgAttiva = $("img.active");
  
      imgAttiva.removeClass("active");
  
      // se dove sono è l'ultima img allora
      if (imgAttiva.hasClass("last")){
        //torna alla prima img
        $("img.first").addClass("active");
      } else {// altrimenti
        //fai diventare attiva l'immagine successiva
        imgAttiva.next("img").addClass("active");
      }
  
      // $("img.active").removeClass("active").next("img").addClass("active");
    }
    
    $(".prev").click(prevImg);

    function prevImg(){
    var imgAttiva = $("img.active");
  
      imgAttiva.removeClass("active");
  
      // se dove sono è l'ultima img allora
      if (imgAttiva.hasClass("first")){
        //torna alla prima img
        $("img.last").addClass("active");
      } else {// altrimenti
        //fai diventare attiva l'immagine successiva
        imgAttiva.prev("img").addClass("active");
      }
    }
  });
  