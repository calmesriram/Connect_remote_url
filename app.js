var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var Request = require("request");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

app.get('/',function(req,res){  
  res.write('connected');
  res.end();
   })

app.get("/api",function(req,res){
    Request.get("https://ip3zfz8atjg7.runkit.sh/",(err,result) => { 
        if(err)
         {
           console.log(err)
           res.end();
         }
        if(result){
              console.log(result.body)
              res.write(result.body)
              res.end();
         }
    });    
})



var port = process.env.PORT || 3000
app.listen(port)
console.log(port,"connected port")

// Reference LInk
// 1. // https://code-maven.com/http-client-request-in-nodejs
// 2. https://www.thepolyglotdeveloper.com/2017/10/consume-remote-api-data-nodejs-application/