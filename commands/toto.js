const request = require('request');
const { host,user,password,database } = require('../config.json');
var a, havemoney, battingmoney,tmp,answer,lastmoney,log;

var rand = new Array((Math.floor(Math.random() * 100)) % 2);
let today = new Date();  
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();
var logdate = year+'-'+month+'-'+date;
//입력한게 홀,짝인지 확인
//잔액 불러오기 >> 배팅금액이 잔액보다 작은지 확인 >> 알고리즘 >> 맞으면 돈 추가.
//   0     1    2    
// !홀짝 홀 50000
module.exports = {
  name: '홀짝',
  description: 'Ping!',

  execute(message, args, Discord) {
    console.log(args[1]);
    tmp = args[1];
    if (args[1] == '홀' || args[1] == '짝') {
      var mysql = require('mysql');
      var connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
      });
      
      // 배팅설정
var p = 0.95   //배율


        connection.connect();
        connection.query('SELECT count(id) as cnt, id, money from toto where id="' + message.author.username + '"', function (error, results, fields) {
               
          if(results[0].cnt == 1){
          console.log("존재하는아이디");
          if (error) throw error;
               console.log(results[0].money);
                console.log(results[0].id);
                console.log(connection.query);
                console.log(results);
      
                     a = results[0].money;
                     havemoney = parseInt(a); //가진금액
                     battingmoney = parseInt(args[2]); //배팅금액
                     battingmoney = parseInt(battingmoney/1000);
                     console.log(battingmoney);
                     battingmoney = parseInt(battingmoney * 1000);
                     console.log(battingmoney);
                     console.log('해당계정 소유금액:  ' + a);
                     console.log('배팅금액:  ' + args[2]);
                     console.log(typeof (havemoney) + havemoney);
                     console.log(typeof (battingmoney) + battingmoney);
                                                      if (havemoney >= battingmoney) {
                                                        //소유금액이 배팅금액보다 많을때(정상처리)
                                                        console.log('성공');
                                                        
                                                      
                                                      
                                                      answer = (Math.floor(Math.random() * 100)) % 2;
                                                        console.log(answer);
                                                        if(answer == 0){ answer = '짝'; }
                                                        else{ answer = '홀';}

                                                        console.log(answer);
                                                        console.log(tmp);

                                                        if(tmp == answer){
                                                          console.log('적중');
                                                        log = '적중';
                                                        lastmoney = havemoney + (battingmoney*0.95);
                                                        console.log(lastmoney);
                                                        
                                                        connection.query('update toto set money='+lastmoney+ ' where id="'+message.author.username+'"', function (error, results, fields) {
                                                          if (error) throw error;
                                                        });


                                                          const exampleEmbed = new Discord.MessageEmbed()
                                                          .setColor('#0ab1ff')
                                                          .setTitle('경기결과 :: '+ answer+' (적중)')
                                                  
                                                              .setDescription('배팅금액: ' + battingmoney + '원\r\n 획득금액: '+(battingmoney*p) + '원\r\n 기존잔액: '+ havemoney +'원\r\n최종잔액: ' + lastmoney + '원')
                                                              //.setThumbnail('https://media.discordapp.net/attachments/703643541238317067/704363416340398192/20200414_215222.jpg?width=457&height=612')
                                                              
                                                        message.reply('님에 대한 응답' , exampleEmbed) 

                                                        connection.query('insert into totolog values("holjjack","'+message.author.username+'",'+havemoney+","+battingmoney+",'"+tmp+"','"+answer+"','"+log+"',"+(battingmoney+(battingmoney*p))+","+lastmoney+",'"+logdate+"')"), function (error, results, fields) {
                                                          if (error) throw error;
                                                          console.log(connection.query);
                                                         } }

                                                        
                                                        
                                                        
                                                        
                                                        else{
                                                          console.log('미적중');
                                                          lastmoney = havemoney - battingmoney;
                                                        console.log(lastmoney);
                                                        log = '미적중';
                                                        connection.query('update toto set money='+lastmoney+ ' where id="'+message.author.username+'"', function (error, results, fields) {
                                                          if (error) throw error;
                                                        });
                                                          const exampleEmbed = new Discord.MessageEmbed()
                                                          .setColor('#ff0022')
                                                          .setTitle('경기결과 :: '+ answer+' (미적중)')
                                                  
                                                              .setDescription('배팅금액: ' + battingmoney + '원\r\n 기존잔액: '+ havemoney +'원\r\n최종잔액: ' + lastmoney + '원')
                                                              //.setThumbnail('https://media.discordapp.net/attachments/703643541238317067/704363416340398192/20200414_215222.jpg?width=457&height=612')
                                                              
                                                        message.reply('님에 대한 응답' , exampleEmbed) 
                                                        connection.query('insert into totolog values("holjjack","'+message.author.username+'",'+havemoney+","+battingmoney+",'"+tmp+"','"+answer+"','"+log+"','-"+(battingmoney+(battingmoney*0.95))+"',"+lastmoney+",'"+logdate+"')"), function (error, results, fields) {
                                                          if (error) throw error;
                                                          console.log(connection.query);
                                                         } };
                                                        
                                                    
                                                      }
                                                      else if (havemoney < battingmoney) { //소유금액보다 배팅금액이 클때(비정상처리)
                                                        message.reply('(배팅불가) 사유: 소유 금액보다 배팅금액이 더 큽니다.')
                                                      }
                                                    
                                                      else {
                                                        message.reply('(????) ')
                                                      }
      }                                      
      else                                            
      {
        console.log("없는아이디");
        message.reply('(ERROR)) 사유: 존재하지 않는 아이디입니다.')
      }
    
    
      

    
    connection.end();

    console.log('')
    console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
  }

        )}}}