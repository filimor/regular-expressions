const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

// Dentro de um conjunto ( ) não são metacaracteres de grupo
console.log(texto.match(/[(abc)]/gi));
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/(abc)/gi));

// Evitar o uso de grupos caso não seja necessário