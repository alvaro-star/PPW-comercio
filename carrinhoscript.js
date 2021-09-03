function removercompras(){
    localStorage.removeItem("compras");
}

$(document).ready(function(){

var esvaziar = $("#esvaziar").on("click", removercompras);

});