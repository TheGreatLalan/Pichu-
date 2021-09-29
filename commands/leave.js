const { execute } = require("./play");

module.exports = {
    name: "leave",
    description: "Leaves a voice channel",
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in **Voice channel** to execute this command')
        await voiceChannel.leave()
        await message.channel.send("Sucessfully leaved <:susok:886080378903871528>")
    }
}