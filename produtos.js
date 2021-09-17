
const baseProdutos = [
    {
        id: "001",
        urlImagem: "https://t-static.dafiti.com.br/uWGE8i-d34ztRPaWOXDMk4zCnG0=/fit-in/430x623/static.dafiti.com.br/p/sv-sapatos-social-masculino-em-couro-6541-9348985-1-zoom.jpg",
        nomeproduto: "Sapato de Couro Social",
        precooriginal: 191.99,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "002",
        urlImagem: "https://img.elo7.com.br/product/zoom/207AF8F/camisa-dia-dos-pais-melhor-pai-da-galaxia-melhor-pai-do-mundo.jpg",
        nomeproduto: "Camiseta com estampa",
        precooriginal: 40.98,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "003",
        urlImagem: "https://img.elo7.com.br/product/zoom/2E16790/baby-look-personalizada-o-pequeno-principe-baby-look.jpg",
        nomeproduto: "Camiseta com estampa",
        precooriginal: 41.98,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "004",
        urlImagem: "https://thumbs.dreamstime.com/b/belo-e-sexy-elegance-pele-de-mulher-do-que-corpo-modelo-moda-glamour-pose-desgaste-roupa-casual-festa-beige-camisa-longa-ver%C3%A3o-193206799.jpg",
        nomeproduto: "Camisa-saia",
        precooriginal: 73.69,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "005",
        urlImagem: "https://moda.lunender.com/calcas/calca-moletom-sem-felpa-mescla-medio-67402-003268-still-l1.jpg",
        nomeproduto: "Calça Moletom",
        precooriginal: 159.99,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "006",
        urlImagem: "https://img.clasf.com.br/2019/08/16/touca-toca-gorro-pompom-4sold-feminino-inverno-20190816172553.4659330015.jpg",
        nomeproduto: "Touca",
        precooriginal: 38.79,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "007",
        urlImagem: "https://a-static.mlcdn.com.br/618x463/casaco-transpassado-la-feminino-bege-escuro-m-alex/confeccoesalexltda/31111e58ca8111ea9a1b4201ac18501e/48c6a7c7128f0f2a8dd358c86223639d.jpg",
        nomeproduto: "Moletom Feminino",
        precooriginal: 127.99,
        taxadesconto: 0.6,
        precoD: 0
    },
    {
        id: "008",
        urlImagem: "https://www.calitta.com/17626-thickbox_default/casaco-de-frio-masculino-listrado-manga-longa-elegante-moda-inverno.jpg",
        nomeproduto: "Moletom Masculino",
        precooriginal: 115.98,
        taxadesconto: 0.6,
        precoD: 0
    }
    
];

function precoDesconto(produto){
    return produto.precooriginal * (1 - produto.taxadesconto)
}

const preco = baseProdutos.map(precoDesconto(baseProdutos))
baseProdutos.precoD = preco
console.log(baseProdutos.precoD)