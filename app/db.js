/**
 * Created by Tmlewallen on 5/8/16.
 */

let mongoose = require('mongoose');
let deets = require('./secrets');
if (deets.local){
    mongoose.connect('mongodb://localhost/GoalTracker');
}
else {
    mongoose.connect(`mongodb://${deets.username}:${deets.password}${deets.url}`);
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected!');
});

module.export = db;