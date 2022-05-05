//usando express
const express = require ('express');
//App de express
const app = express();
//Puerto
const port = 3000;
//path inicial, donde respodera a la url del localhost:3000
app.get('/', (req,res) =>{
    res.send ('Hello Word');
})
//respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req,res) =>{
    res.send ("Bienbenidos a launchx")
})
//regresando un objeto
app.get('/explorersInNode', (req,res) =>{
    const explorer = {name:"Edgar", msg: "hello"}
    res.send(explorer)
})
//query params: recibir parametros por la url
//http:localhost:3000
//req.params = {"explorerName":"Edgar"}
app.get('/explorers/:explorerName', (req,res)=>{
    res.send(req.params)
})

// con esto iniciamos esta app
app.listen (port, ()=>{
    console.log(`Example de listen on port ${port}`)
})