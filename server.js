require('dotenv').config()
require('./utils/mongodb_connection')

const express = require('express')
const app = express()
const port = process.env.port || 5000

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')
app.use(
    cors({origin: '*'})
)

app.set('view engine', 'ejs')
app.use(express.static('./public'))

const consultationApi = require('./routes/api/consultation')
app.use('/api',consultationApi)

// const userUi = require('./routes/ui/')
// app.use(userUi)

app.get('/',(req,res) =>{
    return res.status(200).render('index')
})

app.get('*', (req,res) => {
    return res.status(404).render('handlers/404')
})

app.listen(port, () => console.log(`running on port ${port}`))

