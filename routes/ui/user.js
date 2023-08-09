const express = require('express')
const router = express.Router()


router.get('/users', async (req,res) =>{
    return res.status(200).send('<h1>Users Page</h1>')
})

module.exports = router;