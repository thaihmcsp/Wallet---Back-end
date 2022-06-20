require('dotenv').config({path: './configs/configs.env'})
const express = require('express')
const cors = require('cors')
const path = require('path')
const { createTable } = require('./models/createTable')
const { startUp } = require('./startup')
require('./startup/googlePassport')

const app = express()

app.use(cors())
// app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/publics', express.static(path.join(__dirname, './publics')))

startUp(app)

app.listen(process.env.PORT, async ()=>{
    await createTable()
    console.log('running on port ' + process.env.PORT);
})