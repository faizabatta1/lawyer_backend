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

const userApi = require('./routes/api/user')
app.use('/api',userApi)

const userUi = require('./routes/ui/user')
app.use(userUi)

app.get('/',(req,res) =>{
    return res.status(200).render('index')
})

app.get('*', (req,res) => {
    return res.status(404).render('handlers/404',{
        url: req.url,
        statusCode: 404,
        message: "Page Was Not Found"
    })
})

app.listen(port, () => console.log(`running on port ${port}`))

