export default {
    eventName: "message",
    handler: async (client, message) => {
        if (message.channel.type === 'dm' || !message.channel.viewable || message.author.bot) return;

        console.log('Message Received', message);
        console.log(message.channel.guild.roles);
    }
};