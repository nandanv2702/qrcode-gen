# Serverless QR Code Generator

Uses [Cloudflare Workers](https://developers.cloudflare.com/workers/) to generate QR code from text sent as a POST request

## How to Use

Send a POST request to https://qrcode-gen.nandan.workers.dev with a body 

```js
{
  'text': TEXT_TO_CONVERT_TO_QR_CODE
}
```

```console
user@computer:~$ curl -X POST -d '{"text": "this is a fucking secret; istg do not tell anyone else"}' https://qrcode-gen.nandan.workers.dev > result.png
```

