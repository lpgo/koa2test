const router = require('koa-router')()
const doc = require("../model/db.js")

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
  await doc.save()
  ctx.body = 'koa2 string'
})

module.exports = router
