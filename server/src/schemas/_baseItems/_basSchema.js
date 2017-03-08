var _ = require('lodash');


var _basSchema = {
    description: String,
    createBy: ObjectId,
    updateBy: ObjectId,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
};

var _basTreeSchema = {
    parentId:ObjectId
};

export class BasSchema {
    extend() {
        var args = _.toArray(arguments);
        args.push(_basSchema);
        _.extend(...args);
    }
    extendTree(){
        var args = _.toArray(arguments);
        args.push(_basTreeSchema);
        this.extend(...args);
    }
}