/**
 * Created by Tmlewallen on 5/8/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var goalSchema = new Schema({
    _id: {
        type: String
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

