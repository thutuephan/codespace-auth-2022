require("dotenv").config()
const express = require('express')

const app = express()

// Declare a dummy route
app.get("/", (req, res) => {
    res.send("<h1>Server is working? Testing Testing!!!</h1>")
})



module.exports = app