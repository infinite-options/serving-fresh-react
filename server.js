// Note: This file is for deployment only

const express = require('express');
const path = require('path');
const http = require('http')
const https = require('https');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var key_url = '/etc/letsencrypt/live/servingfresh.me/privkey.pem';
var cert_url = '/etc/letsencrypt/live/servingfresh.me/cert.pem';

var options = {}

if(process.env.SUDO_USER != undefined) {
  options["key"] = fs.readFileSync(key_url);
  options["cert"] = fs.readFileSync(cert_url);
  http.createServer(function(req, res) {
    res.writeHead(301, {
      Location: "https://" + req.headers["host"] + req.url
    })
    res.end();
  })
  .listen(80);
  https.createServer(options, app).listen(443);
} else {
  options["key"] = fs.readFileSync('key.pem');
  options["cert"] = fs.readFileSync('cert.pem');
  app.listen(PORT);
  https.createServer(options, app).listen(process.env.PORT + 1 || 443);
}