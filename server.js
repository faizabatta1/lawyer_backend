require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port || 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')
app.use(
    cors({origin: '*'})
)

app.set('view engine', 'ejs')


app.get('/',(req,res) =>{
    return res.status(200).render('index')
})

app.get('*', (req,res) => {

})

app.listen(port, () => console.log(`running on port ${port}`))