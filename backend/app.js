 const express = require('express')
 const app = express();
 PORT=3000

 app.get('/',(req,res)=>{
     console.log(req.body)
    res.send('testing')
 })

 app.listen(PORT,()=>{
     console.log('started')
 })