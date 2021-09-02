const { Client } = require('discord.js')

const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.username} has logged on`)
}}

client.login('vOPOTWZ76yvSrTPxEAjz9aNkUyRexaDh')