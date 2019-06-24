$(document).ready(function(){
    $(window).scroll(function(e){
        var ubi = $(window).scrollTop();
        var most = $(".avMostrar").offset().top;
        var rot = $(".avRotar").offset().top;
        var der = $(".avDer").offset().top;
        var izq = $(".avIzq").offset().top;
        var mostD = $(".avMostrarD").offset().top;
       // var mostE = $(".avMostrarE").offset().top;
        var rotD = $(".avRotarD").offset().top;
       // var rotE = $(".avRotarE").offset().top;
        var derD = $(".avDerD").offset().top;
       // var derE = $(".avDerE").offset().top;
        var izqD = $(".avIzqD").offset().top;
       // var izqE = $(".avIzqE").offset().top;
        var mayor = 600;
        var menor = 400;
        //var top = $(".avTop").offset().top;
        //var bot = $(".avBottom").offset().top;
        console.log(ubi);
        if((most-menor) <= ubi && (most+mayor) >= ubi){
            $(".avMostrar").addClass("aparecer");
            $(".avMostrar").addClass("avMostrarT");
        }
        else{
            $(".avMostrar").removeClass("aparecer");
            $(".avMostrar").removeClass("avMostrarT");
        }
        if((rot-menor) <= ubi && (rot+mayor) >= ubi){
            $(".avRotar").addClass("rotar");
            $(".avRotar").addClass("avRotarT");
        }else{
            $(".avRotar").removeClass("rotar");
            $(".avRotar").removeClass("avRotarT");
        }
        if((der-menor) <= ubi && (der+mayor) >= ubi){
            $(".avDer").addClass("haciaDerecha");
            $(".avDer").addClass("avDerT");
        }else{
            $(".avDer").removeClass("haciaDerecha");
            $(".avDer").removeClass("avDerT");
        }
        if((izq-menor) <= ubi && (izq+mayor) >= ubi){
            $(".avIzq").addClass("haciaIzquierda");
            $(".avIzq").addClass("avIzqT");
        }else{
            $(".avIzq").removeClass("haciaIzquierda");
            $(".avIzq").removeClass("avIzqT");
        }
        if((mostD-menor) <= ubi && (mostD+mayor) >= ubi){
            $(".avMostrarD").addClass("aparecer");
            $(".avMostrarD").addClass("avMostrarT");
        }else{
            $(".avMostrarD").removeClass("aparecer");
            $(".avMostrarD").removeClass("avMostrarT");
        }
        ///if((mostE-menor) <= ubi && (mostE+mayor) >= ubi){
        //    $(".avMostrarE").addClass("aparecer");
        //    $(".avMostrarE").addClass("avMostrarT");
        //}else{
        //    $(".avMostrarE").removeClass("aparecer");
        //    $(".avMostrarE").removeClass("avMostrarT");
        //}
        if((rotD-menor) <= ubi && (rotD+mayor) >= ubi){
            $(".avRotarD").addClass("rotar");
            $(".avRotarD").addClass("avRotarT");
        }else{
            $(".avRotarD").removeClass("rotar");
            $(".avRotarD").removeClass("avRotarT");
        }
        //if((rotE-menor) <= ubi && (rotE+mayor) >= ubi){
        //    $(".avRotarE").addClass("rotar");
        //    $(".avRotarE").addClass("avRotarT");
        //}else{
        //    $(".avRotarE").removeClass("rotar");
        //    $(".avRotarE").removeClass("avRotarT");
        //}
        if((derD-menor) <= ubi && (derD+mayor) >= ubi){
            $(".avDerD").addClass("haciaDerecha");
            $(".avDerD").addClass("avDerT");
        }else{
            $(".avDerD").removeClass("haciaDerecha");
            $(".avDerD").removeClass("avDerT");
        }
        //if((derE-menor) <= ubi && (derE+mayor) >= ubi){
        //    $(".avDerE").addClass("haciaDerecha");
        //    $(".avDerE").addClass("avDerT");
        //}else{
        //    $(".avDerE").removeClass("haciaDerecha");
        //    $(".avDerE").removeClass("avDerT");
        //}
        if((izqD-menor) <= ubi && (izqD+mayor) >= ubi){
            $(".avIzqD").addClass("haciaIzquierda");
            $(".avIzqD").addClass("avIzqT");
        }else{
            $(".avIzqD").removeClass("haciaIzquierda");
            $(".avIzqD").removeClass("avIzqT");
        }
        //if((izqE-menor) <= ubi && (izqE+mayor) >= ubi){
        //    $(".avIzqE").addClass("haciaIzquierda");
        //    $(".avIzqE").addClass("avIzqT");
        //}else{
        //    $(".avIzqE").removeClass("haciaIzquierda");
        //    $(".avIzqE").removeClass("avIzqT");
        //}
    });
})
