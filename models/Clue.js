const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clueSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: String,
    character: String
})


module.exports = mongoose.model("Clue", clueSchema)