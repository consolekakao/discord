module.exports = { 
	name: '배율',
	description: 'Ping!',
	execute(message, args, Discord) {
       
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#f52cd3')
        .setTitle('파워볼게임의 배율은 아래와 같습니다.')
        .addFields(
        { name: '0개', value: '0 배', inline: true },
        { name: '1개', value: '0 배', inline: true },
        { name: '2개', value: '0.3 배', inline: true },
        { name: '3개', value: '2 배', inline: true },
        { name: '4개', value: '6 배', inline: true },
        { name: '5개', value: '30 배', inline: true },
        )
        .setFooter('배율은 수시로 변경될 수 있습니다..');
      message.reply('님에 대한 응답' , exampleEmbed)    
    }
    }
