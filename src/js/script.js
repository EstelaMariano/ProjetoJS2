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

