
var express = require('express');
var exphbs = require('express-handlebars')
var path = require('path')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }));

app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'))

var jars = [
    {
        name: 'Necessity account',
        value: 55
    },
    {
        name: 'Financial freedom account',
        value: 10
    },
    {
        name: 'Education account',
        value: 10
    },
    {
        name: 'Long-term saving for spending account',
        value: 10
    },
    {
        name: 'Play account',
        value: 10
    },
    {
        name: 'Give Account',
        value: 10
    },
];

app.get('/', function (req, res) {
    res.render('home', {
        content: 'some contents',
        jars: jars,
        javhd: javhd,
        hometown: hometown
    })
});

app.listen(app.get('port'), function () {
    console.log('Express server start on PORT 3000')
})