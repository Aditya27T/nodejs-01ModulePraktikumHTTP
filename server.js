const http = require('http');


const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }
]

const server = http.createServer((req, res) => {
    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        
        let status = 200;
        const response = {
            succes: true,
            result: [],
            status: status,
            err: null
        }
        if(req.url === '/todos') {
            if (req.method === 'GET') {
                response.result = todos;
            } else if (req.method === 'POST') {
                const { id, text } = JSON.parse(body);
                if (!id || !text) {
                    status = 400;
                    response.succes = false;
                    response.err = 'Please add id and text';
                } else {
                    todos.push({ id, text });
                    response.result = todos;
                }
            }
        }
        res.writeHead(status, {
            'Content-Type': 'application/json',
            'X-Power-By': 'NODE.js'
        });
        res.end(JSON.stringify(response));
    });
});

const  port  =  5000 ;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});