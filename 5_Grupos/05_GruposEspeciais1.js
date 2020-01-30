const texto = 'João é calmo, mas no trânsito fica nervoso';

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas )/gi));

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)); // o caractere acentuado é considerado borda
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));