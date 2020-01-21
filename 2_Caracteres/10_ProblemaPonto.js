const texto = 'Bom\ndia';
console.log(texto.match(/./gi));
console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi));

// dotall: quando o ponto engloba todos os caracteres, incluindo o \n
// o que não é o caso do JavaScript. Algumas linguagens possuem a flag
// /s.