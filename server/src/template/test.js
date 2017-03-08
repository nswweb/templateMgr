/**
 * Created by yaoyc on 2017/3/6.
 */

import {findDocuments,updateOneDocument,insertDocuments} from '../mongoDB/testMongoDB';

findDocuments('yao', {desc:'lxwm_r2-01.html'}).then(function (data) {
	console.log(data);
});