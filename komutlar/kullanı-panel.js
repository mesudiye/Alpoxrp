const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" FrydeeX User System")
.setTitle(" ➤ Geliştirici : FrydeeX#1938" )
 .setTimestamp()
.setDescription(".afk sebeb / Afk olduğunuzda kullanılan komutdur. \n .avatar @etiket / Belirlenen kullacının profil resmini atar. \n .sunucuresim / Sunucun resmini atar. \n .test / Botun test komutudur. \n .ping / Botun pingini gösteren komutdur. \n .yapımcım / Botun geliştiricisini gösteren komutdur. \n .üyedurum / Sunucudaki üye sayısını gösterir.")
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
  name:'kullanıcıpanel',
  category: 'kullanıcıpanel',
  description: 'Yardım Menüsü.',
   usage:'kullanıcıpanel'
}