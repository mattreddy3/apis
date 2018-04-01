var express = require('express')
var app = express()
const widgets = require('./queries/widgets');
const bodyParser = require('body-parser')
const logger = require('morgan');

// middleware
app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// calls
app.get("/", (req, res) =>{
    res.send("<b>'LOL'</b>")
})
app.post('/api/widgets', widgets.create)
app.get('/api/widgets', widgets.retrieve)
app.get('/api/widgets/:id', widgets.retrieve)
app.put('/api/widgets/:id', widgets.update)
app.delete('/api/widgets/:id', widgets.remove);

// start
const port = 3001
var server = app.listen(port, ()=>{console.log(`started on port ${port} ya dummy`)})