/**
 * Created by Tmlewallen on 5/8/16.
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var goalSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name : String,
    description : String,
    type : Number,
    startDate : Date,
    endDate : Date,
    frequency : Number,
    period : Number,
    lastModified : Date,
    done : Boolean
}, {collection : 'goal'});

var Goal = mongoose.model('Goal',goalSchema);
module.exports = Goal;

