const express = require('express')
const app = express()
const PORT = 4000

const justice = require('./Models/justice')

app.set('view engine', 'ejs')

app.get('/justice-league', (req,res)=> {
    const context = {justice}
    res.render('index', context)
})

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})