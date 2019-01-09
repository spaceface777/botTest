const HermesBot = require('hermesbot');
const BOT_TOKEN = "913f2ed0-1125-11e9-9698-351fa8b8a04e" // Get your own at https://hermesmessenger-testing.duckdns.org/createBot

const bot = new HermesBot(BOT_TOKEN, {
    HermesURL: 'https://hermesmessenger-testing.duckdns.org',
    PollingRate: 500
});

bot.on('message', message => {
    console.log(message.sender + ': ' + message.text)
    console.log()

    /*
    if (message.text.toLowerCase().indexOf('bot') != -1) {
        bot.quote(message, 'Thanks, ' + message.sender)
    }

    if (message.text.toLowerCase() == 'hi') {
        bot.quote(message, 'Hi ' + message.sender)
        bot.sendMessage('general', 'How are you?')
    }
*/
    colorTest = message.text.split(' ') // '/setColor FF0000'
    if (colorTest[0] == '/setColor') {
        console.log('setting color to ' + colorTest[1])
        bot.setColor(colorTest[1])
    }

});

bot.on('quoted', message => {
    console.log('Quoted!')
    console.log(message.quote.sender)
    console.log(message.quote.text)
})

bot.on('mentioned', message => {
    console.log('Mentioned!')
    console.log(message.sender)
    console.log(message.text)
    bot.quote(message, 'Ok.')
})

bot.start();
