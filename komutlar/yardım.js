const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/939672669748600892/a03bc0a466dd6ba164fcb02ffb4440bb.webp"
    )
    .setDescription(
      `Toplamda Botta ${client.commands.size} Adet Komut Bulunuyor!` +
        "\n\n FrydeeX İyi Kullanımlar Diler."
    )
    .addField(
      ` ➤ Komutlar`,
      `
 

 | .moderasyon: Botun Moderasyon Komutlarına Bakarsınız.
 | .kayıtyardım: Botun Kayıt Komutlarına Bakarsınız.
 | .eğlence: Botun Eğlence Komutlarına Bakarsınız.
 | .fivempanel : Fivem komutlarına bakarsınız.




`)



    .addField(
      ` ➤ Bilgilendirme`,
      `
| Reva Bot Her Gün Güncelleniyor!
| Reva Kaliteli RolePlayin Tek Adresi `
    )
  
  .addField(
      ` ➤ Geliştirici : FrydeeX#1938`,
    )
   .setImage("https://cdn.discordapp.com/attachments/984559811960139806/989870189896159252/standard.gif")
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
