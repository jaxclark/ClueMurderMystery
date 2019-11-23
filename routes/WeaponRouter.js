const express = require('express')
const weaponRouter = express.Router()
const Weapon = require('../models/weapon')


weaponRouter.get ("/", (req, res) => {
    Weapon.find((err, weapons) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(weapons)
    })
})




module.exports = weaponRouter