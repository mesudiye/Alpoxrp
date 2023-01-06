const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" FrydeeX Fivem System")
.setTitle(" ➤ Geliştirici : FrydeeX#1938" )
 .setTimestamp()
.setDescription(".aktif / Sunucu aktif olduğunda kullanılır. \n .bakım / Sunucu bakıma alınırken kullanılır. \n .restart / Sunucuya restart atarken kullanılır. \n .ip / Fivem connect ip'sini atar. \n .ts / Sunucun TeamSpeak adresini atar. \n .kayıt / Yetkililere kayıt mesajı gönderir. \n .destek / Yetkililere destek mesajı gönderir. \n .esma / Çök esma'yı gifi atar. \n .hata / Fivem'de genel olarak karşılaşılan hataları gösterir. \n .cfx / Linkle tıkladığınızda otomatik olarak sunucuya bağlanır.")
.setImage("https://cdn.discordapp.com/attachments/984559811960139806/989870189896159252/standard.gif")
   .setFooter("FrydeeX tarafından yapılmıştır.");
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'fivempanel',
  category: 'fivempanel',
  description: 'Yardım Menüsü.',
   usage:'fivempanel'
}