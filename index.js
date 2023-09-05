const express = require('express')
const app = express() 
const port = 3099

app.get('/api/projects', (req, res) => {
    const projects = ['project 1', 'project 2', 'project 3']
    res.json(projects) 
})

app.get('/api/projects/total', (req, res) => {
    res.json({ total: 5})
})

app.post('/api/projects',(req,res)=>{
    res.json({projects:'projects created'})
})

app.get('/api/list/users', (req, res) => {
    res.json({users : 'listing users'})
})

app.post('/api/create/users',(req,res) =>{
    res.json({users : 'creating the users'})
})


app.listen(port, () => {
    console.log('running on port', port)
})