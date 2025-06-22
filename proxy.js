const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/gtag', createProxyMiddleware({
  target: 'https://www.googletagmanager.com',
  changeOrigin: true,
  pathRewrite: { '^/gtag': '' },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
