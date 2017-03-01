require('babel-core/register');
const Koa = require('Koa');
const app = new Koa();

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

console.log('server started : http://localhost:3000/');
app.listen(3000);