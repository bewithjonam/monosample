import path from "node:path";
import {createServer} from "vite"

const viteDevServer = await createServer({
  server: {
    middlewareMode: true,
    fs: {
      allow: [
        '..'
      ],
      strict: false
    }
  }, 
  appType: "spa",
  root: '../web/',
  base: "/web/",
});

export const viteMiddleware = viteDevServer.middlewares;
