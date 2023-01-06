const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🔌 Fivem Hatalar')
.setDescription(' + ︱Bu hatayı alıyorsanız steam uygulamanızı açıp tekrar deneyin.')
.setFooter('- Roleplay - https://discord.gg/revarp')
.setImage('https://cdn.discordapp.com/attachments/926131466428092426/941744778570235904/asda.png')
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
  name: 'hata',
  description: 'Sunucu bakım olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'hata'
};