const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('??圻 Restart At覺l覺yor!')
.setDescription('  + 儭密覺sa bir restartdan sonra tekar sizlerleyiz.')
.setFooter('- Roleplay - https://discord.gg/tcrpv1')
.setImage('')
message.channel.send('@everyone', aktif)
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bak覺m'],
  permLevel: 5,
  kategori:'bak覺m'
};

exports.help = {
  name: 'restart',
  description: 'Sunucu bak覺m oldu??unda at覺lan koddur.(Yetkililere 繹zeldir.)',
  usage: 'restart'
};