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

//Routes
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))

//Handle 404
app.get('*', (req,res) =>{
    //res.status(404).send('404 Page Not Found.')
    res.status(404).render('404')
})

app.listen(port, ()=>{
    console.log(`App listening to port ${port}`)
})