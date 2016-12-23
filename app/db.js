/**
 * Created by Tmlewallen on 5/8/16.
 */

let mongoose = require('mongoose');
let env = process.env.ENV;
let deets = env === 'PROD' ? require('./secrets-prod') : require('./secrets');
if (deets.local){
    mongoose.connect('mongodb://localhost/GoalTracker');
    console.log('Connecting to localhost...');
}
else {
    mongoose.connect(`mongodb://${deets.username}:${deets.password}${deets.url}`);
    console.log(`Connecting to ${deets.url}...`)
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected!');
});

module.export = db;