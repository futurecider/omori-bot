const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    message.reply('pong!');
}
if (message.content === 'omorobot') {
    message.reply('hello! i am omorobot ᕙ(`▿´)ᕗ')
}
if (message.content === 'wilf') {
    message.reply('pervert supreme')
}
if (message.content.includes =='momo' ) {
    message.reply('=＾•ᆺ•＾=')
}
if (message.content === 'dorian') {
    message.reply('( ɔ˘ ³ ˘ɔ )(=＾◕ᆺ◕＾=)')
}
if (message.content === 'soapy') {
    message.reply('best girl soapy')
}
if (message.content === 'henri') {
    message.reply('henwi')
}
if (message.content === 'bambi') {
    message.reply('digging her own grave!')
}
if (message.content === 'sharese') {
    message.reply('digging her own grave!')
}
if (message.content === 'zach') {
    message.reply('when she has a forehead')
}
if (message.content === 'micah' ) {
    message.reply('ugly r-word')
}
if (message.content.includes =='henbot' ) {
    message.reply('i love henbot!')
}
if (message.content === 'omohelp') {
    message.reply('i am as clueless as you are!')
}


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret