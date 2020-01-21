// No início, enconding de Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Depois, enconding de Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode: Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 Milhãode caracteres
// Atualmente tem mais de 100.000 caracteres atribuídos

// https://unicode-table.com/pt/

const texto = 'aʬc௵d';
console.log(texto.match(/\u02AC|\u0BF5/));
console.log(texto.match(/\u02AC|\u0BF5/g));