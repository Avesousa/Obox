function abrirMenu(){
    $("nav").css("display","inline-block");
        $(".btn-menu").css("display","none");
        $("nav").addClass("haciaDer");
        $("nav").addClass("avDerT");
       if($(window).width() >= 768) $("body").css("overflow","hidden");
}
function cerrarMenu(){
    $(".btn-menu").css("display","inline-block");
    $("body").css("overflow","auto");
    $("nav").removeClass("haciaDer");
    $("nav").removeClass("avDerT");
    $("nav").addClass("haciaDerSalir");
    //$("nav").css("transform","translateX(-20px)");
    setTimeout(function(){
        $("nav").css("display","none");
        $("nav").removeClass("haciaDerSalir");
    },500);
}

function cambiarVista(s,b){
    $("#publicidad").css("display","inline-block");
    $("nav").css("box-shadow","0px 5px 5px 0px rgba(0,0,0,0.34)");
    $("nav").css("background-color","rgba(0,0,0,0.3)");
    if(b)$(window).scrollTop(s);
    console.log("true");
    bandera = false;
}

function cambiarVistaPresentacion(){
    console.log("else");
    $("#publicidad").slideToggle(50);
    $("nav").css("box-shadow","none");
    $("nav").css("background-color","");
    $("#sos").css("height","1200px");
    bandera = true;
    $(window).scrollTop(0);
}