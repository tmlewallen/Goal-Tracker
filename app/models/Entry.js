var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var entrySchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    goalId : String,
    timestamp : Date,
    note : String,
    state : Date
}, {collection : 'entry'});

var Entry = mongoose.model('Entry',entrySchema);
module.exports = Entry;