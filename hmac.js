// Node.js program to demonstrate the     
// crypto.createHmac() method

// Defining myfile
const myfile = process.argv[1];

// Includes crypto and fs module
const crypto = require('crypto');
const fs = require('fs');

// Creating Hmac 
const creathmac = crypto.createHmac('sha1', 'CS-Portal!');

// Creating read stream
const readfile = fs.createReadStream(myfile);

readfile.on('readable', () => {

    // Calling read method to read data
    const data = readfile.read();
    if (data) {

        // Updating
        creathmac.update(data);
    } else {
        // Encoding and displaying filename
        console.log("The hmac object returns:", 
        `${creathmac.digest('hex')} ${myfile}`);
    }
});

console.log("Program done!");
console.log();
