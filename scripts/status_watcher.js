const Discord = require('discord.js');
const client = new Discord.Client();
const rgb = require('./RgbController');

const RGBController = new rgb.RGBController();

// client.on('message', message => {
//     console.log(message.content)
// }) 

client.on('ready', () => {
    client.user.setStatus('invisible').catch(console.log)
})

client.on('presenceUpdate', (oldPresence, newPresence) => {
    
    if(newPresence.user.id != "151079705917915136"){
        return
    }

    console.log(newPresence.activities);

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
})

process.on('SIGINT', () => {
    RGBController.setNone();
})

client.login(process.env.DISCORD_BOT_TOKEN);
