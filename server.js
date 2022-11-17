const TelegramBot = require('node-telegram-bot-api');
const token = '5705555714:AAEebrn0uYps-cnZ8YN2Ni9YIkq2m-yoojY';

// ---------------- Polling example ----------------
const bot = new TelegramBot(token, {polling: true});
// const bot = new TelegramBot(token, {polling: {interval : 1000, autoStart: true}});
bot.onText(/\/start/, msg => {
    console.log(msg)
})

console.log("Everything is in order...")
