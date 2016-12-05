/**
 * Created by Tmlewallen on 5/8/16.
 */
var express = require('express');
var model = require('../models/Entry');

var app = express.Router();

app.route('/')
    .get( (req, res) => {
        console.log('list entries');
        model.find({}, (err, result) => {
            if (err){
                res.status(500).send(err);
            }
            else {
                res.status(200).send(result);
            }
        })
    }); 

module.exports = app;