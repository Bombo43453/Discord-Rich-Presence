require('dotenv').config();
const RPC = require('discord-rpc');
const chalk = require(`chalk`)
const client = new RPC.Client({
    transport: 'ipc'
});


(async () => {
    //Starts When Bot Is Online 
    client.on('ready', async () => {
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{
                label: `${process.env.TOPBUTTONTXT} `,
                url: `${process.env.TOPBUTTONURL}`
            }, {
                label: `${process.env.BOTTOMBUTTONTXT}`,
                url: `${process.env.BOTTOMBUTTONURL}`
            }],
            details: `${process.env.DESCRIPTION}`, //The Description
            largeImageKey: "large_icon", // Image Name
            largeImageText: `${process.env.TITLE_TEXT}` //When Hovering Over Image This Shows Up
        }).catch(err => console.log(err));
        console.log(`
            
 █▀█ █▀█ █▀▀   █▀█ █▄░█ █░░ █ █▄░█ █▀▀
 █▀▄ █▀▀ █▄▄   █▄█ █░▀█ █▄▄ █ █░▀█ ██▄

 \n\n\n\n\n\n\n
             `)
                console.log(chalk.green(`RPC IS ONLINE || CHECK YOUR STATUS`))
                console.log(chalk.green(`https://github.com/Bombo43453`))
                
    });

    await client.login({
        clientId: process.env.CLIENTID
    }).then(async () => {
        console.log(`
        ░█▀▀█ █▀▀█ █▀▄▀█ █▀▀▄ █▀▀█ ─█▀█─ █▀▀█ ─█▀█─ █▀▀ █▀▀█ 　 ── 　 ░█▀▀█ ░█▀▀█ ░█▀▀█ 
        ░█▀▀▄ █──█ █─▀─█ █▀▀▄ █──█ █▄▄█▄ ──▀▄ █▄▄█▄ ▀▀▄ ──▀▄ 　 ▀▀ 　 ░█▄▄▀ ░█▄▄█ ░█─── 
        ░█▄▄█ ▀▀▀▀ ▀───▀ ▀▀▀─ ▀▀▀▀ ───█─ █▄▄█ ───█─ ▄▄▀ █▄▄█ 　 ── 　 ░█─░█ ░█─── ░█▄▄█
        `)
        

    }).catch(err => console.log(err + `\n\n\n Please Report This Error In https://github.com/Bombo43453`))
})();