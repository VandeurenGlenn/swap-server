import Router from '@koa/router'
import Api from '@vandeurenglenn/swap-api'

const router = new Router()
const oneInchAPi = new Api('1inch', process.env.API_KEY)

router.get('/tokens', async (ctx) => {
  ctx.body = await oneInchAPi.tokens(Number(ctx.query.chainId))
})

router.get('/quote', async (ctx) => {
  ctx.body = await oneInchAPi.quote(
    Number(ctx.query.chainId),
    ctx.query.tokenIn,
    ctx.query.tokenOut,
    ctx.query.amount,
    ctx.query.fee
  )
})

router.get('/swap', async (ctx) => {
  ctx.body = await oneInchAPi.swap(
    Number(ctx.query.chainId),
    String(ctx.query.tokenIn),
    String(ctx.query.tokenOut),
    String(ctx.query.amount),
    String(ctx.query.from),
    Number(ctx.query.slippage),
    Number(ctx.query.fee)
  )
})

router.get('/approve', async (ctx) => {
  ctx.body = await oneInchAPi.approve(ctx.query.chainId, ctx.query.tokenAddress, ctx.query.amount)
})

router.get('/allowance', async (ctx) => {
  ctx.body = await oneInchAPi.allowance(ctx.query.chainId, ctx.query.tokenAddress, ctx.query.amount)
})

router.get('/routerAddress', async (ctx) => {
  ctx.body = await oneInchAPi.routerAddres(ctx.query.chainId)
})

export const routes = router.routes()
