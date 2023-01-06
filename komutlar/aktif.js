const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Yetkin bulunmuyor.");

const aktif = new Discord.MessageEmbed()
.setColor('random')
.setTitle('🔮 Sunucumuz Aktif !')
.setDescription(' + ︱Sunucumuz aktif, giriş yapabilirsiniz. \n  + ︱İyi roller dileriz. \n \n  + ︱ChivasRP \n \n  + ︱_Sunucu giriş bilgileri_ \n \n + ︱İp : connect 91.151.94.36 \n \n + ︱Teamspeak : chivasrp \n \n \n  + ︱Sunucu kurallarımızı okumayı unutma. <#996431459202121859> \n  + ︱Bir problem var ise destek çağırabilirsin <#996431465430667355>  ')
.setFooter('Chivas- Roleplay - https://discord.gg/cskuVGHSh7')
.setImage('')
message.channel.send('@everyone', aktif)
};
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aktif'],
  permLevel: 5,
  kategori:'bakım'
};

exports.help = {
  name: 'aktif',
  description: 'Sunucu aktif olduğunda atılan koddur.(Yetkililere özeldir.)',
  usage: 'aktif'
};