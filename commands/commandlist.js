
  module.exports = {
	name: '명령어',
	description: 'Ping!',
	execute(message, args, Discord) {

    
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('명령어목록')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: '!명령어목록', value: '명령어 목록을 불러옵니다.' },
            { name: '!로테이션', value: '금주 LOL 로테이션을 표시 합니다.' },
            { name: '!로또 해당회차', value: '해당 회차 로또번호를 표시 합니다.' },
            { name: '!계정생성', value: '토토계정을 생성합니다.' },
            { name: '!계정잔액', value: '토토계정의 잔액을 표시 합니다.' },
            { name: '!계정초기화', value: '토토계정의 잔액을 초기화 합니다.' },
            { name: '!홀짝 [홀/짝] 배팅금액', value: '해당 금액만큼 홀짝 도박을 진행합니다.' },
            { name: '!파워볼 N1 N2 N3 N4 N5 배팅금액', value: '해당 금액만큼 파워볼 게임을 진행합니다.' },
            { name: '!어디가지', value: '어디서 만날지 정합니다.' },
            { name: '!챔프', value: 'LOL챔프 조합을 추천 합니다.' },
            
            
        )
      .setTimestamp()
  
      message.reply('님에 대한 응답' , exampleEmbed) 
        }}
    
  
