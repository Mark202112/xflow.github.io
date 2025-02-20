const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '7438793473:AAEGzUebSyhLxDmkROksOZSNK1HgTH6kU2c';
const GAME_URL = 'https://mark202112.github.io/xflow.github.io/';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendGame(msg.chat.id, 'X-FLOW');
});

bot.on('callback_query', (query) => {
    bot.answerCallbackQuery(query.id, { url: GAME_URL });
});
