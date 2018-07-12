var express = require('express')
var app = express()
const widgets = require('./queries/widgets');
const bodyParser = require('body-parser')
const logger = require('morgan');
const widgetRouter = require('./routers/widgets')
// middleware
app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// Connection established response
app.get("/", (req, res) =>{
    res.send("<h1>Successfully connected</h1><br><p>You were able to successfully connect to the server</p>")
})

// Router for widgets - refactor "api" portion somehow?
app.use("/api/widgets", widgetRouter)

// start
const port = 3001
var server = app.listen(port, ()=>{console.log(`started on port ${port} ya dummy`)})