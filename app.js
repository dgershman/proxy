var https = require('https'),
    httpProxy = require('http-proxy');

proxy = httpProxy.createProxyServer({
  target: 'https://tomato.na-bmlt.org',
  agent  : https.globalAgent,
  headers: {
    host: 'tomato.na-bmlt.org'
  }
}).listen(8011);

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    console.log(req.url)
    console.log(res.url)
});
