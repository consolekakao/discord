const request = require('request');

var top = new Array("아트록스","마오카이","레넥톤","모데카이저","다리우스","카시오페아","마오카이","볼리베어","신지드","오공");
var jungle = new Array("리신","그레이브즈","자르반 4세","엘리스","에코","아이번","오공","문도박사","쉬바나","누누와 윌럼프");
var mid = new Array("르블랑","사일러스","야스오","갈리오","카타리나","퀸","오공","마오카이","탈론","질리언");
var onedeal = new Array("이즈리얼","카이사","미스 포츈","바루스","루시안","베이가","카시오페아","야스오","하이머딩거","미스 포츈");
var suppoter = new Array("쓰레쉬","블리츠크랭크","세나","레오나","노틸러스","바드","마오카이","소나","질리언","하이머딩거");
var rand = new Array(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10));
 
module.exports = { 
	name: '챔프',
	description: 'Ping!',
	execute(message, args, Discord) {
        rand =  Math.floor(Math.random() * 10);
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#f52cd3')
        .setTitle('랜덤 챔프 목록은 아래와 같습니다.')
        .addFields(
        { name: '탑', value: top[Math.floor(Math.random() * 10)], inline: true },
        { name: '정글', value: jungle[Math.floor(Math.random() * 10)], inline: true },
        { name: '미드', value: mid[Math.floor(Math.random() * 10)], inline: true },
        { name: '원딜', value: onedeal[Math.floor(Math.random() * 10)], inline: true },
        { name: '서폿', value: suppoter[Math.floor(Math.random() * 10)], inline: true },)
        .setFooter('챔피언 뽑기는 인기순TOP5, 승률순TOP5 챔피언으로 구성되었습니다.', 'https://i.imgur.com/wSTFkRM.png');
      message.reply('님에 대한 응답' , exampleEmbed)    
    }
    }
  
