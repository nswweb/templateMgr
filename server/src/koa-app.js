import "babel-polyfill";
import {routePrefix,route, koaRouter} from './router';
require('babel-core/register');
const Koa = require('Koa');
const app = new Koa();

import './demo/template.controller';
import './demo/user.controller';




/*
app.use(ctx => {
  ctx.body = 'Hello World';
});*/

// app.use(async function (ctx, next) {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   ctx.body = 'cc' + 'Hello World';
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

app.use(koaRouter.routes())
   .use(koaRouter.allowedMethods());

console.log('server started : http://localhost:3000/');
app.listen(3000);


// function enumerable(value) {
//   return function (target, key, descriptor) {
//     console.log('method==========',descriptor);
//      descriptor.enumerable = value;
//      return descriptor;
//   }
// }

// @routePrefix('c')
// class abc {  
//   @route('users/:id','get')
//   method({id}) {
//   }

//   constructor(){
//     this.age = 100;
//   }
// }


// var x = new abc();
// console.log(x.router);