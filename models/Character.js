const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    gender: String,
    age: String,
    description: String,
    imgUrl: String
})

module.exports = mongoose.model("Character", characterSchema)