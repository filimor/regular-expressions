// g - global (quando usada retorna uma matriz com todas as referências,
// quando não usada retorna a primeira ocorrência e seu índice)
// i - ignore case (quando usado ignora a maiúsculas e minúsculas)

const texto = 'Carlos assinou o abaixo-assinado';
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));