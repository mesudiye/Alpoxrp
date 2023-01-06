const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (!message.member.hasPermission("VIEW_CHANNEL"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🎫 En kısa sürede yardımcı olacağız.')
.setDescription('  + ︱Destek talebiniz aldın, destek beklemeye geçiniz.')
.setFooter('- Roleplay - https://discord.gg/tcrpv1')
.setImage('')
message.channel.send('<@&984849511589507083>', aktif)
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0,
  kategori:'bakım'
};

exports.help = {
  name: 'destek',
  description: 'Sunucu bakım olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'destek'
};