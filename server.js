const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/cluedb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: false,
        useUnifiedTopology: true
    
    }, () => console.log("Connected to MongoDB" ))

    app.use("/clue", require("./routes/ClueRouter"))
    app.use("/character", require("./routes/CharacterRouter"))
    app.use("/weapon", require("./routes/WeaponRouter"))

    app.listen(7000, () => {
        console.log('server is running')
    })