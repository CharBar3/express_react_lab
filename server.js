// Import Dependencies 
const express = require('express')
const cors = require('cors')

// Import JSON files 
const projects = require("./data/projects.json")
const about = require("./data/about.json")

// Create our app object
const app = express()

// set up midleware
app.use(cors())
require('dotenv').config()

// home route for testing app
app.get('/', (req, res) => {
    res.send("Home Page")
})

// route for retrieving projects
app.get('/projects', (req, res) => {
    res.json(projects)
})

app.get('/about', (req, res) => {
    res.json(about)
})

const PORT = process.env.PORT

// Listen on PORT

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))