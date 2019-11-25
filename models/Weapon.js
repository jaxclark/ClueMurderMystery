const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weaponSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: String,
    imgUrl: String
})


module.exports = mongoose.model("Weapon", weaponSchema)