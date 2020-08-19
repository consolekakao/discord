const request = require('request');
var arrNumber = new Array(); //배열선언

var rand;
  module.exports = {
	name: '어디서만날까',
	description: 'Ping!',
	execute(message, args, Discord) {

        var i;
        for(i=1;i<=args.length;i++) arrNumber[i] = args[i];

        rand =  Math.floor(Math.random() * (args.length -1)) + 1;
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0ee639')
        .setTitle('만날 장소는  '+arrNumber[rand]+' 입니다.')
      message.reply('님에 대한 응답' , exampleEmbed)    
    }
    }
  
