var koaRouter = new require('koa-router')({
  prefix:'/api'
});

koaRouter.add = function(Controller){
  if(typeof controller === 'function'){
    new Controller();
  }
};

export {koaRouter};
