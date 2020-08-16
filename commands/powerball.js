const { host,user,password,database } = require('../config.json');
var input = new Array();
var i, a,count,lastmoney;
var rand = (Math.floor(Math.random() * 10)); // 1~최대수
var arr = [];
var p; //배율
let today = new Date();  
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();
var logdate = year+'-'+month+'-'+date;



console.log(arr);
console.log(rand);

module.exports = {
    name: '파워볼',
    description: 'Ping!',


    execute(message, args, Discord) {
        input = [args[1], args[2], args[3], args[4], args[5]];
        console.log(input);
        input.sort();
        console.log(input);
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
        for (i = 0; i < 3; i++) if (input[i] == input[i + 1]) { input[i] = '99' }
        if (input.indexOf('99') != -1)
        {
            
            
            const exampleEmbed = new Discord.MessageEmbed()
                      .setColor('#0ab1ff')
                      .setTitle('잘못된 입력입니다. 사유:동일숫자 포함.')
                      
                          .setDescription('0~9까지 원하는 숫자 5개를 골라 배팅하세요. 배율은 !배율을 참고해주세요.\r\n입력형식: !파워볼 숫자1 숫자2 숫자3 숫자4 숫자5 배팅금액\r\n EX)!파워볼 1 5 6 8 9 10000')
                          
                          
                    message.reply('님에 대한 응답' , exampleEmbed) 
        
        
        
        }
        else if(args[6] == null){message.reply('입력이 잘못되었습니다. 사유:배팅금액 미입력.')}
        else {

            connection.connect();
            connection.query('SELECT count(id) as cnt, id, money from toto where id="' + message.author.username + '"', function (error, results, fields) {

                if (results[0].cnt == 1) {
                    console.log("존재하는아이디");
                    if (error) throw error;
                    console.log(results[0].money);
                    console.log(results[0].id);
                    console.log(connection.query);
                    console.log(results);

                    a = results[0].money;
                    havemoney = parseInt(a); //가진금액
                    battingmoney = parseInt(args[6]); //배팅금액
                    battingmoney = parseInt(battingmoney / 1000);
                    console.log(battingmoney);
                    battingmoney = parseInt(battingmoney * 1000);
                    console.log(battingmoney);
                    console.log('해당계정 소유금액:  ' + a);
                    console.log('배팅금액:  ' + args[6]);
                    console.log(typeof (havemoney) + havemoney);
                    console.log(typeof (battingmoney) + battingmoney);
                    if (havemoney >= battingmoney) {
                        //소유금액이 배팅금액보다 많을때(정상처리)
                        console.log('성공');
                        arr.length = 0; //배열초기화
                        while (1) 
                        {
                            
                            var index = (Math.floor(Math.random() * 10));
                            if (arr.indexOf(index) > -1) continue;
                            arr.push(index);
                            if (arr.length == 5)  break;
                            console.log(arr +  arr.length);
                        }
                        arr.sort();
                        console.log('INPUT: '  + input); 
                        console.log('SERVER: '+arr);
                       
                        var x,y;
                        count = 0;
                        for(x = 0; x <5; x++)
                        {
                            for(y = 0; y <5; y++)
                            {
                                if(input[x] == arr[y])
                                {
                                    count ++; 
                                    console.log(input[x] + ' ' + arr[y]);
                                }    
                               
                            }
                        }
                        console.log(' 맞은 개수   '+count);

                    if(count == 0) p = 0;
                    else if(count == 1) p = 0;
                    else if(count == 2) p = 0.3;
                    else if(count == 3) p = 2;
                    else if(count == 4) p = 6;
                    else if(count == 5) p = 30;
                    
                    lastmoney = havemoney-battingmoney+(battingmoney*p);
                    console.log(lastmoney);
                        
                    connection.query('update toto set money='+lastmoney+ ' where id="'+message.author.username+'"', function (error, results, fields) {
                        if (error) throw error;
                      });



                      const exampleEmbed = new Discord.MessageEmbed()
                      .setColor('#0ab1ff')
                      .setTitle('경기결과 :: '+ count+'개 (적중) ' + p + '배')
                      .addFields(
                        { name: '내 번호', value: input, inline: true },
                        { name: '당첨 번호', value: arr, inline: true },
                      )
                          .setDescription('배팅금액: ' + battingmoney + '원\r\n 획득금액: '+(battingmoney*p) + '원\r\n 기존잔액: '+ havemoney +'원\r\n최종잔액: ' + lastmoney + '원\r\n')
                          
                          
                    message.reply('님에 대한 응답' , exampleEmbed) 




                        if(p>=1){
                            connection.query('insert into totolog values("powerball","'+message.author.username+'",'+havemoney+","+battingmoney+",'"+input+"','"+arr+"','"+count+"','"+(battingmoney*p)+"',"+(lastmoney+(battingmoney*p))+",'"+logdate+"')"), function (error, results, fields) {
                                if (error) throw error;
                                console.log(connection.query);
                               
                                }
                        }

                        else{

                        connection.query('insert into totolog values("powerball","'+message.author.username+'",'+havemoney+","+battingmoney+",'"+input+"','"+arr+"','"+count+"','-"+(battingmoney*p)+"',"+(lastmoney+(battingmoney*p))+",'"+logdate+"')"), function (error, results, fields) {
                        if (error) throw error;
                        console.log(connection.query);
                        }
                        }
                    
                    }
                    else {
                        //배팅금액이 더 클때(비정상처리)
                        console.log('실패/배팅금액이 더 큼.');
                        message.reply('(배팅불가) 사유: 소유 금액보다 배팅금액이 더 큽니다.')
                    }
                    connection.end();

                }

            }
            )
        }
    }




}
