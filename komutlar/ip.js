const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🔮 Fivem İp!')
.setDescription(' +︱Fivem İp Adresimiz : connect 91.151.94.36')
.setFooter('- Roleplay - https://discord.gg/tcrpv1')
.setImage('')
message.channel.send('', aktif)
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 5,
  kategori:'bakım'
};

exports.help = {
  name: 'ip',
  description: 'Sunucu aktif olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'ip'
};