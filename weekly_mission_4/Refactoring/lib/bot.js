require('dotenv').config();
if(!process.env.TOKENBOT){
    throw new Error ("No hay configuración con Token")
}
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
const token = process.env.TOKENBOT;
console.log(token);
const bot = new TelegramBot(token, {polling: true});
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegra
    // 'match' is the result of executing the regexp above on the text content
    // of the message    
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});
    
// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }    
});    