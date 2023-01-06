const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" FrydeeX Fivem System")
.setTitle(" ➤ Geliştirici : FrydeeX#1938" )
 .setTimestamp()
.setDescription(".rolver @etiket @rol / Belirlenen kişiye rol verir. \n  .rolal @etiket @rol / Belirlenen kişinin rolünü alır.  ")
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
  name: 'kayıtpanel',
  category: 'kayıtpanel',
  description: 'Yardım Menüsü.',
   usage:'kayıtpanel'
}