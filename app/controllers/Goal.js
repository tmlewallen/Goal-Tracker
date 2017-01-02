/**
 * Created by Tmlewallen on 5/8/16.
 */
var express = require('express');
var goalModel = require('../models/Goal');
var entryModel = require('../models/Entry');

var app = express.Router();

// app.route('/')
//     .post( (req, res) => {
//         console.log(req.body);
//         goalModel(req.body).save( (err) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send(err);
//             }
//             else{
//                 res.status(201).send();
//             }
//         })
//     });

app.route('/list/:id')
    .get( (req, res) => {
        //Call goalModel logic
        var id = req.params.id;
        goalModel.find({_id : id}, (err, result) => {
            if (err){
                res.status(500).send(err);
            }
            else {
                res.status(200).send(result);
            }
        })
    });
    // .put( (req, res) => {
    //     var id = req.params.id;
    //     res.status(200).send('Updated goal : ' + id)
    // })
    // .delete( (req, res) => {
    //     var id = req.params.id;
    //     res.status(200).send('Deleted : ' + id);
    // });

app.route('/list/:id/entries')
    .get( (req, res) => {
        //Call goalModel logic
        var id = req.params.id;
        entryModel.find({goalId : id}, (err, result) => {
            if (err){
                res.status(500).send(err);
            }
            else {
                res.status(200).send(result);
            }
        })
    });


app.route('/list')
    .get( (req, res) => {
        goalModel.find({}, (err, result) => {
            if (err){
                res.status(500).send(err);
            }
            else {
                res.status(200).send(result);
            }
        })
    });


module.exports = app;