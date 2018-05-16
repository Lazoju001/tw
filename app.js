var express = require('express');
var app = express();
var nunjucks = require("nunjucks")
const routes = require('./routes');
app.use('/', routes);
var fs=require("fs");
const serve   = require('express-static');

// en algunos archivo que este en el directorio raíz de nuestra aplicación... por ejemplo app.js
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(function (req, res, next) {
    // haz tu logueo aquí
    console.log("ingresaste al use")
    // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    next();
})

app.use('/is-anybody-in-there', function (req, res, next) {
    // haz tu logueo aquí
    console.log("Haz llegado a un area especial")
    // llama a `next`, o sino tu app va a ser un agujero negro - recibiendo pedidos pero nunca respondiendo adecuadamente.
    next();
})

app.use(serve(__dirname + '/public'));

//app.get('/', function (req, res) {
//     console.log(locals.people)
//   res.render('index',{title: "Hall of Fame", people: locals.people });
// });



// app.get('/is-anybody-in-there', function (req, res) {
//     res.send('GET request to is anybody');
//   });

//   app.post('/modernism', function (req, res) {
//     res.send('POST request to homepage');
//   });




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});