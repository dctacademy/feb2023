const express = require('express')
const app = express() 
const port = 3099

app.get('/api/projects', (req, res) => {
    const projects = ['project 1', 'project 2', 'project 3']
    res.json(projects) 
})

app.listen(port, () => {
    console.log('running on port', port)
})