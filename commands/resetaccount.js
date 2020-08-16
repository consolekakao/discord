

const request = require('request');
const { host,user,password,database } = require('../config.json');
var a, havemoney, battingmoney, access,tmp;
module.exports = {
    name: '계정초기화',
    description: 'Ping!',

    execute(message, args, Discord) {

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        connection.connect();


        connection.query('SELECT count(id) as cnt from toto where id="' + message.author.username + '"', function (error, results, fields) {
            if(results[0].cnt == 1)
            {
            connection.query('update toto set money=100000 where id="'+message.author.username+'"', function (error, results, fields) {
              if (error) throw error;
              message.reply('님의 계정 초기화 완료. 잔액:: 100,000원') 
    
            
            });
          }
        else {
            console.log("없는아이디");
            message.reply('(ERROR)) 사유: 존재하지 않는 아이디입니다.')
        }

        connection.end();

    }
        )}

}