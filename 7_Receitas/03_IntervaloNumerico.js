const texto = '0 1 10 292 199 201 255 256 312 1010 1512';

// números entre 0-255
console.log(texto.match(/\b([0-1][0-9][0-9]|2[0-5][0-5]|\d{1,2})\b/g));
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g));