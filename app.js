const express = require('express')
const axios = require('axios')
const app = express()

const PORT = process.env.PORT || 3000


app.get('/api', async (req,res,next) => {

    const { data } = await axios('https://covidtracking.com/api/v1/states/daily.json')

    res.send(data)
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})