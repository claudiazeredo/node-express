var clienteModel = require('../models/clienteModel')();
const { body, validationResult } = require('express-validator');

module.exports.index = function(req, res){
  clienteModel.all(function(erro, resultado){
      res.render('site/home',{clientes:resultado, erro:''});
  });
};

module.exports.store = function(req, res){
  var dados = req.body;
  req.param(['nome','Nome vazio']).isEmpty();

  body('nome').isEmpty();

// req.body('nome').notEmpty();
//  req.body('email').isEmail();

  // username must be an email
//  check('nome').notEmpty();
  // password must be at least 5 chars long
//  check('email').notEmpty();
//  check('email').isEmail();

  //var errosValidacao = validationResult().validationErrors();
/*
  if(errosValidacao){
    console.log(errosValidacao);
  }
  */

  clienteModel.save(dados,function(erro, resultado){
        if(!erro){
          res.redirect('/');
        }else{
          console.log("Erro ao adicionar o cliente");
          res.redirect('/');
        }
  });
};

module.exports.show = function(req, res){
  clienteModel.find(req.params.id,function(erro, resultado){
    if(resultado[0] && !erro){
      res.render('site/detalhe',{cliente:resultado[0]});
    }else if(erro) {
      //tratamento do erro
    } else {
      console.log('Esse cliente não existe...');
      //res.render('site/detalhe',{cliente:'', erro: erro});
      res.redirect('/');
    }

  });
};
