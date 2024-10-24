const express= require('express')
const app=express()

require('dotnv').config()
const PORT=process.env.PORT||8000

app.get('/user/:id',(req,res)=>{
res.send({
   
})

})








app.listen(PORT,()=>console.log(`Running at:http://127.0.0.1:${PORT}`))