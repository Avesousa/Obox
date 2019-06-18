$(document).ready(function(){
    $(window).scroll(function(e){
        var ubi = $(window).scrollTop();
        var most = $(".avMostrar").offset().top;
        var rot = $(".avRotar").offset().top;
        var der = $(".avDer").offset().top;
        var izq = $(".avIzq").offset().top;
        //var top = $(".avTop").offset().top;
        //var bot = $(".avBottom").offset().top;
        console.log("ANIMADOR");
        console.log(ubi);
        if((most-400) <= ubi && (most+400) >= ubi){
            $(".avMostrar").addClass("aparecer");
        }
        else{
            $(".avMostrar").removeClass("aparecer");
        }
        if((rot-400) <= ubi && (rot+400) >= ubi){
            $(".avRotar").addClass("rotar");
        }else{
            $(".avRotar").removeClass("rotar");
        }
        if((der-400) <= ubi && (der+400) >= ubi){
            $(".avDer").addClass("haciaDerecha");
        }else{
            $(".avDer").removeClass("haciaDerecha");
        }
        if((izq-400) <= ubi && (izq+400) >= ubi){
            $(".avIzq").addClass("haciaIzquierda");
        }else{
            $(".avIzq").removeClass("haciaIzquierda");
        }
        //if((top-300) <= ubi && (top+300) >= ubi){
        //    console.log("agrego");
        //    $(".avTop").addClass("haciaArriba");
        ///}else{
        //    console.log("quito");
        //    $(".avTop").removeClass("haciaArriba");
        //}
        //if(ubi >= bot)
         //   $(".avBottom").addClass("haciaAbajo");
    });
})

/*function animar(){
    console.log("entro en animar");
    $(".avMostrar").addClass("aparecer");
    $(".avRotar").addClass("rotar");
    $(".avDer").addClass("haciaDerecha");
    $(".avIzq").addClass("haciaIzquierda");
    $(".avTop").addClass("haciaArriba");
    $(".avBottom").addClass("haciaAbajo");
}*/