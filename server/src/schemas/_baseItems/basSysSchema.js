import {Schema} from 'mongoose';
import {BasSchema} from './_basSchema';

var _basSchema = {
    title:String
};

let basSchema = new BasSchema();
export class BasSysSchema{
    static createSchema(schema){
        let extendedSchema = basSchema.extend(
            schema, _basSchema
        );

        return new Schema(extendedSchema);
    }

     static createTreeSchema(schema) {
        let extendedSchema = basSchema.extedTree(
            schema, _basSchema
        );
        return new Schema(extendedSchema);
    }
}