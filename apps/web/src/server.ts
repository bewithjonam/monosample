import express from 'express'
import { createServer as createViteServer } from 'vite'

const app = express()
const port = 3000;

// Create Vite server in middleware mode
const vite = await createViteServer({
  server: { middlewareMode: true },
  // don't include Vite's default HTML handling middlewares
  appType: 'custom',
})
app.get('/', (req, res) => {
  res.send('Hello World!')
});
// Use vite's connect instance as middleware
app.use(vite.middlewares)

app.use('/web/*', async (req, res) => {
  // Since `appType` is `'custom'`, should serve response here.
  // Note: if `appType` is `'spa'` or `'mpa'`, Vite includes middlewares
  // to handle HTML requests and 404s so user middlewares should be added
  // before Vite's middlewares to take effect instead
  res.sendFile('index2.html', { root: './' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
