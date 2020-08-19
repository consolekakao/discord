const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

//hello
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready',() =>{
    console.log("Ready!");
});






let timer = setInterval(english,1000*5);

client.on('message',message =>{
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);

	const commandname = args[0];
	if (!client.commands.has(commandname)) return;

	try {
		client.commands.get(commandname).execute(message, args, Discord);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}





	function english(){
		try {
			client.commands.get(english).execute();
		} catch (error) {
			console.error(error);
			message.reply('timer error!');
		}
	}
	




});





client.login(token);


