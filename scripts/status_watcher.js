const Discord = require('discord.js');
const client = new Discord.Client();
const rgb = require('./RgbController');

const RGBController = new rgb.RBGController();

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

    
    for(const i in newPresence.activities){
        if(newPresence.activities[i].type === "PLAYING"){
            console.log('playing a game');
            RGBController.setYellow();
        }
    }
    console.log('not busy');
    RGBController.setGreen();

})

client.login(process.env.DISCORD_BOT_TOKEN);