const express = require('express')
const clueRouter = express.Router()
const Clue = require('../models/clue')

clueRouter.get ("/", (req, res) => {
    Clue.find((err, clues) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(clues)
    })
})

module.exports = clueRouter