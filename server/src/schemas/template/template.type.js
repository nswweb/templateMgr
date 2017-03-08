// import {Schema} from 'mongoose';
import {
    BasItemSchema
} from '../_baseItems';

var templateTypeSchema = BasItemSchema.createTreeSchema({
    title: String,
    isDefault: Boolean
});

export {
    templateTypeSchema
};