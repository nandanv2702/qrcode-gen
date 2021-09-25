const qr = require("qr-image")

async function generate(request) {
  const { text } = await request.json()
  const headers = { "Content-Type": "image/png" }
  const qr_png = qr.imageSync(text || "Don't mess with the Zucc")
  return new Response(qr_png, { headers })
}

function handleRequest(request) {
  if (request.method === "POST") {
    return generate(request)
  }
  return new Response('Send a post request', { status: 405 })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
