var clienteController = require('../controllers/clienteController');
const { body, validationResult } = require('express-validator');

module.exports = function(app){
  app.get('/', function(req,res){
    clienteController.index(req,res);
  });

  app.get('/contato', function(req,res){
  	res.render('site/contato');
  });

  app.post('/',function(req,res){
      clienteController.store(req,res);
  });

  app.get('/detalhe/:id', function(req,res){
    console.log(req.params.id);
    clienteController.show(req,res);
  });

}
