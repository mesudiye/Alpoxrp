const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🔌 Sunucumuz Bakımdadır !')
.setDescription(' + ︱Sunucumuz kısa süreliğine bakıma alınmıştır. \n  + ︱Anlayışınız için teşekkür ederiz. \n \n  + ︱TCRP \n \n  + ︱_Sunucu giriş bilgileri_ \n \n  + ︱İp : connect 91.151.94.36 \n \n  + ︱Teamspeak : reva1938 \n \n \n  + ︱Sunucu kurallarımızı okumayı unutma. <#927200247225143356> \n + ︱Bir problem var ise destek çağırabilirsin <#969373647888330762>')
.setFooter('- Roleplay - https://discord.gg/revarp')
.setImage('https://cdn.discordapp.com/attachments/915641430301614140/986751007058976818/static_1.png')
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
  name: 'bakım',
  description: 'Sunucu bakım olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'bakım'
};