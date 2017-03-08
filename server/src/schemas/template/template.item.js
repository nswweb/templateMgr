import {
    BasSysSchema
} from '../_baseItems';


var templateItemSchema = BasSysSchema.createSchema({
    templateTypeId: ObjectId,
    desinger: String
});

export {
    templateItemSchema
};