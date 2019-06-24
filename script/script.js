var bandera = true;
var bajada = false;
$(document).ready(function(){
    $(".btn-movil").click(function(){
        $("nav").css("display","inline-block");
        $(".btn-menu").css("display","none");
        $("nav").addClass("haciaDer");
        $("nav").addClass("avDerT");
    });

    $(".cerrar").click(function(){
        $(".btn-menu").css("display","inline-block");
        $("nav").removeClass("haciaDer");
        $("nav").removeClass("avDerT");
        $("nav").addClass("haciaDerSalir");
        //$("nav").css("transform","translateX(-20px)");
        setTimeout(function(){
            $("nav").css("display","none");
            $("nav").removeClass("haciaDerSalir");
        },2000);
    });

    $(window).scroll(function(e){
        var num = $(window).scrollTop();
        var vari;
        if($(window).width() >= 768){
            vari = 150;
        } else{
            vari = 80;
        }
        if(num > vari && bandera){
            //animar();
            $("#publicidad").css("display","inline-block");
            $("nav").css("box-shadow","0px 5px 5px 0px rgba(0,0,0,0.34)");
            $("nav").css("background-color","rgba(0,0,0,0.3)");
            $(window).scrollTop(1000);
            bandera = false;
        }else if(!bandera && num < 620 ){
            $("#publicidad").slideToggle(50);
            $("nav").css("box-shadow","none");
            $("nav").css("background-color","");
            $("#sos").css("height","1200px");
            bandera = true;
            $(window).scrollTop(0);
        }
    });
}); 


