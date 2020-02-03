const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'ᕙ(`▿´)ᕗ' }, status: 'dnd' })
    client.user.setPresence({
        status: "dnd",  //You can show online, idle....
        game: {
            name: "ᕙ(`▿´)ᕗ",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
    message.reply('pong!');
}
if (message.content.includes('omorobot')) {
    message.reply('at your service! ᕙ(`▿´)ᕗ')
}
if (message.content.includes('wilf')) {
    message.channel.send({embed: {
        description: "pervert",
        image: {
        url: "https://i.gifer.com/BXhm.gif"
        }
    }}).catch(console.error)
}
if (message.content.includes('momo') ) {
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
if (message.content.includes('soapy')) {
    message.channel.send({embed: {
        description: "weeb",
        image: {
        url: "https://i.pinimg.com/originals/54/b3/44/54b3444e7b132e8e4d2acadb0ba12e5e.gif"
        }
    }}).catch(console.error)
}
if (message.content.includes('henri')) {
    message.channel.send({embed: {
        description: "henwi",
        image: {
        url: "https://otakutherapy.com/wp-content/uploads/2016/12/otku_70168854e04aeb1c.gif"
        }
    }}).catch(console.error)
}
if (message.content.includes('bambi')) {
    message.channel.send({embed: {
        description: "digging her own grave!",
        image: {
        url: "https://cdn.discordapp.com/attachments/669407698734809098/669959781741494292/sharese_whateverr.gif"
        }
    }}).catch(console.error)
}
if (message.content.includes('sharese')) {
    message.channel.send({embed: {
        description: "digging her own grave!",
        image: {
        url: "https://cdn.discordapp.com/attachments/669407698734809098/669959781741494292/sharese_whateverr.gif"
        }
    }}).catch(console.error)
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
    message.reply('are you talking about my brother? (◕ヮ◕)*:･ﾟ✧')

}
if (message.content === 'omohelp') {
    message.reply('sorry, i am just as clueless as you are!(╥︣﹏᷅╥᷅)')
}


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret