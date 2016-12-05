/**
 * Created by Tmlewallen on 5/8/16.
 */
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

module.exports = entrySchema;