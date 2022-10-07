const http = require('http');


// const todos = [
//     { id: 1, text: 'Todo One' },
//     { id: 2, text: 'Todo Two' },
//     { id: 3, text: 'Todo Three' }
// ]

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'X-Power-By': 'NODE.js'
    });

    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });
    
    const data = JSON.stringify({
        succes: true,
        err: 'Not Found',
        data: null
    })
    res.end(data);
});

const  port  =  5000 ;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});