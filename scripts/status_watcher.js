const Discord = require('discord.js');
const client = new Discord.Client();
const rgb = require('./RgbController');

const discordUserId = process.env.DISCORD_USER_ID
console.log(discordUserId);
const RGBController = new rgb.RGBController();

function updateStatus(newPresence) {

    if(busy){
        return;
    }

    if(newPresence.user.id !== discordUserId){
        return
    }

    //console.log(newPresence.activities);

    let status = 0;
    for(const i in newPresence.activities){
        if(newPresence.activities[i].type === "PLAYING"){
            //console.log('playing a game');
	    status=1;
	    break;
        } else {
	    status=0;
	}
    }
    //console.log(status);
    switch (status) {
	case 1:
	    console.log('in game');
	    RGBController.setYellow();
	    break;
	case 0:
	    console.log('not busy');
	    RGBController.setGreen();
	    break;

    }
}

client.on('ready', () => {
    client.user.setStatus('invisible').catch(console.log);

    newPresence = client.users.cache.find(user => user.id === discordUserId).presence;

    updateStatus(newPresence);
})

let busy = false;
let busyTimeout;

client.on('message', (message) => {

    if(message.author.id !== discordUserId){
        return;
    }

    if(message.content.startsWith('!setBusy')){
        if(busy){
            clearTimeout(busyTimeout);

            busyTimeout = setTimeout(() => {
                newPresence = client.users.cache.find(user => user.id === discordUserId).presence;

                busy = false;
                updateStatus(newPresence);
            }, args[1] * 60000);

        } else {
            busy = true;
            args = message.content.split(' ');
            mins = args[1];

            RGBController.setRed();
            busyTimeout = setTimeout(() => {
                newPresence = client.users.cache.find(user => user.id === discordUserId).presence;

                busy = false;
                updateStatus(newPresence);
            }, args[1] * 60000);
        }
    }

    if(message.content.startsWith('!clearBusy')){
        if(busy){
            busy = false;
            clearTimeout(busyTimeout);

            newPresence = client.users.cache.find(user => user.id === discordUserId).presence;
            updateStatus(newPresence);
        }
    }


    
})

client.on('presenceUpdate', (oldPresence, newPresence) => {
    
    updateStatus(newPresence);
})

process.on('SIGINT', () => {
    RGBController.setNone();
    process.exit(1);
})

client.login(process.env.DISCORD_BOT_TOKEN);
