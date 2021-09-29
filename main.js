const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '-p'

const fs = require('fs');

client.command = new Discord.Collection();
client.event = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}
client.on("ready", ready => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on('message', message => {

    message.member.roles.cache.has
    if (!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'rule'){
        client.command.get('rule').execute(message, args);
    } else if(command === 'kick'){
        client.command.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.command.get('ban').execute(message, args);
    } else if(command === 'rr'){
        client.command.get('rr').execute(message, args, Discord, client);
    } else if(command === 'play'){
        client.command.get('play').execute(message, args);
    } else if(command === 'leave'){
        client.command.get('leave').execute(message, args);
    } 
});


client.login('ODgzNzM0MjI5NDI5NjQ5NDI4.YTOPow.HijeXdqWc5_pGWLHGAg3CVcwhNg')