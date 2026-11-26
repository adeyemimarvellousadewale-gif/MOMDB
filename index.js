const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const dbUrl = process.env.DBURI
const port = process.env.PORT

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("db connected")
    })
    .catch((err) => {
        console.log("failed to connect", err)
    })

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})