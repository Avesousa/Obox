var bandera = true;
var bajada = false;
$(document).ready(function(){
    $(window).scroll(function(e){
        var num = $(window).scrollTop();
        console.log(num);
        if(num > 150 && bandera){
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


