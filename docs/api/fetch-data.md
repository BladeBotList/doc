# Fetch informations

### IMPORTANT

**Please make sure to read the introduction before request help !**  
_Fetching data must be done with a GET request_

## Fetch global statistics about a bot

`GET /bots/:botID/`

Response:

```json
{
	"name": "mybot#0000",
	"id": "000000000",
	"avatar": "https://cdn.discordapp.com/avatars/id/avatar.png",
	"prefix": "!",
	"library": "library",
	"owner": "exemple#0000",
	"ownerid": "00000000000",
	"short_desc": "The short desc",
	"long_desc": "the bot's description",
	"tags": ["music", "info", "traffic"],
	"support": "https://discord.gg/support",
	"website": "https://bladebotlist.xyz",
	"github": "https://github.com/bladebotlist",
	"servers": "n/a or a number",
	"status": "approved/waiting/declined",
	"votes": "number",
	"certified": "boolean"
}
```

## Fetch a array of bots in the botlist

`GET /bots`

**PRIVATE ENDPOINT**

## Fetch if a user has voted for a bot

`GET /bots/:botID/votes/:userID`

Response:

```json
{
	"voted": "boolean",
	"votes": "number of votes"
}
```
