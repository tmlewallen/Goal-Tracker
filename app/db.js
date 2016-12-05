/**
 * Created by Tmlewallen on 5/8/16.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GoalTracker');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected!');
});

module.export = db;