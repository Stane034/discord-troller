discord = require("discord.js");

klijent = new discord.Client();

config = require('./config.json')

klijent.on('ready', message => {
if (config.klijentid && config.channelid) {
    for (let i = 0; i < config.kolicina; i++) {
        console.log('Tag broj ' + i + ' poslat')
        klijent.channels.cache.get(config.channelid).send('<@' + config.klijentid + '>').then(msg=>msg.delete({timeout:"500"}));
    }
    console.log('Gotovo')
}else { 
    console.log('Unesi Client ID i Channel ID u config.json')
}
})
if (config.token) {
    klijent.login(config.token)
}else { 
    console.log('Unesi Token u config.json')
}