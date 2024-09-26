var CryptoJS = require("crypto-js");

// Encrypt
var msg = "hello world";
var ciphertext = CryptoJS.AES.encrypt(msg, 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(ciphertext)
console.log(originalText);