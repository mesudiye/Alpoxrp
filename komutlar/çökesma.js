const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🧨 Sunucu aktif!')
.setDescription('  + ︱ÇöQ EsMa ÇöQ')
.setFooter('- Roleplay - https://discord.gg/tcrpv1')
.setImage('https://cdn.discordapp.com/attachments/940562597760090113/985246615340195910/maxresdefault.jpg')
message.channel.send('@everyone', aktif)
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 5,
  kategori:'bakım'
};

exports.help = {
  name: 'esma',
  description: 'Sunucu bakım olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'esma'
};