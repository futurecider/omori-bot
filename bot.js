const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    message.reply('pong!');
}
if (message.content.includes('omorobot')) {
    message.reply('i am omorobot ᕙ(`▿´)ᕗ')
}
if (message.content === 'wilf') {
    message.channel.send({embed: {
        description: "pervert",
        image: {
        url: "https://i.gifer.com/BXhm.gif"
        }
    }}).catch(console.error)
}
if (message.content === 'momo' ) {
    message.reply('=＾•ᆺ•＾=')
}
if (message.content.includes ('dorian') ) {   
    message.channel.send({embed: {
        description: "(=＾◕ᆺ◕＾=)",
        image: {
        url: "https://cdn.discordapp.com/attachments/669407698734809098/669408026469466132/image0.jpg"
        }
    }}).catch(console.error)
}
if (message.content === 'soapy') {
    message.channel.send({embed: {
        description: "weeb",
        image: {
        url: "https://i.pinimg.com/originals/54/b3/44/54b3444e7b132e8e4d2acadb0ba12e5e.gif"
        }
    }}).catch(console.error)
}
if (message.content === 'henri') {
    message.channel.send({embed: {
        description: "henwi",
        image: {
        url: "https://otakutherapy.com/wp-content/uploads/2016/12/otku_70168854e04aeb1c.gif"
        }
    }}).catch(console.error)
}
if (message.content === 'bambi') {
    message.reply('digging her own grave!')
}
if (message.content === 'sharese') {
    message.reply('digging her own grave!')
}
if (message.content.includes('zach')) {
    message.channel.send({embed: {
        description: "criminal",
        image: {
        url: "https://cdn.discordapp.com/attachments/669407698734809098/669407961709281280/image0.png"
        }
    }}).catch(console.error)
}
if (message.content.includes('micah') ) {
     message.channel.send({embed: {
        description: "Just took a bath",
        image: {
        url: "https://cdn.discordapp.com/attachments/669407698734809098/669408079103655946/image0.jpg"
        }
    }}).catch(console.error)
}
if (message.content.includes('henbot') ) {
    message.reply('i love henbot!')
}
if (message.content === 'omohelp') {
    message.reply('i am as clueless as you are!')
}


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret