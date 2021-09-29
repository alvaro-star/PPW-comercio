
var templateItemCarrinho = "<div class = 'img'><img class='imagem' src='{{urlImagem}}' width='88' height='88' alt='#'>";
templateItemCarrinho += "<p class='nomeProduto'>{{nomeproduto}}</p>";
templateItemCarrinho += "<p class='preco'>R$ {{precoD}}</p>";
templateItemCarrinho += "<button class='btnRemover'>Remover</button>";
templateItemCarrinho += "</div>";

function removercompra(){
    localStorage.clear("carrinho");
}

$(document).ready(function(){

    $('#esvaziar').on("click", removercompra);

    var rowProdutos = $("#containerCarrinho > .row");
    var carrinho = localStorage.getItem("carrinho");
    
    if(carrinho == null){
        rowProdutos.html("<div class='produto col-12'>Carrinho vazio <a href='index.html'>Vamos às compras?!</a></div>");
    }else{
        vetorCarrinho = JSON.parse(carrinho);

        for(let i = 0; i < vetorCarrinho.length; i++){
            for(let j = 0; j < baseProdutos.length; j++){
                if(vetorCarrinho[i].id == baseProdutos[j].id){
                    let itemCarrinho = templateItemCarrinho.
                    replace("{{urlImagem}}", baseProdutos[j].urlImagem).
                    replace("{{precodesconto}}", baseProdutos[j].precodesconto).
                    replace("{{nomeproduto}}", baseProdutos[j].nomeproduto).
                    replace("{{precoD}}",baseProdutos[j].precoD);
                    rowProdutos.append(itemCarrinho);
                }
            }
        }
    }
});