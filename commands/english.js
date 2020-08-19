const request = require('request');
var arrNumber = new Array(); //배열선언

var rand;
  module.exports = {
	name: 'english',
	description: 'Ping!',
	execute(message, args, Discord) {


        rand =  Math.floor(Math.random() * (10)) + 1;
        
      message.reply('님에 대한 응답' + rand)    
    }
    }
  
