const con = require('./models/taskModel')

const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require("body-parser");

const app = express();


app.use(express.static('public'));

// app.engine('hbs', hbs({
//     layoutsDir: __dirname + '/views/layouts',
//     defaultLayout: 'main',
//     extname: '.hbs'
// }));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('index', {
        items: []
    });
});


app.post('/', (req, res) => {

    console.log(req.body)
    res.redirect('/')
})

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});