const fs = require('fs');
const http = require('http');
const mammoth = require('mammoth');
const PORT = 3500;

const app = http.createServer((req, res) => {
    fs.readFile('resume.docx', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Error reading file: ' + err.message);
            return res.end();
        }

        mammoth.convertToHtml({ buffer: data })
            .then(result => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(result.value); // The generated HTML
                res.end();
            })
            .catch(err => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error converting file: ' + err.message);
                res.end();
            });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});