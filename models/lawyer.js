const mongoose = require('mongoose')

const LawyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    country:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    }
})

const LawyerModel = mongoose.model('Lawyer',LawyerSchema)

module.exports = LawyerModel