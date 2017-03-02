import {routePrefix, route, koaRouter} from './router';
koaRouter.add(TemplateConteroller);

@routePrefix('template')
export class TemplateConteroller{
    @route('load/:id')
    async getTemplate({id}){
        id = await timeout(id);
        this.body = 'ttttttt' + id;
    }

    @route('loadUsers/:filter')
    async users({filter}){
        let vv = await timeout([{id:"01",name:'bowen'},{id:'02',name:'owen'}]);
        this.body = vv;
    }

    @route('loadTpls','get', false)
    getTemplates(){
        this.body = 'abkjl;kjd;slfj';
    }
}

function timeout(testVal) {
  return new Promise((resolve) => {
    setTimeout(function(){
        resolve(testVal);
    }, 2000);
  });
}

