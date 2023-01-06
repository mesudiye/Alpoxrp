const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🔮 Team Speak!')
.setDescription(' +︱Team Speak Adresi : reva1938')
.setFooter('- Roleplay - https://discord.gg/revarp')
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
  name: 'ts',
  description: 'Sunucu aktif olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'ts'
};