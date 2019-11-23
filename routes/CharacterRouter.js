const express = require('express')
const characterRouter = express.Router()
const Character = require('../models/Character')


characterRouter.get("/", (req, res) => {
    Character.find((err, characters) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(characters)
    })
})

module.exports = characterRouter