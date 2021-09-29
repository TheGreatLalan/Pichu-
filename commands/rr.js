const Discord = require('discord.js');

module.exports = {
    name: 'rr',
    description: 'Sets an reaction role',
    async execute(message, args, Discord, client) {

        message.channel.bulkDelete(1);

        const channel = '892048659800272926'
        const orangeGangRole = message.guild.roles.cache.find(role => role.name === "Orange Gang");
        const greenGangRole = message.guild.roles.cache.find(role => role.name === "Green Gang");

        const orangeGangEmoji = '🧡';
        const greenGangEmoji = '💚';

        let embed = new Discord.MessageEmbed()
        .setColor('#RRR999')
        .setAuthor('𝗦𝗘𝗟𝗙 𝗥𝗢𝗟𝗘𝗦')
        .setTitle('**Colour Roles!**')
        .setDescription('React to get\n\n'
              + `${orangeGangEmoji} for Orange colour\n`
              + `${greenGangEmoji} for Green colour`);

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(orangeGangEmoji);
        messageEmbed.react(greenGangEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            
            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name === orangeGangEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeGangRole);
                }
                if(reaction.emoji.name === greenGangEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenGangRole);
                } 
            } else {
                return;
            }
                  
        });
        
    }
};