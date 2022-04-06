const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('barev', (ctx) => ctx.reply('🖕'))
bot.hears('geo', (ctx) => ctx.replyWithLocation('40.7942', '43.84528'))
bot.launch()

console.log(bot)