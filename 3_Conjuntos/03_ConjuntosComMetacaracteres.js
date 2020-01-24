const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]/g)); // não é necessário escape dentro do conjunto
console.log(texto.match(/[$-?]/g)); // isso é um intervalor (range) válido

// NÃO é um intervalo
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// pode precisar de escape dentro do conjunto: - [ ] ^