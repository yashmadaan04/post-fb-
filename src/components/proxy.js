
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/home', createProxyMiddleware({ target: 'https://twitter.com/i/flow/login', changeOrigin: true }));
app.listen(3000);