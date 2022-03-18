const http=require('http');

const server=http.createServer((req,res)=>{
   // console.log(res)
   if(req.url==='/'){
       res.end('Welcome to our home page')
   }
   if(req.url==='/about'){
    res.end('Welcome to our about page')
   }
   
 

})

server.listen(8000)