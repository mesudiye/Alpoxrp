const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🔮 Cfx Link!')
.setDescription(' + ︱Servere Bağlanmak İçin Yandaki Linke Tıklayınız! : (cfx.re/join/kz75d7) ')
.setFooter('- Roleplay - https://discord.gg/revarp')
.setImage('')
message.channel.send('cfx.re/join/kz75d7', aktif)
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 5,
  kategori:'bakım'
};

exports.help = {
  name: 'cfx',
  description: 'Sunucu aktif olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'cfx'
};