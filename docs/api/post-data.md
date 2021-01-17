# Post informations

## Using module

**READ MODULE'S DOCS**
[NODE.js Module](https://www.npmjs.com/package/bbl-api)

### Manual post

#### Important

Things with \* are mandatory

**Please add these things in headers**

| Key             | Value            |
| --------------- | ---------------- |
| authorization\* | Bot's API KEY    |
| Content-Type    | application/json |

**Please add these things in body **as json****

| Key           | Value                       |
| ------------- | --------------------------- |
| servercount\* | number of servers           |
| shardcount    | number of shards if sharded |

**Then you will need to do this request**

`POST /bots/:botID/stats`

_Output:_<br>

```json
{
	"ok": "successfully posted servercount servers for the bot botname !"
}
```
