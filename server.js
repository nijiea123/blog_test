const http = require('http');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
  const num = _.random(1,10);
  console.log(num);
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests')
});