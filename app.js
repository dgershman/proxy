var https = require('https'),
    httpProxy = require('http-proxy');

proxy = httpProxy.createProxyServer({
  target: 'https://' + process.env["PROXY_TARGET"],
  agent  : https.globalAgent,
  headers: {
    host: process.env["PROXY_TARGET"]
  }
}).listen(8011);

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    console.log(req.url)
    console.log(res.url)
});
