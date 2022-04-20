const express = require('express')
const app = express()
const PORT = 4000

const justice = require('./Models/justice')

const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/justice-league', (req,res)=> {
    const context = {justice}
    res.render('index', context)
})

app.get('/justice-league/new', (req, res)=>{
    res.render('new.ejs')
})

app.get('/justice-league/:id', (req, res)=>{
    const context = {just: justice[req.params.id], id: req.params.id};
    res.render('show.ejs', context)
})

app.post('/justice-league', (req, res)=>{
    justice.push(req.body)
    res.redirect('/justice-league')
})

app.delete('/justice-league/:id', (req, res) => {
    justice.splice(req.params.id, 1)
    // possibly variable justice
    res.redirect('/justice-league')
})

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})