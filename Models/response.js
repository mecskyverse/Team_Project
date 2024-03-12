const mongoose = require('mongoose')

const responseSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.Mixed,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    feedback : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        default : 0
    }
}, { timestamps : true})

const Response = mongoose.model("Response",responseSchema)

module.exports = Response