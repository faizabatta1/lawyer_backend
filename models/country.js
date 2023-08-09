const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const CountryModel = mongoose.model('Country', CountrySchema)

module.exports = CountryModel