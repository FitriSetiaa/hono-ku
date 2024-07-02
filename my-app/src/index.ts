import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors';
const app = new Hono()
app.use(cors())

let namaku = [{ 'nama': 'Fitri', 'umur': 20 },
  { 'nama': 'Setia', 'umur': 20 }
];

app.get('/', (c) => {
  return c.json(namaku)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
