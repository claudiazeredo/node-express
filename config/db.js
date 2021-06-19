var mysql = require('mysql');

var con = function(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'q1w2e3',
        database:'curso_node'
    });
};

module.exports = con;
