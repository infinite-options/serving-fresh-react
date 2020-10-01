// Note: This file is for deployment only

const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/servingfresh.me/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/servingfresh.me/cert.pem')
}

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);

https.createServer(options, app).listen(process.env.PORT + 1 || 443);