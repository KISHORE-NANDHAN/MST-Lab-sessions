const http = require('http');
const crypt = require('./cipher.js');
const PORT = 3500;

const x = http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var message = "hello world";
    var encrypt = crypt.encrypt(message);
    res.write(`<h1>the ${message} after encrypted in ${encrypt.encryptedData}<br/>`);
    res.write(`the decrypted message is ${crypt.decrypt(encrypt.encryptedData,encrypt.iv)}</h1>`)
    res.write(`the hashed message is ${crypt.hmac(message)}</h1>`)
})
x.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
})