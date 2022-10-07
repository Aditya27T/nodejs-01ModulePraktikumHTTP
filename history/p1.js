const http = require('http');


const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Power-By', 'NODE.js');
    
    const data = JSON.stringify({
        succes: true,
        err: 'Not Found',
        data: todos
    })
    res.end(data);
//   console.log('request received', req.url);
//   const { headers, method, url } = req;
//   console.log('headers', headers);
//   console.log('method', method);
//   console.log('url', url);
});

const  port  =  5000 ;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});