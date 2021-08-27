$(document).ready(function(){
var row = '<div class="subCon2" id="{{id}}">';
    row+= '<button class="quadradoConteudo">';
    row+= '<img src="{{urlImagem}}" width="200" height="200" alt="#">';
    row+= '<p class="nomeProduto"> {{nomeproduto}} </p>';
    row+= '<p class="precoAlto">De {{precooriginal}}</p>';
    row+= '<p>Por apenas:</p>';
    row+= '<p class="preco">{{precodesconto}}</p>';
    row+= '</button>';
    row+= '</div>';


});