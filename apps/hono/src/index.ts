import { Hono } from 'hono'
import { HonoAppType } from '../types/cf'

const app = new Hono<HonoAppType>()

app.get("/", async (c) => {
  const html = await c.env.ASSETS.get("index.html")
  if (!html) {
    return c.text("Template not found", 404)
  }

  return c.html(html)
})

export default app
