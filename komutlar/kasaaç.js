const Discord = require('discord.js');
exports.run = (client, message) => {
    let csgopng = "https://cdn.discordapp.com/attachments/932701003042668574/983844863097339954/standard_1.gif"
    var kasadancikanlar = [
        "**Sopa / Tebrikler Sopa Çıkardın!**",
        "**Sns Pistol / Tebrikler SNS Pistol Çıkardın!**",
        "**Heavy Pistol / Tebrikler Heavy Pistol Çıkardın!**",
        "**500TL Donate / Tebrikler Donate Hediye Çeki Çıkardın**",
        "**Uzi  / Tebrikler UZİ Çıkardın!**",
        "**AK-47 / Tebrikler AK-47 Çıkardın!**",
        "**AP Pistol / Tebrikler AP Pistol Çıkardın!**",
        "**Smg / Tebrikler SMG Çıkardın!**",
        "**Revolver / Tebrikler Revolver Çıkardın!**",
        "**Kelebek Bıçak / Tebrikler Kelebek Çıkardın!**",
        "**Muşta / Tebrikler Muşta Çıkardın!**",
        "**Geliştirilmiş Otomatik Tüfek / Tebrikler Muşta Çıkardın!**"

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
    const embed  = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/925842393436131348/940513412990005288/FiveM-_TR_SUNCITY-ROLEPLAY-HIZLI-WHITELIST-2022-02-08-00-43-55-_online-video-cutter.com__1.gif")
    .setAuthor('Made By FrydeeX', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) | Kasa Fiyatı: 80$ | Kasadan çıkan bütün ürünler sizde kalmaz sadece eğlence için yapılmış bir komutdur`)
    .setColor("RANDOM")
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csgokasa'],
  permLevel: 0
};

exports.help = {
  name: 'kasaaç',
  description: 'CS:GO kasa açma simülasyonu',
  usage: 'kasaaç'
};