const Discord = require('discord.js');

const botConfig = require("*./botconfig.json");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles =fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	
	client.commands.set(command.name, command);
}



client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log("start")
});

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

}	else if(command == 'member'){
	client.commands.get('member').execute(message, args); 

}
});

client.login(process.env.token);