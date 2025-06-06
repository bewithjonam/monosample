import path from "node:path";
import {createServer} from "vite"

const viteDevServer = await createServer({
  server: {
    middlewareMode: true
  },
  appType: "custom",
  root: '../../web/src',
  // base: "/web",
});

export const viteMiddleware = viteDevServer.middlewares;
