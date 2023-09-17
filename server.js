
const express = require('express')
const app = express()
const port = 3000
 



// Home Page 
app.get('/', (re, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1>' +  '<h2> <br> <a href="/98">take one down, pass it around</a> </h2>')
})

 app.get('/:number_of_bottles', (req, res) => {
    const number_of_bottles = req.params.number_of_bottles
    if(number_of_bottles <= 0 ){
        res.send('<h1><a href="/98">start over<a/></h1>')

    } else if(number_of_bottles == 1){
        res.send(`<h1>${number_of_bottles} Bottle of beer on the wall</h1>` + `<h2> <br> <a href="/${number_of_bottles-1}">Take one down, pass it around</a> </h2>`)

    }else if(number_of_bottles > 1){
        let i = number_of_bottles
          res.send(`<h2>${i} Bottles of beer on the wall</h2>` +  `<h2><br> <a href="/${i-1}">Take one down, pass it around</a></h2>`)  

    }else{
        res.send(`<h2>You can not have ${number_of_bottles} bottles please to begin click <br><br> <a href="/98">START OVER<a/> </h2>`)
    }
 })

app.listen(port, function() {
    console.log('Listening on port', port)
   })