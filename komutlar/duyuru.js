//---Bu Kod komutlar klasörüne atılacaktır. 
//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###$adista

const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // $adista
        let mesaj = args.slice(0).join(' ')

        // $adista
        if(!mesaj){
            const $adista = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Duyuruya Atacağım Mesajıda Gir.**`)
            .setColor('BLACK')
            .setFooter('FrydeeX')
            return message.channel.send($adista)
        }

        // $adista | CMF
        if(mesaj){
            client.channels.cache.get("970082834037489694").send(`${mesaj} ||@everyone||`)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Duyuru','DUYURU','announcement'],
    kategori: "Sahip",
    permLevel: 4
}

exports.help = {
  name: 'duyuru',
  category: 'Sahip',
  description: 'duyuru yapmanızı sağlar bot üzerinden.',
  usage: 'duyuru'
};