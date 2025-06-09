import express from 'express';
import { viteMiddleware } from '@repo/web/viteMiddleware';
// import proxy from 'express-http-proxy';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { getMessage } from './msg.js';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(getMessage());
})


// app.use('/web/*', createProxyMiddleware<Request, Response>({
//   target: 'http://localhost:5173/web',
//   changeOrigin: true,
// }));

// app.use(createProxyMiddleware<Request, Response>({
//   target: 'http://localhost:5173',
//   pathFilter: (pathname, req) => {
//     return !!pathname.match('^/web')
//   }
//   // changeOrigin: true,
//   // pathFilter: '/web/**/*'
// }));

// app.use('/web/', (req, res) => {
// // app.use('/web/*', (req, res) => {
//   res.sendFile('index2.html', { root: '../web' });
// });

app.use(viteMiddleware);
// app.use('/web/:wildcard', (req, res) => {
// // app.use('/web/*', (req, res) => {
//   res.sendFile('index2.html', { root: '../web' });
// });



// app.use('*', async (req, res) => {
//   res.send('I dont know');
//   // Since `appType` is `'custom'`, should serve response here.
//   // Note: if `appType` is `'spa'` or `'mpa'`, Vite includes middlewares
//   // to handle HTML requests and 404s so user middlewares should be added
//   // before Vite's middlewares to take effect instead
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
