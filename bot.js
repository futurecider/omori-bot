const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({game : { name :'in 2 servers! ᕙ(`▿´)ᕗ'}});
    client.user.setStatus('dnd');
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
    message.reply('my brother? (◕ヮ◕)*:･ﾟ✧')

}
if (message.content === 'omohelp') {
    message.reply('i am just as clueless as you are!(╥︣﹏᷅╥᷅)')
} // music bot time :[



 client.on('message', async message => {
        var prefix = "omo"
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
    
        const serverQueue = queue.get(message.guild.id);
    
        if (message.content.startsWith(`${prefix}play`)) {
            execute(message, serverQueue);
            return;
        } else if (message.content.startsWith(`${prefix}skip`)) {
            skip(message, serverQueue);
            return;
        } else if (message.content.startsWith(`${prefix}stop`)) {
            stop(message, serverQueue);
            return;
        } else {
            message.channel.send('i dont understand!(╥︣﹏᷅╥᷅)')
        }
    });
    async function execute(message, serverQueue) {
        const args = message.content.split(' ');
    
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('get in a voice channel dummy! t(>.<t)');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return message.channel.send('I need the permissions to do that!(╥︣﹏᷅╥᷅)');
        }
    
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
        };
    
        if (!serverQueue) {
            const queueContruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
            };
    
            queue.set(message.guild.id, queueContruct);
    
            queueContruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueContruct.connection = connection;
                play(message.guild, queueContruct.songs[0]);
            } catch (err) {
                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);
            }
        } else {
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            return message.channel.send(`${song.title} has been added to the queue (^◡^ )! `);
        }
    
    }
    
    function skip(message, serverQueue) {
        if (!message.member.voiceChannel) return message.channel.send('get in a voice channel dummy! t(>.<t)');
        if (!serverQueue) return message.channel.send('no song to skip! (╥︣﹏᷅╥᷅)');
        serverQueue.connection.dispatcher.end();
    }
    
    function stop(message, serverQueue) {
        if (!message.member.voiceChannel) return message.channel.send('get in a voice channel dummy! t(>.<t)');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
    
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
    
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
            .on('end', () => {
                console.log('Music ended!');
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on('error', error => {
                console.error(error);
            });
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    }
    




















});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret