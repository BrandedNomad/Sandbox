const express = require('express');

const server = express();
const port = process.env.PORT || 3000;

server.get('/',(req,res)=>{
    res.send('You Won!')
});

server.listen(port,()=>{
    console.log('Port is running on ' + port);
});






