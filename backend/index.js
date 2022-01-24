require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const apiUrl = process.env.API_URL
const apiKey = process.env.API_KEY
var qs = require('qs')
const axios = require('axios')

app.get('/', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    let query = request.query
    query.appid = apiKey
    let queryString = qs.stringify(query)
    axios(`${ apiUrl }?${ queryString }`).then(res => {
        response.send(res.data)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})