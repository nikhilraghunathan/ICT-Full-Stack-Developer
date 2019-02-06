var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    id:{type:String},
    name:{type:String},
    author:{type:String},
    publisher:{type:String},
    price:{type:Number}
    

})
module.exports = mongoose.model("book2",BookSchema);