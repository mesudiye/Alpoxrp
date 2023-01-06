const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("VIEW_CHANNEL"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('📕 Yetkililerimiz en kısa sürede yardımcı olucaktır.')
.setDescription('  + ︱Bir kayıt talebinde bulundun! Senin için yetkililere bildirim gönderiyorum.Kayıt odasına bekleniyorsunuz.')
.setFooter('- Roleplay - https://discord.gg/revarp')
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
  name: 'kayıt',
  description: 'Sunucu bakım olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'kayıt'
};