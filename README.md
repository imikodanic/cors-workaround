# CORS Workaround API

This is a NodeJs API with which you can send API calls to any URL

## Request example

```
{
	"method": "GET",
	"url": "https://somewebsiteapi/login",
	"headers": {
		"Authorization": "JWT Token"
	},
	"data": {
		"firstName": "Ivann"
		"lastname": "Mikodanic"
	}
}
```