import Koarouter from 'koa-router'
import MyModel from '../model/db.js'

const router = new Koarouter()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/save', async (ctx, next) => {
  let model = new MyModel({
    num: '123',
    name: 'liup',
    size: 'big'
  })
  await model.save()
  ctx.body = 'koa2 string'
})

export default router
