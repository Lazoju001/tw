const express = require('express');
const router = express.Router();
const path = require('path')

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {  
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets,showForm:true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find(function(o){return o.name == name}) ;
 
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:Id', function (req,res){
var Id=req.params.Id;
var Id_unico= tweetBank.find(function(o){return o.Id == Id}) ; 
res.render( 'index', { tweets: Id_unico }); 
})



//router.get('/stylesheets/style.css' , function(req,res){
//    res.sendFile(path.join(__dirname, "/../public/stylesheets/style.css" ));
//})
module.exports = router;


