const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" FrydeeX Funny System")
.setTitle(" ➤ Geliştirici : FrydeeX#1938" )
 .setTimestamp()
.setDescription(".kasaaç / Silah kasası açarsınız. \n  .zarat / 0-6 Arasında zar atar. \n   .balıktut / Balık tutarsınız. \n   .hesapla / örnek : 3+3 yazarsanız cevabı otomatik atar. \n .soygun / Soygun yaparsınız ve belirli bir para kazanırsınız.")
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
  name: 'eğlence',
  category: 'eğlence',
  description: 'Yardım Menüsü.',
   usage:'eğlence'
}