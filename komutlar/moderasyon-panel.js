const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("FrydeeX Moderation System")
.setTitle(" ➤  Geliştirici : FrydeeX#1938 ")
 .setTimestamp()
.setDescription(".ban-say / Sunucuda kaç kişinin banlandığı gösterir. \n .yavaşmod / Belirlenen kanala yavaş mod ekler. \n .sil / belirlenen miktarda mesajı siler. \n .mute @etiket süre / Belirlenen kişiye süreli mute atar. \n .mod-log #kanal / Mod loglarının atılıcağı kanalı ayarlar. \n .kick @etiket / Belirlenen kişiyi sunucudan atar. \n .everhere aç / Everyone,here korumasını açar. \n .forceban id / İd ile bir kullanıcıyı banlarsınız. / .rolkoruma aç-kapat / Silinen rolü otomatik geri açar. \n .yetkilerim / Discord üzerindeki yetkilerinizi gösterir. \n .sağtık aç / Sağ tık ban korumasını açar. \n .oylama / Oylama yapılan komutdur. \n .küfürengel aç-kapat / Sunucuda edilen küfürleri engeller. \n .gç-kanal #kanal / Giriş-Çıkış kanalını ayarlar. \n .gç-sıfırla / Giriş-Çıkış kanalını sıfırlar. \n .yazdır / Bota istediğiniz şeyi yazdırır. \n .duyuru / Duyuru kanalına yazdığınız mesajı atar. \n .sa-as aç-kapat / Sa-As sistemini. \n .nuke / Belirlenen kanalı komple siler ve tekrar açar. \n .unban id / Sunucudan banlı bir kişinin banını açar. ")
.setImage("https://cdn.discordapp.com/attachments/932701003042668574/983844863097339954/standard_1.gif")
   .setFooter("FrydeeX#1938 tarafından geliştirilmiştir.");
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}