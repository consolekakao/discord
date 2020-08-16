const request = require('request');
const { host,user,password,database } = require('../config.json');
  var a,havemoney,battingmoney,access ;
  module.exports = {
	name: '계정잔액',
    description: 'Ping!',
    
	execute(message, args, Discord) {

        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : host,    
          user     : user,           
          password : password,       
          database : database         
        });
       
        connection.connect(); 


        
        

        connection.query('SELECT count(id) as cnt, id, money from toto where id="' + message.author.username + '"', function (error, results, fields) {
               
          if(results[0].cnt == "1"){
          if (error) throw error;
          console.log(results[0].money);
          console.log(results[0].id);
          console.log(results);
        a = results[0].money;
          message.reply('님의 현재 잔액 : '+a + '원') 
      }
      else
      {
        console.log("없는아이디");
        message.reply('(ERROR)) 사유: 존재하지 않는 아이디입니다.')
      }
    
    
    
    });
      
    
connection.end();

    }
  }