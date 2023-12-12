// var x_offset = 20;
// function updatePosition( e ){
// 	var italist = document.getElementById("italist_photo");
//         italist.style.top = e.y - italist.clientHeight/5 + "px" ;
//         italist.style.left = e.x - italist.clientWidth + x_offset + "px" ;

//     var dossier = document.getElementById("dossier_photo");
//         dossier.style.top = e.y - dossier.clientHeight/5 + "px" ;
//         dossier.style.left = e.x - dossier.clientWidth + x_offset + "px" ;

//     var labatie = document.getElementById("labatie_photo");
//         labatie.style.top = e.y - labatie.clientHeight/5 + "px" ;
//         labatie.style.left = e.x - labatie.clientWidth + x_offset + "px" ;

//     var summit = document.getElementById("summit_photo");
//         summit.style.top = e.y - summit.clientHeight/5 + "px" ;
//         summit.style.left = e.x - summit.clientWidth + x_offset + "px" ;
// };

// document.onmousemove = updatePosition;

// ____________________

var x_offset = 20;
function updatePosition( e ){
	var italist = document.getElementById("italist_photo");
        italist.style.top = e.y + "px" ;
        italist.style.left = e.x + "px" ;

    var dossier = document.getElementById("dossier_photo");
        dossier.style.top = e.y + "px" ;
        dossier.style.left = e.x + "px" ;

    var labatie = document.getElementById("labatie_photo");
        labatie.style.top = e.y + "px" ;
        labatie.style.left = e.x + "px" ;

    var summit = document.getElementById("summit_photo");
        summit.style.top = e.y + "px" ;
        summit.style.left = e.x + "px" ;
};

document.onmousemove = updatePosition;



