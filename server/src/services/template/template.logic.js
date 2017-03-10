import {basItem} from '../basItem'
import {dbSchema} from './template.schema';
export class TemplateLogic extends basItem{
    constructor() {
        super('yao', dbSchema);
    }
}