import * as express from 'express';
import * as fs from 'fs';

let app = express();
let configData: object = JSON.parse(fs.readFileSync('./conf/setting.config',{encoding: 'utf-8'}));


app.use((request, response)=>{
    // response.writeHead(200,'success 200.',{'Content-Type':'text/html'});
    // response.end('<h1>hello express</h1>');

    response.status(200).send({
        result: 'success',
        msg: 'success'
    })
});

app.listen(configData['service']['port'], ()=>{
    console.log('server  running at');
});