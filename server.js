const http = require('http');
const app = require('./app.js');

http.createServer(app).listen(3000);
console.log('server up');
