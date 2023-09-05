const express = require('express')
const app = express() 
const port = 3099

app.listen(port, () => {
    console.log('running on port', port)
})