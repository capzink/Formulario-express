console.clear()
const express =require('express')
const bodyParser =require('body-parser')
const app = express()

//middleware
const logger=(rew, res, next)=>{
    console.log('por aca paso')
    next()
}
app.use(logger)
//ponemos statis para que no moleste con el archivo principal
//la ruta de entrada seria localhost:3000/static
app.use('/static',express.static('public'))
app.use(bodyParser(express.urlencoded({ extended: true })))
app.use(bodyParser.json())
//******************** 

//settings

app.set('port', 3000)
//creacion pug
app.set('view engine', 'pug')
app.set('views', 'views')
//*********************** 
//routing

app.get('/', (req, res)=>{
    //res.render('index', {name ,age})
    const notes =['n1','n2','n3']
    res.render('index', {notes})

})

//rutas del formulario
app.get('/notes/new', (req, res)=>{
    res.render('new')
   
})
app.post('/notes', (req,res)=>{
    console.log(req.body)
    res.redirect('/')

})


   
  app.get('/users/:name', (req, res)=>{
    const name=req.params.name
    res.render('index', {name})

})


//******************** 
//errors

app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).send('algo salio mal')
})

//listen

app.listen(app.set('port'), ()=>{
    console.log('listenging on port')
}
 )