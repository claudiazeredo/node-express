module.exports = function(){
  var express = require('express');
  var bodyParser = require('body-parser');
  //const { body } = require('express-validator');
  //var expressValidator = require('express-validator');
  //const { body, validationResult } = require('express-validator');

  var app = express();

  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true   }));

  //app.use({ body });

  //app.use(body);

  var rotas = require('../app/routes/web');

  rotas(app);

  app.listen(8000, function(){
  	var date = new Date();
  	console.log('It works!!! ' + date.getHours() +':'+ date.getMinutes() );
  	console.log("localhost:8000");
  });
};
