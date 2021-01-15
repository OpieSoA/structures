const Client = require('../structures/Client');
const { Message } = require('discord.js');
module.exports = {
    name: 'ping',

    /**
     * @param {CLient} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send('Pinging..');
        await msg.edit(client.embed({
            title: 'Pong!',
            description: 'WebSocket ping is ${client.ws.ping}MS!\nMessage edit ping is ${msg.createdAt - message.createdAt}'
        }));
        await msg.edit("");    
    }
}
