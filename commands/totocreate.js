const request = require('request');
  var a,havemoney,battingmoney ;
  module.exports = {
	name: '계정생성',
    description: 'Ping!',
    
	execute(message, args, Discord) {

        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : '183.111.199.157',    
          user     : 'alpacao',           
          password : 'alpaca16',       
          database : 'alpacao'         
        });
        
        connection.connect();
        connection.query('SELECT count(id) as cnt from toto where id="' + message.author.username + '"', function (error, results, fields) {
        if(results[0].cnt == 0)
        {



        connection.query('insert into toto values("'+message.author.username + '",100000)', function (error, results, fields) {
          if (error) throw error;
          message.reply('님의 계정 생성완료. 잔액:: 100,000원') 

        
        });
      }
      else{ message.reply('이미 계정이 존재합니다.')}
connection.end();
    }
        )}}