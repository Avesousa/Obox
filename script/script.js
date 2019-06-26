$(document).ready(function(){
    $(".btn-movil").click(function(){
        abrirMenu();
        cambiarVistaPresentacion();
    });

    $(".cerrar").click(function(){
        cerrarMenu();
    });

    $(window).scroll(function(e){
        var num = $(window).scrollTop();
        var vari;
        var s = 1000;
        
        if($(window).width() >= 768){
            vari = 150;
        } else{
            vari = 80;
        }
        console.log(num);
        console.log(vari);
        console.log(bandera);
        console.log(!bandera && num < 620 )
        if(num > vari && bandera) cambiarVista(s,true);
        else if(!bandera && num < 620 )cambiarVistaPresentacion();
    });
}); 

function abrirLink(id){
    if($(window).width() <= 768){
        cerrarMenu();
    }
    cambiarVista();
    window.location.hash = id;
}


