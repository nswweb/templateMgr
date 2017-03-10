var mongoose = require('mongoose');
import { mongodbConfig } from '../config.js';
var _ = require('lodash');
export class basItem {
    constructor(name, schema) {
        this.name = name;
        this.schema = schema;
        mongoose.model(this.name, this.schema);
    }

    async openCollection() {
        return new Promise((resolve, reject) => {
            var db = mongoose.createConnection(mongodbConfig.server, mongodbConfig.database);
            this.connection = db;
            db.once('open', (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        });
    }

    closeConnection() {
        this.connection.close();
    }

    getSelector() {
        return mongoose.model(this.name);
    }

    findOne() {
        return mongoose.model(this.name).findOne;
    }

    toPromise = function (execotor) {
        return new Promise((resolve, reject) => {
            execotor((err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            })
        });
    }

    getItemById(id, selector) {        
        selector = selector || this.getSelector();
        return new Promise((resolve, reject) => {
            selector.findById(id, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }



    async getSearchList(selectorFn) {
        await this.openCollection();
        var selector = this.getSelector();
        if (selectorFn) {
            selectorFn(selector);
        }
        let result = await this.toPromise(selector.find({'name':'首页'}).exec);
        this.closeConnection();
        console.log(result);
        return result;
    }

    async removeItem(selector) {
        await this.openCollection();
        var selector = getSelector();
        try {
            let dbItem = await getItemById(item._id, selector);
            return new Promise((resolve, reject) => {
                selector.remove(selector, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(dbItem);
                    }
                });
            })
        } catch (err) {
            console.log(err);
            throw (err);
        }finally{
            this.closeConnection();
        }
    }

    async updateItem(item, callback) {
        await this.openCollection();
        var selector = getSelector();
        try {
            let dbItem = await getItemById(item._id, selector);
            _.extend(dbItem, _.omit(item, '_id'));
            let result = await selector.save(dbItem);
            return dbItem;
        } catch (err) {
            console.log(err);
            throw (err);
        } finally{
            this.closeConnection();
        }
    }
}



