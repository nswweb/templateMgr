var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbSchema = new Schema({
   // _id: Schema.Types.ObjectId,
    desc: String,
    htmlContent: String,
    imgLg: String,
    imgSm: String,
    name: String,
    title: String
});


export { dbSchema }