import {routePrefix, route, koaRouter} from '../router';
import {findDocuments,updateOneDocument,insertDocuments} from '../mongoDB/testMongoDB';
import {getHtmlDocument,getHtmlFiles,EditorTpl} from './template.service';
koaRouter.add(EditTemplateConteroller);

@routePrefix('editTemplate')
export class EditTemplateConteroller{
	@route('editTpls') //http://localhost:3000/editTemplate/editTpls
	async getEditTemplates({id}){
		id = await findDocuments('yao', {})
		return id;
	}
	@route('importDocuments','get',false)
	importDocs(){
		getHtmlDocument().then(function (htmlDocs) {
			htmlDocs.forEach(function (val) {
				findDocuments('yao', {desc: val.desc}).then(function (data) {
					if (data.length) {
						updateOneDocument('yao', {o: {desc: val.desc}, n: {$set: val}});
					} else {
						insertDocuments(val, 'yao');
					}
				});
				
			});
		});
	}
	@route('getEditTpl/:id')
	async getEditTemplate({id}){
		let data = await findDocuments('yao',{_id:id});
		return data;
		
	}
}


function timeout(testVal) {
	return new Promise((resolve) => {
		setTimeout(function(){
			resolve(testVal);
		}, 10);
	});
}
