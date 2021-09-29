const Discord = require('discord.js');

module.exports = {
    name: 'rule',
    description: 'help embed!',
    execute(message, args) {

        message.channel.bulkDelete(1);

        const newEmbed = new Discord.MessageEmbed()
        
        
        .setColor('#30ce6c')
        .setTitle('RULES')
        .setFooter('♡Credit▪to▪Pikachu♡｜Team BBT')
        .setDescription("1. Do not DM any member promoting yourself.\n\n2. Do not make any inappropriate/rude comments about another user. Zero tolerance for bullying here.\n\n3. Do not start drama. Do not bring drama from other social media (YouTube, Twitter, Discord, etc.) to this server. If you are purposely commenting something to elicit a negative reaction from people, that will not be tolerated.\n\n4. No racism.\n\n5. No nudity. Do not post any kind of sexually suggestive images or nudity in the chats, do not post any kind of links that lead to sexual sites, keep in mind there are younger children in this server.\n\n6. While Profanity is allowed in the server, please refrain from using excessive profanity since there are some younger people in the server. This does not approve sexual talk. Please keep anything sexual out of the server.\n\n7. Please speak English only.It's difficult to moderate other languages. If someone is insulting someone, or breaking rules, in another language, it will be difficult for myself and the mods to know.\n\n8. No spamming messages in the chats or to community members in DMs.\n\n9. No religious talk. These conversations usually lead to negative conflict.\n\n10. Posting links redirecting to giveaways, harmful content, adult content, derogatory content, downloads, and/or viruses, is prohibited.\n\n11. Selling items, accounts, goods, and services is prohibited. Additionally, do not request to purchase services here; and do not ask people to give you money, gift cards, or any other form of currency.\n\n12. Please, no gore or any kind of brutal images or any kind of links that lead to gore website\n\n13. Please don't talk in channels you aren't supposed to be talking. If you are doing it we are going to warn you.\n\n14. Don't flood the chats. (Flood = 8+ text) we will warn you.")
        
        message.channel.send(newEmbed);

    }
}