const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans a server member',
    execute(message, args) {
        const member = message.mentions.users.first();
        if(member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            const newEmbed = new Discord.MessageEmbed()
            .setDescription(`_**${member.tag}**_ has been **Banned**`)
            .setColor("RED")
            message.channel.send(newEmbed)
        } else {
            message.channel.send('Please specify a user to ban')
        }
    }
}