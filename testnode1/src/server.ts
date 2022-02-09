//let http = require("http");
import * as http from "http";
import * as fs from "fs";
import cluster from "cluster";

class TestServer {
    constructor() {
        this.server = http.createServer();
    }
    
    

    private server;
}

let server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    //res.end('<h1>Yaho!</h1>')
    fs.readFile('./tools/index.html',(err, data)=>{
        console.log('bring page.')
        res.end(data);
    })
}).listen(8080, () => {
    server.on('request', (msg)=>{
        console.log('request on');
    });
    
    server.on('connection', (msg)=>{
        console.log('connection on');
    });
    
    server.on('close', (msg)=>{
        console.error('close on');
    })

    fs.readdir('./logs', { encoding:'utf-8', withFileTypes:true }, (err, files)=> {
        files.forEach(element => {
            console.info(element);
        });
    });

    
});

