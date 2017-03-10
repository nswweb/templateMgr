import { TemplateLogic } from '../../services/template/template.logic';
import { routePrefix, route, koaRouter } from '../../router';


koaRouter.add(TemplateController);
var logic = new TemplateLogic();

@routePrefix('templatex')
export class TemplateController {
    @route('item/:id') // http://localhost:3000/api/templatex
    async getTemplate({ id }) {
        let user = await timeout({ id: "01", name: 'bowen', xxx: id });
        return user;
    }

    @route('list')// http://localhost:3000/api/templatex/list
    async getTemplates() {
        let users = await logic.getSearchList();
        return users;
    }
}

function timeout(testVal) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(testVal);
        }, 10);
    });
}