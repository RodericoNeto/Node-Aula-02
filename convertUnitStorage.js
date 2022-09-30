const byteToMB = bytes =>  bytes / 1024 / 1024

const byteToGB = bytes => bytes / 1024 / 1024 / 1024


// o module.exports permite exportar as funções para que sejam visiveis e reutilizaveis em outro arquivo
module.exports = {byteToMB, byteToGB}