import {
    BasSysSchema
} from '../_baseItems';


var userItemSchema = BasSysSchema.createSchema({
    userRoleId:ObjectId
}); 

export {userItemSchema};