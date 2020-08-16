// NzAzNjQyMDIwODYxNzA2MjYw.XqRj8w.6zFoD_wxdGtqAXvwrIJn8j28HLo


module.exports = {
    name: 'x',
    description: 'Ping!',
    execute(message, args, Discord) {
       
            // Only try to join the sender's voice channel if they are in one themselves
            if (message.member.voiceChannel) {
              message.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                  message.reply('playing music!');
                  const dispatcher = connection.playFile('./music.mp3');
                  dispatcher.on("end", end => {});
                })
                .catch(console.log);
            } else {
              message.reply('먼저 방에 들어가');
            }
          
         
    }
}




