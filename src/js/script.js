// LIMPEZA

const email = "     email@email.com    "; // Declaração variável 
const emailLimpo = email.trim(); // Método para tirar todos os espaços no começo e final

console.log(email)
console.log(emailLimpo)

// VALIDAÇÃO
if(emailLimpo.includes("@")){ // Verificar se tem @
    console.log("Email válido")
}else{
    console.log("Email inválido")
}

//  TRANFORMAÇÃO DE TEXTOS

// método upper e lower case
const tituloArtigo = "Como aprender JAVA RAIZ";
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)
const texto2 = tituloArtigo.toUpperCase();
console.log(texto2)

// Array - cada palavra vira um elemento array
const texto3 = tituloArtigo.split(" "); // Split - Sem espaço separa letra por letra, com espaço separa palavras
console.log(texto3)

// Join - junta tudo em uma unica string
const texto4 = texto3.join(" ") // O que está entre as aspas fica entre os elementos do array
console.log(texto4)

// Método toFixed - definir números depois da virgula 
const precoProduto = 199.99;
const desconto= 0.15 //15%

const precoFinal = precoProduto * (1-desconto);
console.log(precoFinal)
console.log(`R$ ${precoFinal.toFixed(2)}`) // ``- template strings - concatenação


// Dom (Document Object Model)
const titulo = document.getElementById("titulo")

titulo.innerText = "O DOM mudou o Texto!";

titulo.style.color="blue";

/* CRIANDO O APP */
const produtos = [
    {nome: "Teclado Mecânico", preco: 300, emPromocao: true},
    {nome: "Mouse Gamer", preco: 150, emPromocao: false},
    {nome: "Monitor Gamer", preco: 1300, emPromocao: true},
    {nome: "Pad Mouse XL", preco: 400, emPromocao: false},
];

/*MAP - transforma o array de objetos em um array de strings html e css*/
 const container = document.getElementById("listar-produtos");
 const mostrarTotal = document.getElementById("resultado-total");

function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos = lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço: R$${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>':''}
        </div>
        `).join('');//tranforma o array em uma unica string

        container.innerHTML = htmlProdutos;
};

// FILTER - cria uma nova lista apenas com o que escolheu (está em promoção)
function filtrarPromocoes(){
    const promocionais = produtos.filter(item => item.emPromocao)
    todosProdutos(promocionais)
};

//REDUCE - Reduz o array a um único valor (soma dos preços)
function calcularTotal(){
    const total = produtos.reduce((acumulador, item) => {
        return acumulador + item.preco;
    }, 0)
    mostrarTotal.innerText= `Valor total R$ ${total}`
};