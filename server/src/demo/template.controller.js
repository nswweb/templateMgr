import {routePrefix, route, koaRouter} from '../router';
koaRouter.add(TemplateConteroller);

@routePrefix('template')
export class TemplateConteroller{
    @route('load/:id') //http://localhost:3000/template/load/(id)
    async getTemplate({id}){
        id = await timeout(id);
        return id;
    }

    @route('loadUsers/:filter') //http://localhost:3000/template/loadUsers/(filter)
    async users({filter}){
        let vv = await timeout([{id:"01",
        code:`Note that many editors support “safe write” feature and have it enabled by default, which makes dev server unable to watch files correctly. “Safe write” means changes are not written directly to original file but to temporary one instead, which is renamed and replaces original file when save operation is completed successfully. This behaviour causes file watcher to lose the track because the original file is removed. In order to prevent this issue, you have to disable “safe write” feature in your editor.`},
        {id:'02',code:`The Webpack dev server makes use of http-proxy-middleware to optionally proxy requests to a separate, possibly external, backend server. A sample configuration is below.`}]);
        return vv;
    }

    @route('loadTpls','get', false) //http://localhost:3000/template/loadTpls
    getTemplates(){
        return `<div>helel</div>`;
    }
}

function timeout(testVal) {
  return new Promise((resolve) => {
    setTimeout(function(){
        resolve(testVal);
    }, 10);
  });
}

