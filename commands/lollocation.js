const request = require('request');
  var a,b;
//https://www.op.gg/champion/statistics
var regex= /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
module.exports = {
	name: '로테이션',
	description: 'Ping!',
	execute(message, args, Discord) {
const url = 'http://fow.kr/';
      request.get({uri:url}, function(error,response,body){
 
 a = body.substring(body.indexOf("<DIV class='news_box'"),body.lastIndexOf("현재 진행중인 챔피언 및 스킨 세일"));

a = a.replace(regex,'');
a = a.replace(/\n/g,'');
a = a.replace(/\s+/g,' ');
a = a.replace(/\s/g,'\n');
 console.log(a);     
b = body.substring(body.indexOf("금주의 로테이션 챔피언"),body.indexOf("<DIV class='news_box'")-8);
const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#146eff')
        .setTitle(b)
            .setDescription(a)
      message.reply('님에 대한 응답' , exampleEmbed) 


console.log(b);  
})

    }}