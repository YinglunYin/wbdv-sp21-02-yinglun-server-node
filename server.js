const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/question-controller')(app)
require('./controllers/quizzes-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user123:user123@cluster0.ajbuj.mongodb.net/cs5610?retryWrites=true&w=majority",
                 {useNewUrlParser: true ,useUnifiedTopology: true});


app.listen(PORT);