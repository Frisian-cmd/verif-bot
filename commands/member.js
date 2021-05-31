module.exports = {
	name: 'member',
	description: "",
	execute(message, args){

		let role = message.guild.roles.cache.find(r => r.name === "member");

		if(message.member.roles.cache.some(r => r.name === "member")){
			message.channel.send('Sorry man you already got that role.');
		
}		else{
			message.channel.send('Congrats, you are now a member of this server! :smile:');
			message.member.roles.add('712960671570067506').catch(console.error);
		}
		//else if(message.member.has())
	}
}