const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply('Привет, я Админ Телеграм каналов @track_shelbys и @new8doff'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('barev', (ctx) => ctx.reply('🖕'))
bot.hears('geo', (ctx) => ctx.replyWithLocation('40.7942', '43.84528'))
// bot.hears('реклама', (ctx) => ctx.telegram.sendAudio(ctx.chat.id, 'https://www.mediafire.com/file/1apjqhyzcc74a0q/guitar-ringtone_Lwkn37nD.mp3'))

bot.launch()

console.log(bot)