// var x_offset = 20;
function updatePosition( e ){
	var italist = document.getElementById("italist_img");
        italist.style.top = e.y + "px" ;
        italist.style.left = e.x + "px" ;

    var dossier = document.getElementById("dossier_img");
        dossier.style.top = e.y + "px" ;
        dossier.style.left = e.x + "px" ;

    var labatie = document.getElementById("labatie_img");
        labatie.style.top = e.y + "px" ;
        labatie.style.left = e.x + "px" ;

    // var summit = document.getElementById("summit_img");
    //     summit.style.top = e.y + "px" ;
    //     summit.style.left = e.x + "px" ;
    
    // var rain = document.getElementById("rain_img");
    //     rain.style.top = e.y + "px" ;
    //     rain.style.left = e.x + "px" ;
};

document.onmousemove = updatePosition;