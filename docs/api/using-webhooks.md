# Using BladeBotList's Webhooks

## Post to Discord Webhooks

### Create the webhook

1. Go to server settings  
    ![server settings](http://cdn.bladebotlist.xyz/SDcWC1MX)  
2. Go to Integrations  
    ![integrations](http://cdn.bladebotlist.xyz/aVpU3C6l)
3. Click on "Create Webhook"  
    ![create webhook](http://cdn.bladebotlist.xyz/FwWo8791)
4. Edit the name (1), The channel (2) and the avatar (3)  
    ![Edut name, channel, avatar](http://cdn.bladebotlist.xyz/UZ87O0Vu)
5. And finally copy the webhook url  
    ![Copy webhook](http://cdn.bladebotlist.xyz/d1Jk5KFG)
6. If you did everything you must got an url like `https://discord.com/api/webhooks/000111222333444555/T0K3EN`

### Add it to BladeBotList

1. Go to `https://bladebotlist.xyz/bot/:YOURBOTID/edit/webhook`
    ![Bot Webhook page](http://cdn.bladebotlist.xyz/LDEOkqIU)
2. Paste the webhook url in the "Discord Webhook" field  
    ![Bot webhook](http://cdn.bladebotlist.xyz/xo1N86cf)
3. Click on "Edit Webhook" and you're done !  
    ![Edit webhook](http://cdn.bladebotlist.xyz/J2lVoD8e)
4. Test it by voting for the bot !  
    ![Vote demo](http://cdn.bladebotlist.xyz/TT0TMge7)


## Post to Custom Webhook server

### Using the BBL-API module

[Default config](https://github.com/BladeBotList/bbl-api/blob/master/examples/postdata.js)
```js

const BBL = require("../app");
const client = new BBL(
    "", // BOT_ID
    "", // API_KEY, use bbl!key gen on the discord server
    {
        server_count: "20", // number of servers ie: discordjs v12 => client.guilds.cache.size
        shard_count: "0", // number of shards, null if not defined
        interval: 300000, // interval bethween each post
    });


client.on("ready", () => console.log("Client is started !")); // when the module is loaded and ready to post data

client.on("debug", (log) => console.log(log)) // debug messages for developers, not required

client.on("update", () => console.log("Stats updated !")); // event when autopost or manual post

client.on("error", (error) => console.log(`Something was wrong when the module has posted stats: ${error}`)); // complete reports about errors like invalid api key or bot id
```

1. Add in the module config this:
```json
        webhook: {
            status: true,
            port: 6060,
            password: "youshallnotpass",
            endpoint:"/hook"
        }
```
2. Change the port if need (default: 3000)
3. Change the password or left empty to disable (Not recommanded at all) (default: none)
4. Change the endpoint if you want (default: /hook)
5. [Final code](https://github.com/BladeBotList/bbl-api/blob/master/examples/webhooks.js)
```js
const BBL = require("../app");
const client = new BBL(
    "", // BOT_ID
    "", // API_KEY, use bbl!key gen on the discord server
    {
        server_count: "3000",
        shard_count: "20",
        interval: 300000,
        webhook: {
            status: true,
            port: 6060,
            password: "youshallnotpass",
            endpoint:"/hook"
        }
    });


client.on("ready", () => console.log("Client is started !")); // when the module is loaded and ready to post data

client.on("debug", (log) => console.log(log))

client.on("update", () => console.log("Stats updated !")); // autopost or manual post

client.on("error", (error) => console.log(`Something was wrong when the module has posted stats: ${error}`)); // complete reports about errors like invalid api key or bot id

client.on("vote", (out) => {
/*
out must looks like
{
            "userid":355995885085392896,
            "usertag":`HiiZun#0001`,
            "username":`HiiZun`,
            "userdiscriminator":`0001`,
            "botID":`643499304950038539`,
            "date":1603908629750
}
*/

    console.log(`Whoohoo ! ${out.usertag} just voted !`)
})
```
6. the event "vote" is emitted when you receve a bot  

7. Go to `https://bladebotlist.xyz/bot/:BOTID/edit/webhook`, and put url as: `http://<serverIP>:<port>/<endpoint>` ex: http://mybot.bladebotlist.xyz:6060/hook  
    ![Example](http://cdn.bladebotlist.xyz/PfgIV682)
8. Add the password if you added it (you can seee it by clicking on "show password")  
    ![Password example](http://cdn.bladebotlist.xyz/HDuEaSR5)
9. And finally test !  
    ![](http://cdn.bladebotlist.xyz/XDIwUSSV)

### Using custom Webserver/Library/Code

**We don't give support for custom webhooks**

__Informations:__
- Requests are made as POST
- we proivde password in headers
- data is in the body
