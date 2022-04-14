const express = require('express');
const app = express();
const mainRouter = require('./routes/index')

app.use(express.json())
app.use(mainRouter)
app.listen(8081, 'localhost', () => {
    console.log('Server running at http://127.0.0.1:8081/');
})