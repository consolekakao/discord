const request = require('request');
  
  module.exports = {
	name: 'naver',
	description: 'Ping!',
	execute(message, args, Discord) {

        const url = 'https://apis.naver.com/mobile_main/srchrank/srchrank?frm=main&ag=20s&gr=3&ma=-1&si=-1&en=-1&sp=-1';
      request.get({uri:url}, function(error,response,body){

        const json = JSON.parse(body);
        
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('실시간 검색어')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: '1', value: json.data[0].keyword },
            { name: '2', value: json.data[1].keyword },
            { name: '3', value: json.data[2].keyword },
            { name: '4', value: json.data[3].keyword },
            { name: '5', value: json.data[4].keyword },
            { name: '6', value: json.data[5].keyword },
            { name: '7', value: json.data[6].keyword },
            { name: '8', value: json.data[7].keyword },
            { name: '9', value: json.data[8].keyword },
            { name: '10', value: json.data[9].keyword }
        )
      .setTimestamp()
  
      message.reply('님에 대한 응답' , exampleEmbed) 

      });

    }
  }
