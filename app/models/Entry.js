var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var entrySchema = new Schema({
    _id: {
        type: String
    },
    goalId : String,
    timestamp : Date,
    note : String,
    active : Boolean
}, {collection : 'entry'});

var Entry = mongoose.model('Entry',entrySchema);
module.exports = Entry;
