const ytdl = require('ytdl-core');
const ytSearch = require('yt-search')

module.exports = {
    name: "play",
    description: "Joins a vc and play yt video",
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You must need to be in a **Voice channel** to run this command');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have correct permissions");
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have correct permissions");

        const validURL = (str) => {
            var regax = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&!\-\/]))?/;
            if(!regax.test(str)) {
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])) {
            message.channel.send('You entered a correct url!')

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: "audioonly"})

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave()
                message.channel.send('Leaving<:susok:886080378903871528>')
            });

            await message.channel.send('👍Now playing ***Your link***!')

            return
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }
        
        const video = await videoFinder(args.join(' '));

        if(video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.reply(`👍 Now playing ***${video.title}***`);
        } else {
            message.channel.send('No video result found');
        }
    }
}