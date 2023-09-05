require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()
const port = 5000 || process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//for Static files
app.use(express.static('public'))

//templating engine
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

app.get('/', (req,res) =>{
    const locals = {
        title : 'Notes App',
        description : 'Simple Notes App'
    }
    res.render('index',locals)
})

app.listen(port, ()=>{
    console.log(`App listening to port ${port}`)
})