const porta = 3003

const express = require('express')
const app = express()

app.get("/produtos", (req,res,next)=>{
    res.send({nome:"note",preco:123})
})

app.listen(porta,()=>{
    console.log(`server na porta${porta}`)
})