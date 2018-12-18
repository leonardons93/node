const port = 3030;
const express = require('express')
const app = express()

app.get('/produtos', (req , res , next) =>{
    res.send({nome:'notebook', valor:123.45}) // convert para JSON

})
app.listen(port, () => {
    console.log(`servido ok ${port}`)
}
)