const express = require('express')
const app = express()
const PORT = 4000

const justice = require('./Models/justice')

app.set('view engine', 'ejs')

app.get('/justice-league', (req,res)=> {
    const context = {justice}
    res.render('index', context)
})

app.get('/justice-league/:id', (req, res)=>{
    const context = {just: justice[req.params.id], id: req.params.id};
    res.render('show.ejs', context)
})

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})