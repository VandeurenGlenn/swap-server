import cors from '@koa/cors'
import Koa from 'koa'
import { routes as swapRoutes } from './routes/swap.js'

const app = new Koa()
app.use(
  cors({
    // origin: 'https://babyfox-crypto.github.io'
  })
)

app.use(swapRoutes)

app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`))
