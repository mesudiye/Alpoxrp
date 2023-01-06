const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🧦 Restart Atılıyor!')
.setDescription('  + ︱Kısa bir restartdan sonra tekar sizlerleyiz.')
.setFooter('- Roleplay - https://discord.gg/tcrpv1')
.setImage('')
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
  name: 'restart',
  description: 'Sunucu bakım olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'restart'
};