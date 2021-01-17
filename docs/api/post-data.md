# Post informations

## Using our module

Read the package docs before using it!  
[NODE.js Module](https://www.npmjs.com/package/bbl-api)

## Posting manually

### Headers

| Key           | Value            |
| ------------- | ---------------- |
| Authorization | Bot's API KEY    |
| Content-Type? | application/json |

### Body

| Key          | Value                        |
| ------------ | ---------------------------- |
| server_count | number of servers            |
| shard_count? | number of shards, if sharded |

### Endpoint

`POST /bots/:botID/stats`

### Response

```json
{
	"ok": "successfully posted servercount servers for the bot botname !"
}
```
