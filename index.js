console.clear()
const express = require('express')
const app = express()

//settings
app.set('port', 3000)

//middleware

app.use(express.json())


//routes
app.get('/', (req,res)=>{
    console.log('hello')
})
app.get('/:name'),(req, res)=>{
    res.send(`hola ${req.params.name} here we go`)
}
app.listen(app.get('port'))