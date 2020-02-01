const fs = require('fs');

const read = nomeArquivo => fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: 'utf8' });

const write = (nomeArquivo, conteudo) => {
    const dirName = `${__dirname}/alterados`
    if(!fs.existsSync(dirName)){
        fs.mkdirSync(dirName)
    }
    fs.writeFileSync(`${dirName}/${nomeArquivo}`, conteudo, { encoding: 'utf8' });
}

module.exports = { read, write }