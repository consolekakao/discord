const request = require('request');
  
  module.exports = {
	name: '로또',
	description: 'Ping!',
	execute(message, args, Discord) {

        const url = 'https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=' + args[1];
      request.get({uri:url}, function(error,response,body){

        const json = JSON.parse(body);
        
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(args[1] + '  회차 로또번호')
        .setURL('https://m.dhlottery.co.kr/gameResult.do?method=byWin&drwNo=' + args[1])
        .setThumbnail('https://dhlottery.co.kr/images/layout/logo-header.png')
        .setDescription(json.drwtNo1 +'  '  +json.drwtNo2 +'  '  +json.drwtNo3 +'  '  +json.drwtNo4 +'  '  +json.drwtNo5 +'  '  +json.drwtNo6 +' + '  +json.bnusNo)
        
  
      message.reply('님에 대한 응답' , exampleEmbed) 

      });

    }
  }

        
        /*
        a = content.substring(content.indexOf("ball clr")+13,content.lastIndexOf("ball clr")+20);
        
        a = a.replace(/clr1/g,'');
        a = a.replace(/clr2/g,'');
        a = a.replace(/clr3/g,'');
        a = a.replace(/clr4/g,'');
        a = a.replace(/clr5/g,'');
        a = a.replace(/<span class="ball ">/g,'');
        a = a.replace(/\//g,'');
        a = a.replace(/<span class="plus">+/g,'');
        a = a.replace(/<span>/g,'');
        a = a.replace(/+/g,'');
        a = a.replace(//,'')
       */
  /*
        var regex= /[^0-9]/g
        a = a.replace(regex,'');
      */  
    
  